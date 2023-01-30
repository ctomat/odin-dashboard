<script lang="ts">
  import AppPaper from "../../atoms/AppPaper/AppPaper.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";

  type announcementType = {
    title: string;
    description: string;
  };

  export let announcements: announcementType[] = [];
  export let numberOfCharactersToTruncate: number = 0;

  function createLastAnnouncements(useWordBoundary: boolean) {
    let announcementsList: announcementType[] = announcements.filter(
      (announcement, index) => index < 3
    );

    if (!numberOfCharactersToTruncate) {
      return announcementsList;
    }

    announcementsList = announcementsList.map((announcement) => {
      const subString = announcement.description.slice(
        0,
        numberOfCharactersToTruncate - 1
      );

      announcement.description =
        (useWordBoundary
          ? subString.slice(0, subString.lastIndexOf(" "))
          : subString) + "...";

      return announcement;
    });

    return announcementsList;
  }

  let lastAnnouncements: announcementType[] = createLastAnnouncements(true);
</script>

<div class="announcements-container">
  <header>
    <AppText text="Announcements" textType="h3" color="primary" />
  </header>
  <AppPaper paperStyle="Plain Color">
    {#each lastAnnouncements as announcement, index}
      <div class="announcement-container">
        <AppText text={announcement.title} textType="h4" color="primary" />
        <AppText
          text={announcement.description}
          textType="body"
          color="primary"
        />
      </div>
      {#if index !== lastAnnouncements.length - 1}
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
