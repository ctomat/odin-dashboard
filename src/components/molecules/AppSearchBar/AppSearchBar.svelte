<script lang="ts">
  import AppInput from "../../atoms/AppInput/AppInput.svelte";

  import CardSearchOutline from "../../../assets/svg/CardSearchOutline.svelte";

  export let value: string = "";
</script>

<div class="searchbar-container">
  <figure>
    <CardSearchOutline />
  </figure>
  <div class="input-container">
    <AppInput {value} on:input={() => {}} />
  </div>
</div>

<style>
  .searchbar-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .input-container {
    width: 100%;
  }
  figure {
    width: 40px;
    height: auto;
    fill: var(--text-primary-color);
    cursor: pointer;
  }
</style>
