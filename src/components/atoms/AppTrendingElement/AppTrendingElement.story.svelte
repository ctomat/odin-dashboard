<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppTrendingElement from "./AppTrendingElement.svelte";

  import avatarImage from "../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Atoms/AppTrendingElement">
  <Hst.Variant title="Default">
    <AppTrendingElement
      userTag="@username"
      {avatarImage}
      associatedProject="Super Cool Project"
    />
  </Hst.Variant>
</Hst.Story>

<style>
</style>
