import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Build Your Portfolio | MyPortfolio</title>
        <meta name="description" content="Create your own beautiful developer portfolio in minutes. No code needed." />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-white shadow">
          <h1 className="text-4xl font-bold sm:text-5xl">Create Your own Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Build and share your personal portfolio website in minutes — no coding required. Just sign up, customize, and launch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/profile" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              View Dashboard
            </Link>
            <Link href="/auth/sign-up/" className="text-blue-600 px-6 py-3 border border-blue-600 rounded-md hover:bg-blue-50">
               Create Portfolio
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Use MyPortfolio?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">No more hassle</h3>
              <p className="text-gray-600">Just fill out a few fields and publish. We handle the design for you.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
              <p className="text-gray-600">Choose from modern, mobile-friendly templates tailored for developers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Free to Use</h3>
              <p className="text-gray-600">Start building your portfolio for free. Upgrade anytime for more features.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        
      </main>
    </>
  )
}
