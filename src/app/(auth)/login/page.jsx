import React from 'react';
import Link from "next/link";

export const metadata = {
    title: "ورود",
};

function Page(props) {
    return (
        <main className="min-h-screen w-full bg-background">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                {/* <!-- ! -------------------- Login Form Section -------------------- ! --> */}
                <section className=" flex flex-col min-h-screen items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
                    {/* <!-- ! -------------------- Login Form Container -------------------- ! --> */}
                    <div className="relative z-10 w-full max-w-md rounded-3xl border border-stone bg-surface p-6 shadow-xl shadow-primary/5 sm:p-10">
                        {/* <!-- ! -------------------- Login Logo -------------------- ! --> */}
                        <div className="mb-8 flex justify-center">
                            <Link href="/">
                                <img src="/images/logo/Logo.webp" alt="Vilajo Logo" className="h-16 w-auto object-contain"/>
                            </Link>
                        </div>
                        {/* <!-- ! -------------------- Login Information -------------------- ! --> */}
                        <div className="mb-8 text-right">
                            <h2 className="mb-3 text-2xl font-bold text-primary">
                                ورود به حساب کاربری
                            </h2>

                            <p className="text-sm leading-7 text-gray-500">
                                برای ادامه و استفاده از امکانات ویلاجو وارد حساب کاربری خود شوید.
                            </p>
                        </div>

                        {/* <!-- ! -------------------- Login Form -------------------- ! --> */}
                        <form className="space-y-5">
                            {/* <!-- ! -------------------- Email Or Phone Input -------------------- ! --> */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-right text-sm font-medium text-gray-700"
                                >
                                    ایمیل یا شماره موبایل
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="ایمیل یا شماره موبایل خود را وارد کنید"
                                    className="w-full rounded-xl border border-stone bg-surface px-4 py-3.5 text-right text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                            </div>
                            {/* <!-- ! -------------------- Password Input -------------------- ! --> */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-right text-sm font-medium text-gray-700"
                                >
                                    رمز عبور
                                </label>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="رمز عبور خود را وارد کنید"
                                    className="w-full rounded-xl border border-stone bg-surface px-4 py-3.5 text-right text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                            </div>
                            {/* <!-- ! -------------------- Remember Me And Forgot Password -------------------- ! --> */}
                            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">

                                <label className="flex cursor-pointer items-center gap-2 text-gray-600">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        className="h-4 w-4 accent-primary"
                                    />
                                    مرا به خاطر بسپار
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="font-medium text-primary transition hover:text-accent"
                                >
                                    فراموشی رمز عبور؟
                                </Link>
                            </div>
                            {/* <!-- ! -------------------- Login Button -------------------- ! --> */}
                            <button type="submit" className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90 active:scale-[0.99]">
                                ورود به حساب کاربری
                            </button>
                        </form>

                        {/* <!-- ! -------------------- Social Login Divider -------------------- ! --> */}
                        <div className="my-7 flex items-center gap-4">
                            <span className="h-px flex-1 bg-stone" />
                                <span className="text-xs text-gray-400">
                                     یا ورود با
                                </span>
                            <span className="h-px flex-1 bg-stone" />
                        </div>

                        {/* <!-- ! -------------------- Social Login Buttons -------------------- ! --> */}
                        <div className="grid grid-cols-2 gap-3">

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-stone bg-surface py-3 text-sm font-medium text-gray-700 transition hover:bg-background"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M16.37 12.1c.02 2.1 1.84 2.8 1.86 2.81-.02.05-.29 1.01-.96 2-.58.85-1.19 1.69-2.15 1.71-.94.02-1.25-.55-2.34-.55-1.09 0-1.44.53-2.33.57-.93.03-1.64-.91-2.22-1.75-1.2-1.74-2.12-4.92-.89-7.06.61-1.06 1.7-1.73 2.88-1.75.9-.02 1.75.61 2.31.61.56 0 1.61-.76 2.71-.65.46.02 1.75.18 2.58 1.39-.07.04-1.54.9-1.45 2.67ZM14.58 5.96c.49-.59.82-1.41.73-2.23-.71.03-1.57.47-2.08 1.06-.46.53-.86 1.36-.75 2.16.79.06 1.61-.4 2.1-.99Z" />
                                </svg>
                                Apple
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-stone bg-surface py-3 text-sm font-medium text-gray-700 transition hover:bg-background"
                            >
                                <img
                                    src="/images/logo/Google_Logo.webp"
                                    alt="Google"
                                    className="h-5 w-5 object-contain"
                                />
                                Google
                            </button>

                        </div>

                        {/* <!-- ! -------------------- Register Link -------------------- ! --> */}
                        <div dir="rtl" className="mt-8 text-center text-sm text-gray-500">
                            حساب کاربری ندارید؟
                            <Link
                                href="/register"
                                className="mr-1 font-semibold text-primary transition hover:text-accent"
                            >
                                ثبت‌نام کنید
                            </Link>
                        </div>
                    </div>
                </section>
                {/* <!-- ! -------------------- Login Image Section -------------------- ! --> */}
                <section className="relative hidden min-h-screen overflow-hidden lg:block">
                    <img src="/images/banner/Login_pic.webp" alt="Login" className="absolute inset-0 h-full w-full object-cover"/>

                    <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-16">

                        {/* <!-- ! -------------------- Welcome Information -------------------- ! --> */}
                        <div className="max-w-lg text-right text-white">
                            <h1 className="mb-5 text-3xl font-bold leading-relaxed xl:text-5xl">
                                به ویلاجو خوش آمدید
                            </h1>

                            <p className="text-base leading-9 text-white/85 xl:text-lg">
                                با ویلاجو، تجربه‌ای متفاوت از رزرو اقامتگاه و سفر را تجربه کنید.
                                مقصد بعدی شما فقط چند کلیک با شما فاصله دارد.
                            </p>
                        </div>

                        {/* <!-- ! -------------------- Login Benefits -------------------- ! --> */}
                        <div className="space-y-7 text-right text-white">

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            d="M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        اقامتگاه‌های متنوع
                                    </h3>
                                    <p className="text-sm text-white/75">
                                        انتخاب از میان انواع اقامتگاه‌های جذاب
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            d="M12 8c-2.2 0-4 1.1-4 2.5S9.8 13 12 13s4 1.1 4 2.5S14.2 18 12 18m0-10V6m0 14v-2"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        بهترین قیمت
                                    </h3>
                                    <p className="text-sm text-white/75">
                                        رزرو اقامتگاه با قیمت مناسب
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            d="M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        پشتیبانی ۲۴ ساعته
                                    </h3>
                                    <p className="text-sm text-white/75">
                                        همراه شما در تمام مراحل سفر
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Page;