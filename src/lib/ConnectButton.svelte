<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { globalState } from "./../stores";
import { getNftDetails } from "./kycUtils.svelte";

  onMount(async () => {
    const win = window as any;
    if (win.ethereum !== undefined) {
      $globalState.provider = new ethers.providers.Web3Provider(win.ethereum);
    }
    connect();
  });

  async function connect() {
    console.log("wallet connecting..");
    const newaccounts = await $globalState.provider.send(
      "eth_requestAccounts",
      []
    );
    const network = await $globalState.provider.getNetwork();
    $globalState.chainId = network.chainId.toString();
    $globalState.accounts = newaccounts;
    $globalState.walletConnected = true;
    $globalState.balance = ethers.utils.formatEther(await $globalState.provider.getBalance(newaccounts[0]));
	
    console.log("wallet connected");
    const result:any = await getNftDetails(
      $globalState.accounts[0],
      $globalState.contractAddress,
      $globalState.provider
    );
    $globalState.totalSupply = result.totalSupply;
    $globalState.winner = result.winner;
    $globalState.winnerOwned = result.winnerOwned;
    $globalState.ownedToken = result.ownedToken;
    $globalState.uri = result.uri;
    $globalState.image = result.image;
  }
</script>

<div class="fixed right-0 p-4 text-lg">
  {#if $globalState.provider === undefined}
    <div class="text-red-400">Browser wallet missing</div>
  {:else if $globalState.walletConnected === false}
    <div class="text-white rounded border border-white p-2">Not Connected</div>
  {:else}
    <div
      class=" w-36  text-green-400 font-mono p-1 rounded truncate border border-white"
    >
      {$globalState.accounts[0]}
    </div>
  {/if}
</div>
