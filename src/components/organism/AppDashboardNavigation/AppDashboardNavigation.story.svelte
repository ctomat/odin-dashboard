<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    
    import AppDashboardNavigation from './AppDashboardNavigation.svelte';

    import avatarImage from '../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp'

    export let Hst: Hst
</script>

<Hst.Story title='Components/Organism/AppDashboardNavigation'>
    <Hst.Variant title='Default'>
        <AppDashboardNavigation {avatarImage} username='User Name'/>
    </Hst.Variant>
</Hst.Story>

<style>
</style>