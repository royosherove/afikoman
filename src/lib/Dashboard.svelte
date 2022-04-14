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
    class="bg-gray-300 text-black m-2 sm:w-1/3 p-4 font-bold sm:m-auto rounded-lg text-sm"
  >
    <div>כרטיסים שנקנו: {tickets}</div>
    <div>כרטיס מנצח: {winner}</div>
  </div>
{/if}
