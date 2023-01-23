<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let label: string
    export let color: 'Blue' | 'Green' | 'Red';
    export let details: {text: string} = {text: ''}

    const dispatch = createEventDispatcher();

    function clickEvent() {
		dispatch('clickEvent', details);
	}
</script>

<button 
    type="button" 
    class="{color.toLowerCase()}" 
    on:click|preventDefault={clickEvent}
>
    {label}
</button>

<style>
    button {
        padding: 15px 50px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        color: var(--text-primary-color);
    }

    .blue {
        background: rgb(73,85,238);
        background: -moz-linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        background: linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
    }
</style>