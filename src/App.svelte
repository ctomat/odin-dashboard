<script lang="ts">
  import AppTrendingList from "./components/molecules/AppTrendingList/AppTrendingList.svelte";
  import AppAnnouncementsPaper from "./components/molecules/AppAnnouncementsPaper/AppAnnouncementsPaper.svelte";

  import AppCardGrid from "./components/organism/AppCardGrid/AppCardGrid.svelte";
  import AppSidebar from "./components/organism/AppSidebar/AppSidebar.svelte";
  import AppDashboardNavigation from "./components/organism/AppDashboardNavigation/AppDashboardNavigation.svelte";

  import avatarImage from "./assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp";
</script>

<main class="main-container">
  <div class="sidebar-container">
    <AppSidebar
      sidebarElementsList={[
        { elementText: "Home", icon: "home", section: "primary" },
        {
          elementText: "Profile",
          icon: "card-account-details-outline",
          section: "primary",
        },
        {
          elementText: "Messages",
          icon: "message",
          section: "primary",
        },
        {
          elementText: "History",
          icon: "clock-time",
          section: "primary",
        },
        {
          elementText: "Tasks",
          icon: "note-multiple",
          section: "primary",
        },
        {
          elementText: "Communities",
          icon: "account-multiple",
          section: "primary",
        },
        {
          elementText: "Settings",
          icon: "cog",
          section: "secondary",
        },
        {
          elementText: "Support",
          icon: "help-box",
          section: "secondary",
        },
        {
          elementText: "Privacy",
          icon: "shield-check",
          section: "secondary",
        },
      ]}
    />
  </div>
  <div class="dashboard-container">
    <div class="navigation-container">
      <AppDashboardNavigation
        username="User Name"
        {avatarImage}
        color="primary"
      />
    </div>
  </div>
</main>

<style>
  .main-container {
    display: flex;
    background-color: var(--body-background-color);
  }
  .sidebar-container {
    width: 25%;
  }
  .dashboard-container {
    width: 75%;
  }
  .navigation-container {
    width: 98%;
    margin: 10px auto;
  }
</style>
