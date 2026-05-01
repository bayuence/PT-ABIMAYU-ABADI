'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import About from '@/components/about'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import ClientsGrid from '@/components/clients-grid'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import FloatingElements from '@/components/floating-elements'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Portfolio />
        <ClientsGrid />
        <Contact />
        <Footer />
      </main>
      <FloatingElements />
    </>
  )
}
