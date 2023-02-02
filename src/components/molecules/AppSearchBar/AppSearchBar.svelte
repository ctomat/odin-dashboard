<script lang="ts">
  import AppInput from "../../atoms/AppInput/AppInput.svelte";
  import AppIcons from "../../atoms/AppIcons/AppIcons.svelte";

  export let value: string = "";
</script>

<div class="searchbar-container">
  <div class="searchbar-icon-container">
    <AppIcons icon="card-search-outline" iconSize="Big" />
  </div>
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
  .searchbar-icon-container {
    cursor: pointer;
  }
</style>
