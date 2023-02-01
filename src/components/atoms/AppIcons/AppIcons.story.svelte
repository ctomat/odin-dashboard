<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppIcons from "./AppIcons.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Atoms/AppIcons">
  <Hst.Variant title="Small">
    <AppIcons icon="account-multiple" iconSize="Small" />
  </Hst.Variant>
  <Hst.Variant title="Medium">
    <AppIcons icon="account-multiple" iconSize="Medium" />
  </Hst.Variant>
  <Hst.Variant title="Big">
    <AppIcons icon="account-multiple" iconSize="Big" />
  </Hst.Variant>
</Hst.Story>
