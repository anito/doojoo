import { writable } from "svelte/store"

const cocktails = writable([]);

const cocktailStore = {
    subscribe: cocktails.subscribe,
    setCocktails: (items) => {
        cocktails.set(items)
    },
    addCocktail: (item) => {
        cocktails.update(items => {
            return [...items, item]
        })
    }
}

export default cocktailStore;