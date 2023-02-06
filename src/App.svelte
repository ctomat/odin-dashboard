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
      <div class="info-container">
        <div class="projects-container">
          <AppCardGrid
            cardsData={[
              {
                cardTitle: "Cool Project Title",
                cardBody:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
              },
              {
                cardTitle: "Cool Project Title",
                cardBody:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
              },
              {
                cardTitle: "Cool Project Title",
                cardBody:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
              },
              {
                cardTitle: "Cool Project Title",
                cardBody:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
              },
              {
                cardTitle: "Cool Project Title",
                cardBody:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
              },
              {
                cardTitle: "Cool Project Title",
                cardBody:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
              },
            ]}
          />
        </div>
        <div class="announcements-trending">
          <AppAnnouncementsPaper
            announcements={[
              {
                title: "Ad 1",
                description:
                  "Vestibulum condimentum tellus lacus, in accumsan elit maximus ac. Donec hendrerit sodales conque",
              },
              {
                title: "Ad 2",
                description:
                  "Vestibulum condimentum tellus lacus, in accumsan elit maximus ac. Donec hendrerit sodales conque",
              },
              {
                title: "Ad 3",
                description:
                  "Vestibulum condimentum tellus lacus, in accumsan elit maximus ac. Donec hendrerit sodales conque",
              },
            ]}
            textIsTruncate={true}
          />
          <AppTrendingList
            trendingList={[
              {
                userTag: "@usertag",
                avatarImage: avatarImage,
                associatedProject: "Super Cool Project",
              },
              {
                userTag: "@usertag",
                avatarImage: avatarImage,
                associatedProject: "Super Cool Project",
              },
              {
                userTag: "@usertag",
                avatarImage: avatarImage,
                associatedProject: "Super Cool Project",
              },
              {
                userTag: "@usertag",
                avatarImage: avatarImage,
                associatedProject: "Super Cool Project",
              },
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .main-container {
    display: flex;
    background-color: var(--body-background-color);
  }
  .sidebar-container {
    width: 20%;
    position: fixed;
  }
  .dashboard-container {
    width: 80%;
    margin-left: auto;
  }
  .navigation-container {
    width: 98%;
    margin: 10px auto;
  }
  .info-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
  .projects-container {
    margin-top: 20px;
  }
</style>
