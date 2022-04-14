<script lang="ts">
  import ConnectButton from "$lib/ConnectButton.svelte";
  import MintButton from "$lib/MintButton.svelte";
  import { globalState } from "../stores";
</script>

<body class="bg-black h-screen text-white text-center">
  <ConnectButton />
  <h1 class="text-center text-white p-12 text-6xl">האפיקומן</h1>
  <h1 class="text-center text-white text-2xl">של קהילת ווב3</h1>
    <MintButton />
</body>
