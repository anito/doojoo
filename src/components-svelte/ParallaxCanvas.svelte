<script>
    import { onMount } from 'svelte';

	export let src;
	export let alt;

    let sy = 0;
    
    let canvas;
	let running = false;

	const r = Math.random();

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame;

		(function loop() {
			frame = requestAnimationFrame(loop);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width * 4;
				const y = i / canvas.height >>> 0;

				const t = window.performance.now();

				const r = 128 + (64 * x / canvas.width) + (128 * Math.sin(t / 1000));
				const g = 128 + (64 * y / canvas.height) + (128 * Math.cos(t / 1000));
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
		}());

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window bind:scrollY={sy}/>

<style lang="scss">
	.parallax {
		position: absolute;
		top: 4rem;
		right: 0rem;
		width: 60%;
		height: 80%;
		will-change: transform;
		display: none;
	}

	canvas{
		width: 100%;
		height: 100%;
		background-color: #666;
		-webkit-mask-position: 100% 0%;
		-webkit-mask-repeat: no-repeat;
		mask-position: 100% 0%;
		mask-repeat: no-repeat;
		opacity: .4;
	}
    
	@media (min-width: 640px) {
		.parallax {
			display: block;
		}
	}

	@media (min-width: 1200px) {
		.parallax {
			right: calc(50vw - 60rem);
		}
	}
</style>

<canvas
	bind:this={canvas}
    class="parallax canvas"
    style="transform: translate(0, {sy * .4}px); -webkit-mask-image: url(../{src}); mask-image: url(../{src})"
	width={32}
	height={32}
></canvas>