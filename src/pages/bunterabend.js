import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Curtain from '../components/curtain/curtain'
import styles from './bunterabend.module.scss'

const BunterabendPage = ({ data, ...props }) => {
  function showTime() {}

  useEffect(() => {
    showTime()
  }, [])

  return (
    <>
      <SEO
        title="Bunterabend"
        keywords={[
          `Bunterabend`,
          `Bunterabend 2021`,
          `Hardmännle`,
          `Heulicher`,
        ]}
      />
      <Curtain />
    </>
  )
}

export default BunterabendPage
