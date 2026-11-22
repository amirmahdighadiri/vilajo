"use client";
import React from 'react';
import Link from "next/link";
import { menuItems } from "@/data/index.js";
import {useState} from "react";

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
                        <svg className="w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                        </svg>
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
                            <svg
                                className="inline-block w-4 sm:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                            >
                                <path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
                            </svg>
                        </div>
                    </div>

                    {/* <!-- ! -------------------- Mobile Menu Button -------------------- ! -->*/}
                    <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="باز کردن منو" aria-expanded={isMenuOpen} className="flex size-10 items-center justify-center rounded-lg border border-stone text-primary transition-colors hover:bg-background lg:hidden">
                        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {isMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
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