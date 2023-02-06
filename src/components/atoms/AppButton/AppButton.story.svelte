<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";

  import AppButton from "./AppButton.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Atoms/AppButton">
  <Hst.Variant title="Default">
    <AppButton
      label="Default"
      color="Blue"
      details={{ text: "Hey" }}
      on:clickEvent={(event) => logEvent("arg", event.detail)}
    />
  </Hst.Variant>
</Hst.Story>
