import * as React from 'react'
import { BlurryLoading } from '../../../components/BlurryLoading'
import Layout from '../../../components/Layout'

export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  return (
    <Layout title="Blurry Loading">
      <BlurryLoading
        width="100%"
        height="100vh"
        thumbnailSrc="https://images.unsplash.com/photo-1653580559380-e44e45d2893e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=10"
        imgSrc="https://images.unsplash.com/photo-1653580559380-e44e45d2893e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=100"
        blur={20}
      ></BlurryLoading>
    </Layout>
  )
}
