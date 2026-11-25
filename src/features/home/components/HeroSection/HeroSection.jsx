import React from "react";
import { MapPin, CalendarDays, UsersRound, Search, BadgeCheck, Map, Wallet } from "lucide-react";

function HeroSection(props) {
    return (

        <div className="relative min-h-[700px] w-full bg-[url('/images/banner/Hero_pic.webp')] bg-cover bg-center bg-no-repeat sm:min-h-[750px] lg:min-h-[680px] xl:min-h-[720px]">

            <div className="container mx-auto flex min-h-[inherit] flex-col px-4 pt-32 pb-8 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">

                {/*<!-- ! -------------------- Hero Information -------------------- ! -->*/}
                <div dir="rtl" className="mb-8 text-right sm:mb-10 lg:mb-12">
                    <h2 className="mb-4 text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
                        جایی برای تجربه های خاص
                    </h2>

                    <p className="max-w-2xl text-sm font-black leading-8 text-white sm:text-base lg:text-xl">
                        با ویلا جو اقامتگاه های منحصر به فرد در بهترین مقاصد ایران را رزرو کنید
                    </p>
                </div>

                {/*<!-- ! -------------------- Search Box -------------------- ! -->*/}
                <div dir="rtl" className="flex w-full flex-col overflow-hidden rounded-3xl bg-surface shadow-xl shadow-black/10 lg:h-25 lg:flex-row lg:items-center lg:rounded-4xl">

                    {/*<!-- ! -------------------- Search Fields -------------------- ! -->*/}
                    <div className="grid w-full grid-cols-1 divide-y divide-stone sm:grid-cols-2 sm:divide-y-0 lg:flex-4 lg:grid-cols-4 lg:divide-x lg:divide-y-0">

                        {/*<!-- ! -------------------- Destination -------------------- ! -->*/}
                        <div className="flex min-h-20 items-center gap-3 px-5 py-4 sm:border-l sm:border-stone lg:justify-center lg:border-l-0 lg:px-3 xl:px-5">
                            <MapPin className="w-7 shrink-0 text-primary" aria-hidden="true" />

                            <div className="min-w-0 text-sm sm:text-base">
                                <p className="font-semibold text-primary">مقصد</p>
                                <p className="truncate text-gray-500">انتخاب مقصد</p>
                            </div>
                        </div>

                        {/*<!-- ! -------------------- Check-in Date -------------------- ! -->*/}
                        <div className="flex min-h-20 items-center gap-3 px-5 py-4 lg:justify-center lg:px-3 xl:px-5">
                            <CalendarDays className="w-7 shrink-0 text-primary" aria-hidden="true" />

                            <div className="min-w-0 text-sm sm:text-base">
                                <p className="font-semibold text-primary">تاریخ ورود</p>
                                <p className="truncate text-gray-500">انتخاب تاریخ</p>
                            </div>
                        </div>

                        {/*<!-- ! -------------------- Check-out Date -------------------- ! -->*/}
                        <div className="flex min-h-20 items-center gap-3 border-l border-stone px-5 py-4 sm:border-l-0 lg:justify-center lg:border-l lg:border-stone lg:px-3 xl:px-5">
                            <CalendarDays className="w-7 shrink-0 text-primary" aria-hidden="true" />

                            <div className="min-w-0 text-sm sm:text-base">
                                <p className="font-semibold text-primary">تاریخ خروج</p>
                                <p className="truncate text-gray-500">انتخاب تاریخ</p>
                            </div>
                        </div>

                        {/*<!-- ! -------------------- Guests -------------------- ! -->*/}
                        <div className="flex min-h-20 items-center gap-3 px-5 py-4 lg:justify-center lg:px-3 xl:px-5">
                            <UsersRound className="w-7 shrink-0 text-primary" aria-hidden="true" />

                            <div className="min-w-0 text-sm sm:text-base">
                                <p className="font-semibold text-primary">تعداد مهمانان</p>
                                <p className="truncate text-gray-500">2 نفر ، اتاق</p>
                            </div>
                        </div>
                    </div>

                    {/*<!-- ! -------------------- Search Button -------------------- ! -->*/}
                    <div className="w-full p-4 lg:w-auto lg:flex-1 lg:p-3">
                        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-4 text-white transition hover:bg-primary/90 lg:mx-auto lg:w-auto">
                            <Search className="w-5" aria-hidden="true" />

                            <span className="text-base">جستجو</span>
                        </button>
                    </div>
                </div>

                {/*<!-- ! -------------------- More Information -------------------- ! -->*/}
                <div dir="rtl" className="mt-auto hidden w-full flex-wrap items-center justify-center gap-x-8 gap-y-5 pt-10 text-white sm:flex lg:justify-between lg:px-4 xl:px-12">

                    {/*<!-- ! -------------------- Information 1 -------------------- ! -->*/}
                    <div className="flex items-center gap-1.5 text-sm lg:text-base">
                        <BadgeCheck className="w-5 shrink-0" aria-hidden="true" />
                        <p>اقامتگاه های تایید شده</p>
                    </div>

                    {/*<!-- ! -------------------- Information 2 -------------------- ! -->*/}
                    <div className="flex items-center gap-1.5 text-sm lg:text-base">
                        <Map className="w-5 shrink-0" aria-hidden="true" />
                        <p>اقامت</p>
                    </div>

                    {/*<!-- ! -------------------- Information 3 -------------------- ! -->*/}
                    <div className="flex items-center gap-1.5 text-sm lg:text-base">
                        <Wallet className="w-5 shrink-0" aria-hidden="true" />
                        <p>تضمین بهترین قیمت</p>
                    </div>

                    {/*<!-- ! -------------------- Information 4 -------------------- ! -->*/}
                    <div className="flex items-center gap-1.5 text-sm lg:text-base">
                        <BadgeCheck className="w-5 shrink-0" aria-hidden="true" />
                        <p>اقامتگاه های تایید شده</p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default HeroSection;