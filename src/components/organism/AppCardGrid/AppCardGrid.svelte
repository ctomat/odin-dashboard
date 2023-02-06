<script lang="ts">
  import AppCard from "../../molecules/AppCard/AppCard.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";

  type cardsResponse = {
    cardTitle: string;
    cardBody: string;
  };

  export let cardsData: cardsResponse[] = [];
</script>

<div class="card-grid-container">
  <header>
    <AppText textType="h3" text="Your projects" color="primary" />
  </header>
  <div class="card-grid">
    {#each cardsData as card}
      <AppCard cardTitle={card.cardTitle} cardBody={card.cardBody} />
    {/each}
  </div>
</div>

<style>
  .card-grid-container {
    height: 100%;
  }
  .card-grid {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit);
    gap: 30px;
  }
</style>
