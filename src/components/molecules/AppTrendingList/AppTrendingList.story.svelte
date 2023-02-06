<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppTrendingList from "./AppTrendingList.svelte";

  import avatarImage from "../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Molecules/AppTrendingList">
  <Hst.Variant title="Default">
    <AppTrendingList
      trendingList={[
        {
          userTag: "@usertag",
          avatarImage: avatarImage,
          associatedProject: "Super Cool Project",
        },
        {
          userTag: "@usertag",
          avatarImage: avatarImage,
          associatedProject: "Super Cool Project",
        },
        {
          userTag: "@usertag",
          avatarImage: avatarImage,
          associatedProject: "Super Cool Project",
        },
        {
          userTag: "@usertag",
          avatarImage: avatarImage,
          associatedProject: "Super Cool Project",
        },
        {
          userTag: "@usertag",
          avatarImage: avatarImage,
          associatedProject: "Super Cool Project",
        },
      ]}
    />
  </Hst.Variant>
</Hst.Story>

<style>
</style>
