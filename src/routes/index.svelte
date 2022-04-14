<script lang="ts">
  import ConnectButton from "$lib/ConnectButton.svelte";
  import Dashboard from "$lib/Dashboard.svelte";
import LinksBoard from "$lib/LinksBoard.svelte";
  import MintButton from "$lib/MintButton.svelte";
  import { globalState } from "../stores";
</script>

<body class="bg-black text-white text-center flex flex-col font-heebo">
  <ConnectButton />
  <h1 class="text-center text-white p-12 mt-2 text-6xl">האפיקומן</h1>
  <h1 class="text-center text-white text-2xl"ב״ט מעבדות לחירות, חג אביב שמח! <br />שמחים להזמין אתכם למשחק חיפוש האפיקומן של קהילת ווב3 ישראל</h1>
  
  {#if $globalState.ownedToken === undefined || $globalState.ownedToken === 0}
    <MintButton />
  {:else}
    <div class="text-center">
      <img src={$globalState.image} alt="NFT" class="mx-auto my-2 h-64" />
      <p style="text-align: right;">?איך זה עובד</p>
<p style="text-align: right;">יצרנו חוזה חכם והטמנו בתוכו ״אפיקומן״<br />כל כתובת יכולה ״לחפש״ את האפיקומן פעם אחת בחוזה<br />בתום סדר הפסח החוזה חכם יגיד לנו מי מהמחפשים ניצח ומצא את האפיקומן<br />כל המשתתפים יזכו בניפטי השתתפות, אבל רק אחד יקבל את חבילת הפרס - הזכות לבחור נושא / פרוייקט מעניין, וחברי הקהילה וצוות המחקר של קוליידר יבצעו מחקר ויפרסמו את הסקירה בקהילה בספייס הבא בטוויטר</p>
      <div class="text-gray-400 p-4">
        את.ה המחפש.ת מספר {$globalState.ownedToken}
      </div>
    </div>
  {/if}
  <Dashboard />
  <LinksBoard/>
  <div class="fixed bottom-0 p-2 m-auto text-center text-gray-400 text-sm italic flex space-x-6">
      <div class="">
        Credits: Yotam Bar-On, ChagitR, Royo, Eylon
      </div>
      <a href='https://github.com/royosherove/afikoman' class="text-blue-400 ">github</a>
      <a href='https://mumbai.polygonscan.com/address/0x9dA9d1c92Bf2aC5cd21925242Ff854932465df5C#code' class="text-blue-400 ">contract</a>
  </div>
</body>
