<script lang="ts">
  const links = [
    {
      name: "Web3IL Telegram",
      href: "https://t.me/Web3Hebrew",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png",
    },
    {
      name: "Web3IL Discord",
      href: "https://discord.com/invite/JcDTX5eeM8",
      logo: "discord.png",
    },
    {
      name: "Web3IL Dev Discord",
      href: "https://discord.gg/BHhkqmUF",
      logo: "discord.png",
    },
  ];
</script>

<div class="m-auto p-4 flex flex-col space-y-2">
  {#each links as l}
    <div class="flex space-x-2 items-center text-blue-400 font-semibold">
       <img src={l.logo} class="w-8" />
       <a href={l.href}>{l.name}</a>
    </div>
  {/each}
</div>
