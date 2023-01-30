<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppAnnouncementsPaper from "./AppAnnouncementsPaper.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Molecules/AppAnnouncementsPaper">
  <Hst.Variant title="Default">
    <AppAnnouncementsPaper
      announcements={[
        {
          title: "Ad 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
        {
          title: "Ad 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
        {
          title: "Ad 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
        {
          title: "Ad 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
      ]}
    />
  </Hst.Variant>
  <Hst.Variant title="Truncate">
    <AppAnnouncementsPaper
      numberOfCharactersToTruncate={90}
      announcements={[
        {
          title: "Ad 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
        {
          title: "Ad 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
        {
          title: "Ad 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
        {
          title: "Ad 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus placerat odio ac tempor. Pellentesque vehicula tortor orci, vel egestas lorem tincidunt vitae. Etiam odio nunc, maximus ut odio non, finibus consequat urna. Nullam eu turpis vel libero feugiat euismod vitae sit amet ex. Nulla sollicitudin pretium odio quis eleifend. Cras ac tempor libero.",
        },
      ]}
    />
  </Hst.Variant>
</Hst.Story>

<style>
</style>
