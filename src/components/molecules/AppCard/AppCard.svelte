<script lang="ts">
  import { truncate } from "../../../lib/truncate";

  import AppPaper from "../../atoms/AppPaper/AppPaper.svelte";
  import AppText from "../../atoms/AppTitle/AppText.svelte";

  import EyePlusOutline from "../../../assets/svg/EyePlusOutline.svg.svelte";
  import SourceBranch from "../../../assets/svg/SourceBranch.svg.svelte";
  import StarPlusOutline from "../../../assets/svg/StarPlusOutline.svg.svelte";
  export let cardTitle: string;
  export let cardBody: string;
</script>

<div class="card-container">
  <AppPaper>
    <header class="card-decoration">
      <AppText color="primary" textType="h3" text={cardTitle} />
    </header>
    <div class="description">
      <AppText color="primary" textType="body" text={truncate(cardBody, 130)} />
    </div>
    <div class="controls">
      <figure>
        <EyePlusOutline />
      </figure>
      <figure>
        <StarPlusOutline />
      </figure>
      <figure>
        <SourceBranch />
      </figure>
    </div>
  </AppPaper>
</div>

<style>
  .card-container {
    width: min(350px, 93%);
    height: 200px;
    margin: 20px;
  }
  .card-decoration {
    writing-mode: sideways-lr;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 22%;
    height: 100%;
    position: absolute;
    background: rgb(19, 26, 38);
    background: -moz-linear-gradient(
      180deg,
      rgba(19, 26, 38, 1) 35%,
      rgba(38, 45, 62, 1) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(19, 26, 38, 1) 35%,
      rgba(38, 45, 62, 1) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(19, 26, 38, 1) 35%,
      rgba(38, 45, 62, 1) 100%
    );
    border-radius: 15px;
    box-shadow: 0, rgba(0, 0, 0, 0.23) 0px 3px 6px, 0, 0;
    z-index: 1;
  }
  .description {
    position: absolute;
    left: 22%;
    margin: 0 20px;
  }
  .controls {
    position: absolute;
    width: 130px;
    height: 40px;
    border-radius: 50px;
    background: rgb(19, 26, 38);
    background: rgb(19, 26, 38);
    background: -moz-linear-gradient(
      180deg,
      rgba(19, 26, 38, 1) 35%,
      rgba(38, 45, 62, 1) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(19, 26, 38, 1) 35%,
      rgba(38, 45, 62, 1) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(19, 26, 38, 1) 35%,
      rgba(38, 45, 62, 1) 100%
    );
    bottom: -18px;
    right: 10px;
    box-shadow: 0, rgba(0, 0, 0, 0.23) 0px 3px 6px, 0, 0;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
  .controls figure {
    width: 25px;
    height: auto;
    fill: var(--text-primary-color);
    transition: all ease-in-out 0.1s;
    cursor: pointer;
  }
  .controls figure:hover {
    transform: scale(1.2);
    fill: var(--text-secondary-color);
  }
</style>
