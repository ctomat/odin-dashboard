<script lang="ts">
  import AppAvatar from "../../atoms/AppAvatar/AppAvatar.svelte";
  import AppButton from "../../atoms/AppButton/AppButton.svelte";
  import AppPaper from "../../atoms/AppPaper/AppPaper.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";

    export let username: string
    export let avatarImage: string
</script>

<AppPaper paperStyle='Plain Color'>
    <div class="actions-menu-container">
        <div class="user-info-container">
            <AppAvatar {avatarImage} avatarSize={'Big'}/>
            <div>
                <AppText textType={'body'} text={'Hi there,'} color='primary'/>
                <AppText textType={'h3'} text={username} color='primary'/>
            </div>
        </div>
        <div class="buttons-container">
            <AppButton label='New' color='Blue' on:clickEvent={() => {}}/>
            <AppButton label='Upload' color='Blue' on:clickEvent={() => {}}/>
            <AppButton label='Share' color='Blue' on:clickEvent={() => {}}/>
        </div>
    </div>
</AppPaper>

<style>
    .actions-menu-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-radius: 20px;
    }

    .user-info-container {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .buttons-container {
        display: flex;
        gap: 10px;
    }
</style>