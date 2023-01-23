<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'

    import AppPaper from './AppPaper.svelte';

    export let Hst: Hst
</script>

<Hst.Story title='Components/Atoms/AppPaper'>
    <Hst.Variant title='Default'>
        <div class="container">
            <AppPaper>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Quisquam debitis in, rem minus 
                        error, expedita, atque voluptates iure iste ipsum 
                        illum qui corrupti. Facilis praesentium, quas 
                        vero sit vel quo
                    </p>
                </div>
            </AppPaper>
        </div>
    </Hst.Variant>
    <Hst.Variant title='Plain Color'>
        <div class="container">
            <AppPaper style='Plain Color'>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Quisquam debitis in, rem minus 
                        error, expedita, atque voluptates iure iste ipsum 
                        illum qui corrupti. Facilis praesentium, quas 
                        vero sit vel quo
                    </p>
                </div>
            </AppPaper>
        </div>
    </Hst.Variant>
</Hst.Story>

<style>
    .container {
        margin: 20px auto;
        width: 60%;
    }
</style>