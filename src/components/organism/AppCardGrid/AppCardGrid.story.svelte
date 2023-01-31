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
            "Lorem ipusim. pdsadpsa. oeopdspadpsa. epsdsapd  ds saawwdsaas wopdsapa",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipusim. pdsadpsa. oeopdspadpsa. epsdsapd  ds saawwdsaas wopdsapa",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipusim. pdsadpsa. oeopdspadpsa. epsdsapd  ds saawwdsaas wopdsapa",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipusim. pdsadpsa. oeopdspadpsa. epsdsapd  ds saawwdsaas wopdsapa",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipusim. pdsadpsa. oeopdspadpsa. epsdsapd  ds saawwdsaas wopdsapa",
        },
        {
          cardTitle: "Cool Project Title",
          cardBody:
            "Lorem ipusim. pdsadpsa. oeopdspadpsa. epsdsapd  ds saawwdsaas wopdsapa",
        },
      ]}
    />
  </Hst.Variant>
</Hst.Story>

<style>
</style>
