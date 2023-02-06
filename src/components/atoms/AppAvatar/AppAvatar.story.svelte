<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppAvatar from "./AppAvatar.svelte";

  import futuristicExampleAvatar from "../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Atoms/AppAvatar">
  <Hst.Variant title="Small">
    <AppAvatar avatarSize="Small" avatarImage={futuristicExampleAvatar} />
  </Hst.Variant>
  <Hst.Variant title="Medium">
    <AppAvatar avatarSize="Medium" avatarImage={futuristicExampleAvatar} />
  </Hst.Variant>
  <Hst.Variant title="Big">
    <AppAvatar avatarSize="Big" avatarImage={futuristicExampleAvatar} />
  </Hst.Variant>
</Hst.Story>
