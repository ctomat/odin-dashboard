<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppDashboardActionsMenu from "./AppDashboardActionsMenu.svelte";

  import avatarImage from "../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Molecules/AppDashboardActionsMenu">
  <Hst.Variant title="Default">
    <div>
      <AppDashboardActionsMenu {avatarImage} username={"User Name"} />
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  div {
    margin: 20px auto 20px auto;
    width: 90%;
  }
</style>
