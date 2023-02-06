<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";

  import AppCardGrid from "./AppCardGrid.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Components/Organism/AppCardGrid">
  <Hst.Variant title="Default">
    <AppCardGrid
      cardsData={[
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt quis quam sed condimentum. Cras a iaculis arcu. In euismod aliquet nisl, in mollis massa viverra ut. Proin lectus odio, maximus sed efficitur nec, vehicula vitae odio.",
        },
      ]}
    />
  </Hst.Variant>
</Hst.Story>

<style>
</style>
