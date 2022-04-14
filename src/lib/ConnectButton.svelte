<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { globalState } from "./../stores";

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
    $globalState.contractAddress = '0x9dA9d1c92Bf2aC5cd21925242Ff854932465df5C';
	
    console.log("wallet connected");
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
