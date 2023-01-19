<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'

    import AppText from './AppText.svelte';

    export let Hst: Hst
</script>

<Hst.Story title='Components/Atoms/AppText'>
    <Hst.Variant title='H1/Primary'>
        <AppText color='primary' textType='h1' text='This is a title h1'/>
    </Hst.Variant>
    <Hst.Variant title='H1/Secondary'>
        <AppText color='secondary' textType='h1' text='This is a title h1'/>
    </Hst.Variant>
    <Hst.Variant title='H2/Primary'>
        <AppText color='primary' textType='h2' text='This is a title h2'/>
    </Hst.Variant>
    <Hst.Variant title='H2/Secondary'>
        <AppText color='secondary' textType='h2' text='This is a title h2'/>
    </Hst.Variant>
    <Hst.Variant title='H3/Primary'>
        <AppText color='primary' textType='h3' text='This is a title h3'/>
    </Hst.Variant>
    <Hst.Variant title='H3/Secondary'>
        <AppText color='secondary' textType='h3' text='This is a title h3'/>
    </Hst.Variant>
    <Hst.Variant title='H4/Primary'>
        <AppText color='primary' textType='h4' text='This is a title h4'/>
    </Hst.Variant>
    <Hst.Variant title='H4/Secondary'>
        <AppText color='secondary' textType='h4' text='This is a title h4'/>
    </Hst.Variant>
    <Hst.Variant title='H5/Primary'>
        <AppText color='primary' textType='h5' text='This is a title h5'/>
    </Hst.Variant>
    <Hst.Variant title='H5/Secondary'>
        <AppText color='secondary' textType='h5' text='This is a title h5'/>
    </Hst.Variant>
    <Hst.Variant title='H6/Primary'>
        <AppText color='primary' textType='h6' text='This is a title h6'/>
    </Hst.Variant>
    <Hst.Variant title='H6/Secondary'>
        <AppText color='secondary' textType='h6' text='This is a title h6'/>
    </Hst.Variant>
    <Hst.Variant title='Body/Primary'>
        <AppText color='primary' textType='body' text='This is a body text'/>
    </Hst.Variant>
    <Hst.Variant title='Body/Secondary'>
        <AppText color='secondary' textType='body' text='This is a body text'/>
    </Hst.Variant>
</Hst.Story>