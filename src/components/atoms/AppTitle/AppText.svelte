<script lang="ts">
  export let text: string;
  export let textType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";
  export let color: "primary" | "secondary";
</script>

{#if textType === "h1"}
  <h1 class={color}>{text}</h1>
{:else if textType === "h2"}
  <h2 class={color}>{text}</h2>
{:else if textType === "h3"}
  <h3 class={color}>{text}</h3>
{:else if textType === "h4"}
  <h4 class={color}>{text}</h4>
{:else if textType === "h5"}
  <h5 class={color}>{text}</h5>
{:else if textType === "h6"}
  <h6 class={color}>{text}</h6>
{:else}
  <p class={color}>{text}</p>
{/if}

<style>
  .primary {
    color: var(--text-primary-color);
  }
  .secondary {
    color: var(--text-secondary-color);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 1rem;
  }
  p {
    font-family: "Work Sans", sans-serif;
  }
</style>
