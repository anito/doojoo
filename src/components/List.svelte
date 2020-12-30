<script>
  import { onMount } from "svelte";
  import cocktailStore from "../stores/cocktails";

  export let cocktails = [];


</script>

<style>

</style>

<ul class="ul" >
  {#each cocktailStore as cocktail}
  <li class="li">{cocktail}</li>
  {/each}
</ul>
