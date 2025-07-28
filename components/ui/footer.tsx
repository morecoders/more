'use client'

import Link from "next/link"



const Footer = () => {
  return (
    <>
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to build your portfolio?</h2>
        <p className="text-lg mb-8">Join hundreds of users already using MyPortfolio to showcase their work.</p>
        <Link href="/v1/signup/" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100">
          Create Your Portfolio
        </Link>
      </section>
      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 mt-12">
        &copy; {new Date().getFullYear()} MyPortfolio. Built for developers.
      </footer>
    </>
  )
}


export default Footer