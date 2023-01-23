<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'

    import AppProfile from './AppProfile.svelte';

    import avatarImage from '../../../assets/image/futuristic-avatar-neon-colors-with-headphones-helmet-cyberpunk-concept_379823-2901.webp'

    export let Hst: Hst
</script>

<Hst.Story title='Components/Atoms/AppProfile'>
    <Hst.Variant title='Default'>
        <AppProfile {avatarImage} avatarSize='Medium' username='John Doe' color='primary'/>
    </Hst.Variant>
</Hst.Story>

<style>
</style>