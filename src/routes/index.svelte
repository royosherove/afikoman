<script lang="ts">
  import ConnectButton from "$lib/ConnectButton.svelte";
  import Dashboard from "$lib/Dashboard.svelte";
  import MintButton from "$lib/MintButton.svelte";
  import { globalState } from "../stores";
</script>

<body class="bg-black h-screen text-white text-center">
  <ConnectButton />
  <h1 class="text-center text-white p-12 text-6xl">האפיקומן</h1>
  <h1 class="text-center text-white text-2xl">של קהילת ווב3</h1>
  {#if $globalState.ownedToken === undefined || $globalState.ownedToken===0}
    <MintButton />
  {:else}
  <div class="text-center">
    <img src={$globalState.image} alt="NFT" class="mx-auto my-2 h-64"/>
    <div class="text-gray-400 p-4">קנית כרטיס מספר {$globalState.ownedToken}</div>
  </div>
  {/if}
  <Dashboard />
</body>
