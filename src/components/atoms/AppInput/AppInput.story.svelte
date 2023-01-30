<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";

  import AppInput from "./AppInput.svelte";

  export let Hst: Hst;
  let value: string = "";
</script>

<Hst.Story title="Components/Atoms/AppInput">
  <Hst.Variant title="Default">
    <div>
      <AppInput
        type="text"
        bind:value
        on:input={() => logEvent("Input", { value })}
      />
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  div {
    width: 80%;
    margin: 20px auto 20px;
  }
</style>
