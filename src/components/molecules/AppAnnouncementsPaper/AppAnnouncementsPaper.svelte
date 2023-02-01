<script lang="ts">
  import { truncate } from "../../../lib/truncate";

  import AppPaper from "../../atoms/AppPaper/AppPaper.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";

  type announcementType = {
    title: string;
    description: string;
  };

  export let announcements: announcementType[] = [];
  export let textIsTruncate: boolean = false;
</script>

<div class="announcements-container">
  <header>
    <AppText text="Announcements" textType="h3" color="primary" />
  </header>
  <AppPaper paperStyle="Plain Color">
    {#each announcements as announcement, index}
      <div class="announcement-container">
        <AppText text={announcement.title} textType="h4" color="primary" />
        <AppText
          text={textIsTruncate
            ? truncate(announcement.description, 90)
            : announcement.description}
          textType="body"
          color="primary"
        />
      </div>
      {#if index !== announcements.length - 1}
        <div class="divider" />
      {/if}
    {/each}
  </AppPaper>
</div>

<style>
  .announcements-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .announcement-container {
    margin: 20px 0;
  }
  div.divider {
    width: 100%;
    height: 1px;
    background-color: var(--text-primary-color);
  }
</style>
