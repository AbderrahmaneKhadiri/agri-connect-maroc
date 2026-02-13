"use client";
import React, { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    NavbarButton,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Leaf } from "lucide-react";
import Link from "next/link";

export default function AgriNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Accueil", link: "/" },
        { name: "Fonctionnalités", link: "#features" },
        { name: "Tarifs", link: "#pricing" },
    ];

    return (
        <Navbar>
            {/* Bureau */}
            <NavBody>
                <Link href="/" className="flex items-center gap-2 font-bold text-green-800">
                    <Leaf className="h-5 w-5" />
                    <span>AgriConnect</span>
                </Link>
                <NavItems items={navItems} />
                <div className="flex gap-2">
                    <Link href="/login"><NavbarButton variant="secondary">Login</NavbarButton></Link>
                    <Link href="/register"><NavbarButton>S'inscrire</NavbarButton></Link>
                </div>
            </NavBody>

            {/* Mobile */}
            <MobileNav>
                <MobileNavHeader>
                    <Link href="/" className="flex items-center gap-2 font-bold text-green-800">
                        <Leaf className="h-5 w-5" />
                        <span>AgriConnect</span>
                    </Link>
                    <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.link} className="block py-2 text-neutral-600">{item.name}</Link>
                    ))}
                    <div className="flex flex-col gap-2 pt-4">
                        <Link href="/login" className="w-full"><NavbarButton variant="secondary" className="w-full">Login</NavbarButton></Link>
                        <Link href="/register" className="w-full"><NavbarButton className="w-full">S'inscrire</NavbarButton></Link>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}