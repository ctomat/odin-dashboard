<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import AppSidebar from "./AppSidebar.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Organism/AppSidebar">
  <Hst.Variant title="Default">
    <div class="default-container">
      <AppSidebar
        sidebarElementsList={[
          { elementText: "Home", icon: "home", section: "primary" },
          {
            elementText: "Profile",
            icon: "card-account-details-outline",
            section: "primary",
          },
          {
            elementText: "Messages",
            icon: "message",
            section: "primary",
          },
          {
            elementText: "Settings",
            icon: "cog",
            section: "secondary",
          },
          {
            elementText: "Privacy",
            icon: "shield-check",
            section: "secondary",
          },
        ]}
      />
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  .default-container {
  }
</style>
