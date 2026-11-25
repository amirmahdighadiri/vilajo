"use client";
import React from 'react';
import Link from "next/link";
import { menuItems } from "@/data/index.js";
import {useState} from "react";
import { Search, UserRound, Menu, X } from "lucide-react";

function Header(props) {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 right-0 left-0 z-50 mx-auto bg-surface py-2">
            {/* <!-- ! -------------------- Logo & Menu -------------------- ! --> */}
            <div className="container flex items-center justify-between px-4">
                <div className="flex items-center gap-x-10">
                    {/* <!-- ! -------------------- Logo Image -------------------- ! --> */}
                    <div className="size-14 shrink-0 sm:size-16 lg:size-18">
                        <Link href="/">
                            <img
                                src="/images/logo/Logo.webp"
                                alt="Vilajo Logo"
                                className="h-full w-full object-contain"
                            />
                        </Link>
                    </div>
                    {/* <!-- ! -------------------- Desktop Menu -------------------- ! -->  */}
                    <nav className="hidden flex-row items-center whitespace-nowrap text-base font-bold text-primary lg:flex">
                        {menuItems.map((item) => (
                            <Link key={item.id} href={item.link} className="ml-7.5 text-primary no-underline transition-colors hover:text-accent">
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                {/* <!-- ! -------------------- Action Buttons -------------------- ! -->*/}
                <div className="flex shrink-0 items-center gap-x-3 sm:gap-x-5 lg:gap-x-7.5">
                    {/* <!-- ! -------------------- Search Icon -------------------- ! --> */}
                    <div className="hidden border-l-[3px] border-l-stone/60 pl-5 text-primary lg:block">
                        <Search className="w-5.75" aria-hidden="true" />
                    </div>
                    {/*<!-- ! -------------------- Login Button -------------------- ! -->   */}
                    <div className="flex items-center justify-center gap-x-2 whitespace-nowrap rounded-xl border border-stone px-2 py-1.5 text-sm sm:px-3 sm:text-base">
                        <div>
                            <Link
                                href="/register"
                                className="bg-transparent font-medium text-primary transition-colors hover:text-accent"
                            >
                                ثبت نام
                            </Link>

                            <span className="mx-1 text-primary">/</span>

                            <Link
                                href="/login"
                                className="bg-transparent font-medium text-primary transition-colors hover:text-accent"
                            >
                                ورود
                            </Link>
                        </div>

                        {/*
                        <!-- ! -------------------- User Icon -------------------- ! -->
                        */}
                        <div className="text-primary">
                            <UserRound className="inline-block w-4 sm:w-5" aria-hidden="true" />
                        </div>
                    </div>

                    {/* <!-- ! -------------------- Mobile Menu Button -------------------- ! -->*/}
                    <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="باز کردن منو" aria-expanded={isMenuOpen} className="flex size-10 items-center justify-center rounded-lg border border-stone text-primary transition-colors hover:bg-background lg:hidden">
                        {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>
            </div>

            {/* <!-- ! -------------------- Mobile Menu -------------------- ! -->  */}
            <div className={`absolute right-0 left-0 top-full border-t border-stone bg-surface px-5 shadow-lg transition-all duration-300 lg:hidden ${ isMenuOpen ? "visible translate-y-0 opacity-100": "invisible -translate-y-2 opacity-0"}`}>
                <nav className="flex flex-col py-3 text-sm font-bold text-primary sm:text-base">
                    {menuItems.map((item) => (
                        <Link key={item.title} href={item.link} onClick={() => setIsMenuOpen(false)} className="border-b border-stone/60 py-3 transition-colors last:border-0 hover:text-accent">
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;