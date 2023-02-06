<script lang="ts">
  import AppPaper from "../../atoms/AppPaper/AppPaper.svelte";
  import AppTrendingElement from "../../atoms/AppTrendingElement/AppTrendingElement.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";

  type trendingListType = {
    userTag: string;
    associatedProject: string;
    avatarImage: string;
  };

  export let trendingList: trendingListType[];
</script>

<div class="trending-container">
  <header class="trending-title">
    <AppText text="Trending" textType="h3" color="primary" />
  </header>
  <div class="trending-list">
    <AppPaper paperStyle="Plain Color">
      {#each trendingList as trending}
        <div class="trending">
          <AppTrendingElement
            userTag={trending.userTag}
            associatedProject={trending.associatedProject}
            avatarImage={trending.avatarImage}
          />
        </div>
      {/each}
    </AppPaper>
  </div>
</div>

<style>
  .trending-container {
    margin-top: 20px;
  }
  .trending {
    margin-bottom: 30px;
  }
  .trending:last-of-type {
    margin-bottom: 0px;
  }
</style>
