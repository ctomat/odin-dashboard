<script lang="ts">
    export let avatarImage: string
    export let avatarSize: 'Small' | 'Medium' | 'Big'
</script>

<figure class={avatarSize.toLowerCase()}>
    <img src={avatarImage} alt="avatar-image">
</figure>

<style>
    img {
        border-radius: 50%;
    }

    .small {
        width: 50px;
        height: auto;
    }

    .medium {
        width: 75px;
        height: auto;
    }

    .big {
        width: 100px;
        height: auto;
    }
</style>