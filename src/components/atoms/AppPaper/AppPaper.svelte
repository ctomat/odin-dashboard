<script lang="ts">
    export let card = false;
    export let paperStyle: 'Gradient' | 'Plain Color' = 'Gradient'
</script>

<div class={`paper ${paperStyle === 'Gradient' ? 'gradient-background' : 'plain-color-background'}`}>
    <slot></slot>
</div>

<style>
    .paper {
        width: 100%;
        height: 100%;
        padding: 20px 20px;
        color: var(--text-primary-color);
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        position: relative;
    }

    .gradient-background {
        background: rgb(73,85,238);
        background: -moz-linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        background: linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
    }

    .plain-color-background {
        background-color: var(--paper-plain-color);
    }
</style>