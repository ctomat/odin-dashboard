<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppSidebarElement from "./AppSidebarElement.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Molecules/AppSidebarElement">
  <Hst.Variant title="Default">
    <AppSidebarElement
      elementText="Element Text"
      alt="Element Example"
      elementIcon={""}
    />
  </Hst.Variant>
</Hst.Story>
