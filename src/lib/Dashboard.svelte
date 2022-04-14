<script lang="ts">
  import { globalState } from "../stores";

  import { onMount } from "svelte";
  import { getNftDetails } from "./kycUtils.svelte";

  onMount(async () => {});
  $: tickets = $globalState.totalSupply;
  $: winner = $globalState.winner;
  $: hasWinner = $globalState.winner.toString() !=='0x0000000000000000000000000000000000000000'
;
</script>

{#if $globalState.chainId === $globalState.neededChainId}
  <div
    class="bg-gray-300 text-black m-2 sm:w-1/3 p-4 font-bold sm:m-auto rounded-lg text-sm flex flex-col"
  >
    <div>כרטיסים שנקנו: {tickets}</div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
{#if hasWinner}
    <div class="flex flex-col mt-4 ">הארנק שניצח<div alt='winner'>{winner}</div></div>
{/if}
  </div>
{/if}
