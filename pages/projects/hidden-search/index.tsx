import { useState } from 'react'
import Layout from '../../../components/Layout'
import { HiddenSearch } from '../../../components/HiddenSearch'

export default function Index() {
  return (
    <Layout title="hidden-search">
      <div className="flex h-screen w-screen items-center justify-center bg-pink-500">
        <HiddenSearch />
      </div>
    </Layout>
  )
}
