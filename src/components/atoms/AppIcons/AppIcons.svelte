<script lang="ts">
  import BellRingOutline from "../../../assets/svg/BellRingOutline.svg.svelte";
  import StarPlusOutline from "../../../assets/svg/StarPlusOutline.svg.svelte";
  import SourceBranch from "../../../assets/svg/SourceBranch.svg.svelte";
  import EyePlusOutline from "../../../assets/svg/EyePlusOutline.svg.svelte";
  import CardSearchOutline from "../../../assets/svg/CardSearchOutline.svg.svelte";

  import AccountMultiple from "../../../assets/svg/sidebar/AccountMultiple.svg.svelte";
  import ShieldCheck from "../../../assets/svg/sidebar/ShieldCheck.svg.svelte";
  import CardAccountDetailsOutline from "../../../assets/svg/sidebar/CardAccountDetailsOutline.svg.svelte";
  import ClockTime from "../../../assets/svg/sidebar/ClockTime.svg.svelte";
  import Cog from "../../../assets/svg/sidebar/Cog.svg.svelte";
  import HelpBox from "../../../assets/svg/sidebar/HelpBox.svg.svelte";
  import Message from "../../../assets/svg/sidebar/Message.svg.svelte";
  import NoteMultiple from "../../../assets/svg/sidebar/NoteMultiple.svg.svelte";
  import Home from "../../../assets/svg/sidebar/Home.svg.svelte";

  export let icon: string;
  export let iconSize: "Small" | "Medium" | "Big";

  const iconSelector = {
    "bell-ring-outline": BellRingOutline,
    "star-plus-outline": StarPlusOutline,
    "source-branch": SourceBranch,
    "eye-plus-outline": EyePlusOutline,
    "card-search-outline": CardSearchOutline,
    "account-multiple": AccountMultiple,
    "shield-check": ShieldCheck,
    "card-account-details-outline": CardAccountDetailsOutline,
    "clock-time": ClockTime,
    cog: Cog,
    "help-box": HelpBox,
    message: Message,
    "note-multiple": NoteMultiple,
    home: Home,
    Default: "",
  };
</script>

<figure class={`${$$props.class} ${iconSize.toLowerCase()}`}>
  <svelte:component
    this={iconSelector[icon] ? iconSelector[icon] : iconSelector["Default"]}
  />
</figure>

<style>
  figure {
    fill: white;
    height: auto;
  }

  .small {
    width: 20px;
  }

  .medium {
    width: 30px;
  }

  .big {
    width: 40px;
  }
</style>
