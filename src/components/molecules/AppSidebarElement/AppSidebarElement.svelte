<script lang="ts">
  import AppText from "../../atoms/AppTitle/AppText.svelte";

  export let elementText: string;
  export let elementIcon: string;
  export let alt: string;
</script>

<div class="sidebar-element-container">
  <figure class="sidebar-icon-container" />
  <div class="sidebar-text-container">
    <AppText text={elementText} textType="body" color="primary" />
  </div>
</div>

<style>
  .sidebar-icon-container {
    fill: white;
  }
</style>
