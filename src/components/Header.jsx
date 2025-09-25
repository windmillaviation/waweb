import { useState } from 'react'
import logoIconOrig from '../assets/logo-icon-orig.png'
import logoTextOrig from '../assets/logo-text-orig.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center space-x-3">
          <img src={logoIconOrig} alt="Windmill Aviation icon" className="h-14 w-14" />
          <img src={logoTextOrig} alt="Windmill Aviation" className="h-8 md:h-10 w-auto" />
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-9 rounded-md px-3 hover:bg-accent hover:text-accent-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
        </button>
        <nav className={`hidden md:flex items-center space-x-6`}>
          <a href="#about" className="nav-link-green">About</a>
          <a href="#services" className="nav-link-green">Services</a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-soft font-semibold h-9 rounded-md px-3 ml-4">Get in Touch</a>
        </nav>
      </div>
      {open && (
        <nav className="md:hidden container pb-4">
          <div className="rounded-lg border border-border bg-card p-2 shadow-card">
            <a className="block px-4 py-3 nav-link-green hover:bg-accent rounded-md" onClick={() => setOpen(false)} href="#about">About</a>
            <a className="block px-4 py-3 nav-link-green hover:bg-accent rounded-md" onClick={() => setOpen(false)} href="#services">Services</a>
            <a className="block px-4 py-3 bg-gradient-hero text-primary-foreground rounded-md font-semibold mt-2 text-center" onClick={() => setOpen(false)} href="#contact">Get in Touch</a>
          </div>
        </nav>
      )}
    </header>
  )
}


