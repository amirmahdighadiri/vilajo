import React from 'react';

function HeroSection(props) {
    return (
        <div className="h-125 w-full flex flex-col bg-[url('/images/banner/Hero_pic.webp')] bg-cover bg-center bg-no-repeat sm:h-135 md:h-150 lg:h-165 2xl:h-175 pt-50 pb-10">
            <div className="container flex flex-col h-full">
                {/*<!-- ! -------------------- Hero Information -------------------- ! -->*/}
                <div className="mb-10">
                    <h2 className="text-5xl font-bold text-white mb-5">
                        جایی برای تجربه های خاص
                    </h2>
                    <p className="text-xl font-black text-white">
                        با ویلا جو اقامتگاه های منحصر به فرد در بهترین مقاصد ایران را رزرو کنید
                    </p>
                </div>
                {/*<!-- ! -------------------- Search Box -------------------- ! -->*/}
                <div className="w-full h-25 flex items-center rounded-4xl bg-surface divide-x divide-stone">
                    <div className="flex-4 grid grid-cols-12 divide-x divide-stone *:col-span-3 *:pl-7.5 *:whitespace-nowrap">
                        {/*<!-- ! -------------------- Destination -------------------- ! -->*/}
                        <div className="flex-center">
                            <div className="ml-3.75 flex items-center">
                                <svg
                                    className="w-7.5 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="currentColor"
                                >
                                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                                </svg>
                            </div>
                            <div className="text-base">
                                <p className="font-semibold">مقصد</p>
                                <p>انتخاب مقصد</p>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Check-in Date -------------------- ! -->*/}
                        <div className="flex-center">
                            <div className="ml-3.75 flex items-center">
                                <svg
                                    className="w-7.5 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="currentColor"
                                >
                                    <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z" />
                                </svg>
                            </div>
                            <div className="text-base">
                                <p className="font-semibold">تاریخ ورود</p>
                                <p>انتخاب تاریخ</p>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Check-out Date -------------------- ! -->*/}
                        <div className="flex-center">
                            <div className="ml-3.75 flex items-center">
                                <svg
                                    className="w-7.5 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="currentColor"
                                >
                                    <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z" />
                                </svg>
                            </div>
                            <div className="text-base">
                                <p className="font-semibold">تاریخ خروج</p>
                                <p>انتخاب تاریخ</p>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Guests -------------------- ! -->*/}
                        <div className="flex-center">
                            <div className="ml-3.75 flex items-center">
                                <svg
                                    className="w-7.5 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="currentColor"
                                >
                                    <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                                </svg>
                            </div>
                            <div className="text-base">
                                <p className="font-semibold">تعداد مهمانان</p>
                                <p>2 نفر ، اتاق</p>
                            </div>
                        </div>
                    </div>
                    {/*<!-- ! -------------------- Search Button -------------------- ! -->*/}
                    <div className="flex-1 flex-center">
                        <button className="px-8 py-4 rounded-2xl border border-primary bg-primary text-white">
                            <div className="flex flex-row items-center justify-center">
                                <svg className="inline-block w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                    <path
                                        fill="currentColor"
                                        d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                                    />
                                </svg>
                                <p className="mr-2.5 inline-block text-base">
                                    جستجو
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
                {/*<!-- ! -------------------- More Information -------------------- ! -->*/}
                <div className="align-bottom flex mt-auto w-full flex-row items-center justify-between px-30">

                    {/*<!-- ! -------------------- Information 1 -------------------- ! -->*/}
                    <div className="flex-center">
                        <svg
                            className="ml-1.25 inline w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                        >
                            <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                        </svg>

                        <p className="inline text-base text-white">
                            اقامتگاه های تایید شده
                        </p>
                    </div>
                    {/*<!-- ! -------------------- Information 2 -------------------- ! -->*/}
                    <div className="flex-center">
                        <svg
                            className="ml-1.25 inline w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                        >
                            <path d="M576 112C576 103.7 571.7 96 564.7 91.6C557.7 87.2 548.8 86.8 541.4 90.5L416.5 152.1L244 93.4C230.3 88.7 215.3 89.6 202.1 95.7L77.8 154.3C69.4 158.2 64 166.7 64 176L64 528C64 536.2 68.2 543.9 75.1 548.3C82 552.7 90.7 553.2 98.2 549.7L225.5 489.8L396.2 546.7C409.9 551.3 424.7 550.4 437.8 544.2L562.2 485.7C570.6 481.7 576 473.3 576 464L576 112zM208 146.1L208 445.1L112 490.3L112 191.3L208 146.1zM256 449.4L256 148.3L384 191.8L384 492.1L256 449.4zM432 198L528 150.6L528 448.8L432 494L432 198z" />
                        </svg>

                        <p className="inline text-base text-white">
                            اقامت
                        </p>
                    </div>
                    {/*<!-- ! -------------------- Information 3 -------------------- ! -->*/}
                    <div className="flex-center">
                        <svg
                            className="ml-1.25 inline w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                        >
                            <path d="M64 173.5L64 483.6C64 503 75.8 520.9 94.3 526.9C188.3 556.9 253.1 535.3 317.6 513.8C380 493 442 472.3 529.7 498.5C551.9 505.1 575.9 489.7 575.9 466.5L575.9 156.4C575.9 137 564.1 119.1 545.6 113.1C451.6 83.1 386.8 104.7 322.3 126.2C259.9 147 197.9 167.7 110.2 141.5C88 134.9 63.9 150.3 63.9 173.5zM320 432C267 432 224 381.9 224 320C224 258.1 267 208 320 208C373 208 416 258.1 416 320C416 381.9 373 432 320 432z" />
                        </svg>

                        <p className="inline text-base text-white">
                            تضمین بهترین قیمت
                        </p>
                    </div>
                    {/*<!-- ! -------------------- Information 4 -------------------- ! -->*/}
                    <div className="flex-center">
                        <svg
                            className="ml-1.25 inline w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                        >
                            <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.8 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                        </svg>

                        <p className="inline text-base text-white">
                            اقامتگاه های تایید شده
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;