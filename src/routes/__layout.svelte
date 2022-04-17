<script>
  import "../app.css";
  import { MetaTags } from 'svelte-meta-tags';
</script>

<head>
  <MetaTags
    title="Afikoman 2022"
    titleTemplate="%s | Web3 Israel Community"
    description="הגרלת האפיקומן של ווב3"
    canonical="https://afikoman.vercel.app/"
    openGraph={{
      url: 'https://afikoman.vercel.app/',
      title: 'Afikoman 2022 Israel web3',
      description: 'הגרלת האפיקוצן של ווב3',
      images: [
        {
          url: 'https://web3il-afikoman.s3.eu-central-1.amazonaws.com/unrevealed.gif',
          width: 800,
          height: 600,
          alt: 'Afiokoman'
        },
      ],
      site_name: 'Afiokman 2022'
    }}
    twitter={{
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
      title: 'Afikoman 2022',
      description: 'אפיקומן 2022',
      image: 'https://web3il-afikoman.s3.eu-central-1.amazonaws.com/unrevealed.gif',
      imageAlt: 'Afikoman'
    }}
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap"
    rel="stylesheet"
  />
</head>
<slot />
