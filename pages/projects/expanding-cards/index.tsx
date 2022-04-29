import React from 'react'
import Layout from '../../../components/Layout'
import { ExpandingCards } from '../../../components/ExpandingCards'

const imgs = [
  {
    title: 'dignissimos',
    src: 'https://images.unsplash.com/photo-1651039419231-f0db769b2c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'aspernatur',
    src: 'https://images.unsplash.com/photo-1651069158280-d8eec4a81422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'unde',
    src: 'https://images.unsplash.com/photo-1650962863647-8a131e1bf2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    title: 'nemo',
    src: 'https://images.unsplash.com/photo-1651053382263-ca0ff593e711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80',
  },
  {
    title: 'laboriosam',
    src: 'https://images.unsplash.com/photo-1651035157347-e92d6a3cd958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80',
  },
]

export default function Index() {
  return (
    <Layout title="Expanding Cards">
      <div className="flex flex-1 w-full h-full flex-col items-center justify-center">
        <ExpandingCards data={imgs} />
      </div>
    </Layout>
  )
}
