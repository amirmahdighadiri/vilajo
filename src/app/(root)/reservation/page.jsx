import React from "react";
import { AlertCircle, CircleHelp, MapPin, CreditCard, Wallet, WalletCards } from "lucide-react";

export const metadata = {
    title: "رزرو اقامتگاه",
};

function Page(props) {
    return (
        <div className="min-h-screen bg-background">
            {/* <!-- ! -------------------- Reservation Steps -------------------- ! --> */}
            <div className="mx-auto flex w-[95%] items-center justify-between gap-2 sm:w-[90%] sm:gap-4 pt-8 md:pt-10">

                <div className="flex shrink-0 items-center gap-2">
                    <AlertCircle className="h-7 w-7 rounded-full bg-primary p-1.5 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                    <p className="text-xs font-semibold text-primary sm:text-base lg:text-lg">
                        اطلاعات رزرو
                    </p>
                </div>

                <div className="h-px flex-1 bg-stone" />

                <div className="flex shrink-0 items-center gap-2">
                    <CircleHelp className="h-7 w-7 rounded-full bg-stone p-1.5 sm:h-8 sm:w-8 text-[#424242]" aria-hidden="true" />
                    <p className="text-xs font-medium text-gray-500 sm:text-base lg:text-lg">
                        پرداخت
                    </p>
                </div>

                <div className="h-px flex-1 bg-stone" />

                <div className="flex shrink-0 items-center gap-2">
                    <CircleHelp className="h-7 w-7 rounded-full bg-stone p-1.5 sm:h-8 sm:w-8 text-[#424242]" aria-hidden="true" />
                    <p className="text-xs font-medium text-gray-500 sm:text-base lg:text-lg">
                        تأیید شد
                    </p>
                </div>
            </div>
            {/* <!-- ! -------------------- Reservation Information -------------------- ! -->  */}
            <section className="container mx-auto mt-10 max-w-7xl sm:mt-12 lg:mt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* <!-- ! -------------------- Reservation Details Card -------------------- ! --> */}
                    <section className="flex flex-col overflow-hidden rounded-2xl bg-surface p-3 shadow-md shadow-stone/50 sm:flex-row sm:gap-4 sm:p-4">
                        <div className="w-full shrink-0 sm:w-36 lg:w-40">
                            <img
                                className="h-48 w-full rounded-xl object-cover sm:h-full sm:min-h-52"
                                src="/images/banner/Reserv-pic1.webp"
                                alt="ویلا استخردار لوکس در شمال"
                            />
                        </div>

                        <div className="flex-1 pt-3 text-right sm:py-2 sm:pr-2">
                            <h2 className="mb-3 text-lg font-bold text-primary sm:text-xl lg:text-2xl">
                                ویلا استخردار لوکس در شمال
                            </h2>

                            <div className="mb-4 flex items-center gap-2 text-sm text-gray-600 sm:text-base">
                                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                                <p>مازندران - نمک آبرود</p>
                            </div>

                            <div className="space-y-3 text-sm text-gray-600 sm:text-base">
                                <div className="flex flex-wrap items-center gap-x-3">
                                    <span>تاریخ ورود:</span>
                                    <span>05 / 06 / 1406</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-3">
                                    <span>تاریخ خروج:</span>
                                    <span>08 / 06 / 1406</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-3">
                                    <span>تعداد:</span>
                                    <span>8 نفر</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-3">
                                    <span>قیمت کل:</span>
                                    <span className="font-bold text-primary">
                    25,500,000 تومان
                  </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ! -------------------- Guest Information Form -------------------- ! -->*/}
                    <section className="text-right">
                        <h2 className="mb-6 mt-2 text-2xl font-bold text-primary sm:mb-8 sm:text-3xl">
                            اطلاعات مهمان
                        </h2>

                        <form className="space-y-5">
                            <input className="h-12 w-full rounded-xl border border-stone bg-surface px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" type="text" placeholder="نام و نام خانوادگی"/>

                            <input className="h-12 w-full rounded-xl border border-stone bg-surface px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" type="text" placeholder="شماره موبایل"/>

                            <input className="h-12 w-full rounded-xl border border-stone bg-surface px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" type="email" placeholder="ایمیل (اختیاری)"/>
                        </form>
                    </section>
                </div>
                {/*<!-- ! -------------------- Payment Methods -------------------- ! -->*/}
                <section className="mt-12 text-right sm:mt-16">
                    <h2 className="mb-6 text-2xl font-bold text-primary sm:mb-8 sm:text-3xl">
                        روش پرداخت
                    </h2>
                    <div className="w-full overflow-hidden rounded-2xl border border-stone bg-surface">

                        <label className="flex min-h-16 cursor-pointer items-center gap-3 border-b border-stone px-4 transition hover:bg-background sm:px-5">
                            <input
                                className="h-4 w-4 accent-primary"
                                type="radio"
                                name="payment"
                                defaultChecked
                            />

                            <span className="flex-1 text-sm font-bold text-primary sm:text-base">
                پرداخت از طریق درگاه بانکی
              </span>

                            <CreditCard className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
                        </label>

                        <label className="flex min-h-16 cursor-pointer items-center gap-3 border-b border-stone px-4 transition hover:bg-background sm:px-5">
                            <input
                                className="h-4 w-4 accent-primary"
                                type="radio"
                                name="payment"
                            />

                            <span className="flex-1 text-sm font-bold text-primary sm:text-base">
                پرداخت از کیف پول
              </span>

                            <Wallet className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
                        </label>

                        <label className="flex min-h-16 cursor-not-allowed items-center gap-3 px-4 opacity-60 sm:px-5">
                            <input
                                className="h-4 w-4 accent-primary"
                                type="radio"
                                name="payment"
                                disabled
                            />

                            <span className="flex-1 text-sm font-bold text-primary sm:text-base">
                پرداخت از Wallet
                <span className="mr-2 text-xs font-normal text-gray-500">
                  (به زودی)
                </span>
              </span>

                            <WalletCards className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" aria-hidden="true" />
                        </label>
                    </div>
                </section>
                {/* <!-- ! -------------------- Final Payment Button -------------------- ! -->*/}
                <div className="mb-12 mt-8 flex justify-start sm:mb-16 sm:mt-10">
                    <button className="h-12 w-full rounded-xl bg-primary px-8 text-sm font-bold text-white transition hover:bg-primary/90 sm:w-80 sm:text-base">
                        پرداخت و ثبت نهایی
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Page;