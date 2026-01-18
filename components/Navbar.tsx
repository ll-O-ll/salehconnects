"use client"

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { label: "Testimonials", href: '#testimonials' },
        { label: "Case Studies", href: '#case-studies' },
        { label: "Pricing", href: '#pricing' },
        { label: "Contact", href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center group gap-3">
                        <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
                            <Image
                                src="/images/salahconnect-logo.png"
                                alt="Saleh Connect Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-heading text-xl font-bold tracking-tight text-foreground hidden sm:block">
                            Saleh Connects
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium transition-colors hover:text-primary tracking-wide text-muted-foreground"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <Button asChild size="sm" className="rounded-full px-6 font-bold">
                            <Link href="#contact">Partner Now</Link>
                        </Button>
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden flex items-center gap-4">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="shrink-0" suppressHydrationWarning>
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col h-full justify-center items-center gap-10">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-12 h-12">
                                            <Image
                                                src="/images/salahconnect-logo.png"
                                                alt="Saleh Connect Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="font-heading text-2xl font-bold tracking-tight text-center">
                                            Saleh Connects
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-6 w-full px-6">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-xl font-medium hover:text-primary transition-colors text-center py-2"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                        <Button asChild className="w-full mt-4 rounded-full font-bold h-12 text-md">
                                            <Link href="#contact" onClick={() => setIsOpen(false)}>Partner Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
