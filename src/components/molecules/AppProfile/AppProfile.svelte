<script lang="ts">
  import AppAvatar from "../../atoms/AppAvatar/AppAvatar.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";
  import AppIcons from "../../atoms/AppIcons/AppIcons.svelte";

  export let avatarImage: string;
  export let avatarSize: "Small" | "Medium" | "Big";
  export let username: string;
  export let color: "primary" | "secondary";
</script>

<div class="profile-container">
  <div class="profile-icon-container">
    <AppIcons class="icon" icon="bell-ring-outline" iconSize="Medium" />
  </div>
  <AppAvatar {avatarImage} {avatarSize} />
  <AppText text={username} textType="h4" {color} />
</div>

<style>
  .profile-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .profile-icon-container :global(.icon):hover {
    fill: var(--text-secondary-color);
    cursor: pointer;
  }
</style>
