<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let type: "text" | "email" = "text";
  export let value: string | number;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }

  function inputEvent() {
    dispatch("input");
  }
</script>

<input use:typeAction bind:value on:input={inputEvent} />

<style>
  input {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 50px;
    background-color: var(--input-background-color);
    padding: 0 20px;
  }

  input:focus {
    outline: solid 3px var(--input-outline-color);
  }
</style>
