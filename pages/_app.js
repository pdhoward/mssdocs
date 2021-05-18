import React from 'react'
import Head from 'next/head'
import Introduction from './docs'
import baseTheme from '../styles/themes/base'
import fontTheme from '../styles/themes/font'
import withTypeStyles from '../styles/with-type'
import nprogressStyles from '../styles/nprogress'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {  

  return (
    <>
        <Head />     
          <Introduction />
          <style jsx global>
            {fontTheme}
          </style>
          <style jsx global>
            {baseTheme}
          </style>
          <style jsx global>
            {nprogressStyles}
          </style>
          <style jsx global>
            {withTypeStyles}
          </style>
       
    </>
     
  )
}

export default MyApp
