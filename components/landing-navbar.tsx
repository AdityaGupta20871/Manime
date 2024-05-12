'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export const LandingNavbar = () => {

  
  return (
    <Navbar className="top-2" />
   
  );
};


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { isSignedIn } = useAuth();
  return (
    <div
      className={cn("bg-transparent fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <nav className="bg-transparent flex items-center justify-between gap-x-10">
<Link href="/" className="flex items-center">
  <h1 className={cn('text-2xl font-bolder text-pink-800', font.className)}>
    Manime
  </h1>
</Link>
<div className="flex items-center gap-x-2">
  <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
    <Button variant="outline" className="rounded-full">
      Get Started
    </Button>
  </Link>
</div>
</nav>
      </Menu>
    </div>
  );
}