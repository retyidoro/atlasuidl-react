import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>atlas_UIDL</title>
        <meta property="og:title" content="atlas_UIDL" />
      </Helmet>
      <img
        src="https://play.teleporthq.io/static/img/default.png"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <span>Text</span>
    </div>
  )
}

export default Page
