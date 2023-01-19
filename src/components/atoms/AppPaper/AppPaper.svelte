<script lang="ts">
    export let card = false;
</script>

<div class="paper">
    <slot></slot>
</div>

<style>
    .paper {
        width: 100%;
        height: 100%;
        padding: 20px 20px;
        background: rgb(73,85,238);
        background: -moz-linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        background: linear-gradient(90deg, rgba(73,85,238,1) 35%, rgba(62,151,234,1) 100%);
        color: var(--text-primary-color);
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        position: relative;
    }

    .card-decoration {
        top: 0;
        left: 0;
        width: 40%;
        height: 100%;
        position: absolute;
        background: rgb(19,26,38);
        background: -moz-linear-gradient(180deg, rgba(19,26,38,1) 35%, rgba(38,45,62,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(19,26,38,1) 35%, rgba(38,45,62,1) 100%);
        background: linear-gradient(180deg, rgba(19,26,38,1) 35%, rgba(38,45,62,1) 100%);
        border-radius: 15px;
        box-shadow: 0, rgba(0, 0, 0, 0.23) 0px 3px 6px, 0, 0;
        z-index: 1;
    }
</style>