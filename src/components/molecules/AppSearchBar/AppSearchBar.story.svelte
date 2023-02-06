<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppSearchBar from "./AppSearchBar.svelte";

  import avatarImage from "../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Molecules/AppSearchBar">
  <Hst.Variant title="Default">
    <AppSearchBar value={""} />
  </Hst.Variant>
</Hst.Story>

<style>
</style>
