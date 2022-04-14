<script lang="ts">
  import ConnectButton from "$lib/ConnectButton.svelte";
  import Dashboard from "$lib/Dashboard.svelte";
  import Info from "$lib/Info.svelte";
  import LinksBoard from "$lib/LinksBoard.svelte";
  import MintButton from "$lib/MintButton.svelte";
  import { globalState } from "../stores";
</script>

<body class="bg-black text-white text-center flex flex-col font-heebo">
  <ConnectButton />
  <h1 class="text-center text-white p-12 mt-2 text-6xl">האפיקומן</h1>
  <h1 class="text-center text-white text-3xl">של קהילת ווב3</h1>
  <Info />
  {#if $globalState.ownedToken === undefined || $globalState.ownedToken === 0}
    <MintButton />
  {:else}
    <div class="text-center">
      <img src={$globalState.image} alt="NFT" class="mx-auto my-2 h-64" />
      <div class="text-gray-400 p-4">
        את.ה המחפש.ת מספר {$globalState.ownedToken}
      </div>
    </div>
  {/if}
  <Dashboard />
  <LinksBoard />
  <div
    class="fixed bottom-0 p-2 m-auto text-center text-gray-400 text-sm italic flex space-x-6"
  >
    <div class="">Credits: Yotam Bar-On, ChagitR, Royo, Eylon</div>
    <a href="https://github.com/royosherove/afikoman" class="text-blue-400 "
      >github</a
    >
    <a
      href="https://polygonscan.com/address/{$globalState.contractAddress}#code"
      class="text-blue-400 ">contract</a
    >
  </div>
</body>
