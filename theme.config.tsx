import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Plutonode Hosting Knowledge Base</span>,
  docsRepositoryBase: 'https://github.com/Spoopy2023/plutonode-documentation/tree/main',
  footer: {
    component: null ,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PlutoNode Knowledge Base" />
      <meta property="og:description" content="Support Guides for PlutoNode Hosting Services" />
      <link rel="icon" href="https://plutonode.com/images/icon.png" type='image/gif' sizes="any" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – PlutoNode Knowledge Base'
    }
  },
  banner: {
    key: 'andromeda-release',
    text: (
      <a href="https://game.plutonode.com" target="_blank">
        🖥️ Andromeda Control Panel has now released. Visit Now →
      </a>
    )
  },
  editLink:{
    component: null
  },
  feedback: {
    content: null
  }
}


export default config
