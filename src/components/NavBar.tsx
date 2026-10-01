'use client'
import { useState } from "react";
import Link from 'next/link';
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";




export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleSignOut = async () => {
    const { data, error } = await signOut();
  }



  const link = <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="#">Blog</Link>
    </li>
    {
      session?.user ? <>
        <li>
          <Link href="/profile" className="">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="font-semibold text-accent" aria-current="page">
            Dashboard
          </Link>
        </li>
      </> : <></>
    }
  </>

  const Logo = <>
    <Link href='/'><p className="font-bold text-2xl text-[#f98901]"><span className="text-[#ccff00fd]">Life</span>OS <sup className="text-white font-light -top-4 -left-1 italic font-serif text-[10px]">{session?.user ? `${session?.user?.name}`:'LifeOS'}</sup></p></Link>
  </>




  const authLink = <>
    {session?.user ?
      <><span>{session?.user?.name}</span><Button
        onClick={handleSignOut}
      >Sign Out</Button>
      </> : <><Link href="/sign-in">Sign in</Link>
        <Link href='/sign-up' className='border border-[#e7e7e789] rounded-md px-4 py-1.5 bg-[#01013284]'>Sign Up</Link> </>
    }

  </>

  console.log(session?.user?.email);
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {Logo}
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {link}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          {authLink}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 font-medium text-accent">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {authLink}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}