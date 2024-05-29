import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Plutonode Hosting Knowledge Base</span>,
  docsRepositoryBase: 'https://github.com/Spoopy2023/plutonode-documentation/tree/main',
  footer: {
    text: 'Plutonode Hosting 2023-2024',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  )
}

export default config
