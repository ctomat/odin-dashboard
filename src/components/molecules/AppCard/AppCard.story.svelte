<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'

    import AppCard from './AppCard.svelte';

    export let Hst: Hst
</script>

<Hst.Story title='Components/Atoms/AppCard'>
    <Hst.Variant title='Default'>
        <AppCard cardTitle='Cool Title' cardBody='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae dolorum sunt aut obcaecati delectus sapiente est minus eligendi odio!'/>
    </Hst.Variant>
</Hst.Story>

<style>
</style>