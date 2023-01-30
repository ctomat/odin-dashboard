<script lang="ts">
  import AppAvatar from "../../atoms/AppAvatar/AppAvatar.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";
  import BellRingOutline from "../../../assets/svg/BellRingOutline.svelte";

  export let avatarImage: string;
  export let avatarSize: "Small" | "Medium" | "Big";
  export let username: string;
  export let color: "primary" | "secondary";
</script>

<div class="profile-container">
  <figure>
    <BellRingOutline />
  </figure>
  <AppAvatar {avatarImage} {avatarSize} />
  <AppText text={username} textType="h4" {color} />
</div>

<style>
  .profile-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .profile-container figure {
    width: 30px;
    height: auto;
    fill: var(--text-primary-color);
    cursor: pointer;
  }

  .profile-container figure:hover {
    width: 30px;
    height: auto;
    fill: var(--text-secondary-color);
  }
</style>
