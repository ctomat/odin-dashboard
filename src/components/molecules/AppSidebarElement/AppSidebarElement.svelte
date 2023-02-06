<script lang="ts">
  import AppText from "../../atoms/AppTitle/AppText.svelte";
  import AppIcons from "../../atoms/AppIcons/AppIcons.svelte";

  export let icon: string;
  export let elementText: string;
</script>

<div class="sidebar-element-container">
  <div class="transition-wrap">
    <div class="sidebar-icon-container">
      <AppIcons class="icon" {icon} iconSize="Small" />
    </div>
    <div class="sidebar-text-container">
      <AppText text={elementText} textType="body" color="primary" />
    </div>
  </div>
</div>

<style>
  .sidebar-element-container {
    width: 100%;
    cursor: pointer;
  }
  .transition-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.5s ease-in-out;
  }
  .transition-wrap:hover {
    transform: translateX(10px);
  }
  .sidebar-text-container {
    font-size: 1.1rem;
  }
</style>
