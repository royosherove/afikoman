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
      () => ((window as any).location.reload()),
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
          rpcUrls: [$globalState.neededChainRPC],
          chainName: $globalState.neededChainId,
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

<div> {status}
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
    {:else}
    <button
      class=" w-auto m-auto mt-2 text-center font-semibold  text-yellow-200 font-mono p-2 rounded truncate border border-white"
    >
      החיפוש נגמר
    </button>
  {/if}
</div>
