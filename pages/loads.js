import Head from 'next/head'
import Image from 'next/image'
import Sidebar from './common/Sidebar'
import Body from './Components/loadComponent/Body'

export default function Loads() {
  return (
    <div>
      <Head>
        <title>Monodome - Load</title>
        <meta name="description" content="Generated by Monodome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container-fluid p-lg-5">
        <div className="row flex-nowrap">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  )
}
