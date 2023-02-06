<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppSidebarElement from "./AppSidebarElement.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Molecules/AppSidebarElement">
  <div class="sidebar-element-container">
    <Hst.Variant title="Default">
      <AppSidebarElement elementText="Element Text" icon="star-plus-outline" />
    </Hst.Variant>
  </div>
</Hst.Story>

<style>
  .sidebar-element-container {
    padding: 20px;
  }
</style>
