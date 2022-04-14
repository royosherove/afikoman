<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { globalState } from "./../stores";
  import { mintNft } from "./kycUtils.svelte";

  onMount(async () => {
    const win = window as any;
    win.ethereum.on("networkChanged", () => win.location.reload());
    win.ethereum.on("accountsChanged", () => win.location.reload());
    // if (win.ethereum !== undefined) {
    //   $globalState.provider = new ethers.providers.Web3Provider(win.ethereum);
    // }
    // connect();
  });

  async function mint() {
    await mintNft(
      $globalState.provider,
      $globalState.contractAddress,
      () => (status = "sent"),
      () => (status = "success"),
      () => (status = "failed")
    );
  }

  function requestSwitch() {
    const win = window as any;
    win.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: ethers.utils.hexValue(parseInt($globalState.neededChainId)),
          rpcUrls: ["https://rpc-mainnet.matic.network/"],
          chainName: "Matic Testnet (Mumbai)",
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          blockExplorerUrls: ["https://polygonscan.com/"],
        },
      ],
    });
  }

  $: status = "";
</script>

<div>
  {status}
  <!-- {#if status ==='sent'}


{:else if status==='success'}

{:else if status==='failed'}

{/if} -->
</div>
<div class="p-4 text-xl text-white m-auto text-center">
  {#if $globalState.chainId === undefined}
    <div />
  {:else if $globalState.chainId !== $globalState.neededChainId}
    <div>
      <div class="text-red-500">נא לעבור לרשת</div>
      <div class="text-red-500">{$globalState.neededChainName}</div>
      <button
        on:click={requestSwitch}
        class="border border-white p-2 rounded-lg m-2"
        >כדי לעבור רשת לחצו כאן</button
      >
    </div>
  {:else if $globalState.provider !== undefined && $globalState.balance !== "0.0"}
    <button
      on:click={mint}
      class=" w-auto m-auto mt-2 text-center font-semibold  text-yellow-200 font-mono p-2 rounded truncate border border-white"
    >
      חפשו אפיקומן
    </button>
  {/if}
  <div class="font-mono p-2">
    {#if $globalState.balance === "0.0" && $globalState.chainId === $globalState.neededChainId}
      <div class="text-red-300">אין לכם יתרה להפעלת ההגרלה</div>
      <div class="text-red-500">Matic balance: {$globalState.balance}</div>
    {/if}
  </div>
</div>
