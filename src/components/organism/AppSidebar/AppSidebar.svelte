<script lang="ts">
  import AppText from "../../atoms/AppTitle/AppText.svelte";
  import AppSidebarElement from "../../molecules/AppSidebarElement/AppSidebarElement.svelte";

  import auroraLogo from "../../../assets/image/aurora-custom-logo.png";

  type sidebarElementsListType = {
    elementText: string;
    icon: string;
    section: "primary" | "secondary";
  };

  export let sidebarElementsList: sidebarElementsListType[] = [];
</script>

<nav class="sidebar-container">
  <header class="sidebar-title-container">
    <figure class="sidebar-logo-container">
      <img src={auroraLogo} alt="aurora-logo" />
    </figure>
    <div class="sidebar-title">
      <AppText text="Dashboard" textType="h2" color="primary" />
    </div>
  </header>
  <div class="primary-section-container">
    {#each sidebarElementsList as sidebarElement}
      {#if sidebarElement.section === "primary"}
        <AppSidebarElement
          elementText={sidebarElement.elementText}
          icon={sidebarElement.icon}
        />
      {/if}
    {/each}
  </div>
  <div class="secondary-section-container">
    {#each sidebarElementsList as sidebarElement}
      {#if sidebarElement.section === "secondary"}
        <AppSidebarElement
          elementText={sidebarElement.elementText}
          icon={sidebarElement.icon}
        />
      {/if}
    {/each}
  </div>
</nav>

<style>
  .sidebar-title-container {
    display: flex;
    align-items: center;
    padding: 20px 0 0 20px;
    gap: 10px;
  }
  .sidebar-logo-container {
    width: 70px;
    height: auto;
  }
  .sidebar-title {
    margin-top: 15px;
  }
  .primary-section-container {
    margin: 40px 0;
  }
  .primary-section-container,
  .secondary-section-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 30px;
  }
  .sidebar-container {
    background-color: var(--navbar-background-color);
    height: 100vh;
  }
</style>
