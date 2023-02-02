<script lang="ts">
  import AppText from "../../atoms/AppTitle/AppText.svelte";
  import AppIcons from "../../atoms/AppIcons/AppIcons.svelte";

  export let icon: string;
  export let elementText: string;
</script>

<div class="sidebar-element-container">
  <div class="transition-wrap">
    <div class="sidebar-icon-container">
      <AppIcons class="icon" {icon} iconSize="Medium" />
    </div>
    <div class="sidebar-text-container">
      <AppText text={elementText} textType="body" color="primary" />
    </div>
  </div>
</div>

<style>
  .sidebar-element-container {
    cursor: pointer;
  }
  .transition-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.5s ease-in-out;
  }
  .transition-wrap:hover {
    transform: translateX(20px);
  }
  .sidebar-text-container {
    font-size: 1.2rem;
  }
</style>
