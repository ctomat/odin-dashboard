<script lang="ts">
  import AppAvatar from "../AppAvatar/AppAvatar.svelte";
  import AppText from "../AppTitle/AppText.svelte";

  export let userTag: string;
  export let associatedProject: string;
  export let avatarImage: string;
</script>

<div class="trending-container">
  <AppAvatar {avatarImage} avatarSize="Small" />
  <div>
    <AppText text={userTag} textType="body" color="primary" />
    <AppText text={associatedProject} textType="body" color="secondary" />
  </div>
</div>

<style>
  .trending-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
