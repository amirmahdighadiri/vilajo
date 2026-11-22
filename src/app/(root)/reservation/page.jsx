import React from 'react';

export const metadata = {
    title: "رزرو اقامتگاه",
};

function Page(props) {
    return (
        <div className="min-h-screen bg-background">
            {/* <!-- ! -------------------- Reservation Steps -------------------- ! --> */}
            <div className="mx-auto flex w-[95%] items-center justify-between gap-2 sm:w-[90%] sm:gap-4 pt-8 md:pt-10">

                <div className="flex shrink-0 items-center gap-2">
                    <svg className="h-7 w-7 rounded-full bg-primary p-1.5 sm:h-8 sm:w-8" viewBox="0 0 640 640" fill="white">
                        <path d="M320 496C342.1 496 360 513.9 360 536C360 558.1 342.1 576 320 576C297.9 576 280 558.1 280 536C280 513.9 297.9 496 320 496zM320 64C346.5 64 368 85.5 368 112C368 112.6 368 113.1 368 113.7L352 417.7C351.1 434.7 337 448 320 448C303 448 289 434.7 288 417.7L272 113.7C272 113.1 272 112.6 272 112C272 85.5 293.5 64 320 64z" />
                    </svg>
                    <p className="text-xs font-semibold text-primary sm:text-base lg:text-lg">
                        اطلاعات رزرو
                    </p>
                </div>

                <div className="h-px flex-1 bg-stone" />

                <div className="flex shrink-0 items-center gap-2">
                    <svg className="h-7 w-7 rounded-full bg-stone p-1.5 sm:h-8 sm:w-8" viewBox="0 0 640 640" fill="#424242">
                        <path d="M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392L288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416L352 392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z" />
                    </svg>
                    <p className="text-xs font-medium text-gray-500 sm:text-base lg:text-lg">
                        پرداخت
                    </p>
                </div>

                <div className="h-px flex-1 bg-stone" />

                <div className="flex shrink-0 items-center gap-2">
                    <svg className="h-7 w-7 rounded-full bg-stone p-1.5 sm:h-8 sm:w-8" viewBox="0 0 640 640" fill="#424242">
                        <path d="M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392L288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416L352 392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z" />
                    </svg>
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
                                <svg className="h-5 w-5 shrink-0" viewBox="0 0 640 640" fill="currentColor">
                                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                                </svg>
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

                            <svg className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
                            </svg>
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

                            <svg className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M64 192L64 224L576 224L576 192C576 156.7 547.3 128 512 128L128 128C92.7 128 64 156.7 64 192zM64 272L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 272L64 272zM128 424C128 410.7 138.7 400 152 400L200 400C213.3 400 224 410.7 224 424C224 437.3 213.3 448 200 448L152 448C138.7 448 128 437.3 128 424zM272 424C272 410.7 282.7 400 296 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L296 448C282.7 448 272 437.3 272 424z" />
                            </svg>
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

                            <svg className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 256C576 220.7 547.3 192 512 192L136 192C122.7 192 112 181.3 112 168C112 154.7 122.7 144 136 144L520 144C533.3 144 544 133.3 544 120C544 106.7 533.3 96 520 96L128 96zM480 320C497.7 320 512 334.3 512 352C512 369.7 497.7 384 480 384C462.3 384 448 369.7 448 352C448 334.3 462.3 320 480 320z" />
                            </svg>
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