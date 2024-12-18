import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KirkosBeta",
  description: "The Elements of Travelling Rings ⭕⭕⭕",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/Betaglot_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Betaglot_Logo.png" }]
  ],
  themeConfig: {
    siteTitle: "KirkosBeta",
    outline: [2, 4],
    logo: '/Betaglot_Logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/kirkosbeta' }
    ],
    // footer: {
    //   message: "Library released under <a style='text-decoration:underline;' href='https://github.com/betaglot/betaglot/blob/main/LICENSE'>MIT License</a>.",
    //   copyright: `Copyright © 2024–${new Date().getUTCFullYear()} Christopher Duncan`
    // },
    search: {
      provider: 'local'
    },
    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/reference/': sidebarReference(),
      '/dev/': sidebarDevelopment(),
    },
    nav: nav(),
  }
})

//#nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/Overview',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/Overview',
      activeMatch: '/examples/'
    },
    {
      text: 'Reference',
      link: '/reference/RefOverview',
      activeMatch: '/reference/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}


function sidebarGuide() {
  return [
    { text: 'What is KirkosBeta', link: '/guide/Overview' }
  ]
}

function sidebarDevelopment() {
  return [
    { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' }
  ]
}

function sidebarReference() {
  return [
    { text: 'Reference', link: '/reference/RefOverview' },
    {
      text: 'ATLETE', link: '/reference/Atlete/Overview', items: [
      ]
    },
    {
      text: '🔷<beta>BETA</beta>', link: '/reference/Beta/BetaOverview', collapsed: true, items: [
      ]
    },
    // #Eko
    {
      text: '🟩 <eko>EKO</eko>', link: '/reference/Eko/EkoOverview', collapsed: true, items: [
      ]
    },
    // #Via
    {
      text: '🔻 <via>VIA</via>', link: '/reference/Via/ViaOverview', collapsed: true, items: [
      ]
    },
    //#Move
    {
      text: '🟠 <Move>MOVE</Move>', link: '/reference/Move/MoveOverview', collapsed: true, items: [
      ]
    },

    // #Psike
    {
      text: '💜 <psike>PSIKE</psike>', link: '/reference/Psike/PsikeOverview', collapsed: true, items: [
      ]
    },
    // #Geometria
    { text: 'GEOMETRIA', link: '/reference/Geometria/Overview', collapsed: true, items: [] },

    // #Physik
    { text: 'PHYSIK', link: '/reference/Physik/Overview', collapsed: true, items: [] },

    // # Lexikon
    { text: 'LEXIKON', link: '/reference/Lexikon' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/Overview' },
  ]
}
