<script lang="ts">
  import AppPaper from "../../atoms/AppPaper/AppPaper.svelte";
  import AppSearchBar from "../../molecules/AppSearchBar/AppSearchBar.svelte";
  import AppDashboardActionsMenu from "../../molecules/AppDashboardActionsMenu/AppDashboardActionsMenu.svelte";
  import AppProfile from "../../molecules/AppProfile/AppProfile.svelte";

  export let avatarImage: string;
  export let username: string;
  export let color: "primary" | "secondary" = "primary";
</script>

<div class="navigation-container">
  <div class="search-profile-container">
    <div class="searchbar-container">
      <AppPaper paperStyle={"Plain Color"}>
        <AppSearchBar />
      </AppPaper>
    </div>
    <div class="profile-container">
      <AppPaper paperStyle={"Plain Color"}>
        <AppProfile {avatarImage} avatarSize={"Small"} {username} {color} />
      </AppPaper>
    </div>
  </div>
  <div class="dashboard-action-container">
    <AppDashboardActionsMenu {avatarImage} {username} />
  </div>
</div>

<style>
  .navigation-container {
    padding: 20px;
  }
  .search-profile-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .searchbar-container {
    height: 90px;
    width: 80%;
  }
  .profile-container {
    width: max(20%, 350px);
  }
  .dashboard-action-container {
    margin-top: 10px;
  }
</style>
