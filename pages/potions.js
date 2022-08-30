import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Potions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-grow bg-pink-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-center text-3xl font-semibold">Potions Page</h1>
        </div>
      </main>
    </>
  )
}
