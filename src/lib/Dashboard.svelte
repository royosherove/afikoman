<script lang="ts">
  import { globalState } from "../stores";

  import { onMount } from "svelte";
  import { getNftDetails } from "./kycUtils.svelte";

  onMount(async () => {});
  $: tickets = $globalState.totalSupply;
  $: winner = $globalState.winner;
</script>

{#if $globalState.chainId === $globalState.neededChainId}
  <div
    class="bg-gray-300 text-black m-2 sm:w-1/3 p-4 font-bold sm:m-auto rounded-lg text-sm flex flex-col"
  >
    <div>מספר מחפשי/מחפשות אפיקומן כרגע: {tickets}</div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="flex flex-col">תמחפש.ת אפיקומן מנצח.ת<div alt='winner'>{winner}</div></div>
  </div>
{/if}
