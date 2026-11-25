import React from 'react';
import Breadcrumb from "../../../components/lsyout/Breadcrumb/Breadcrumb";
import { Phone, Mail, MapPin } from "lucide-react";
export const metadata = {
    title: "تماس با ما",
};
function Page(props) {
    return (
        <div className="relative min-h-0 w-full">
            {/*<!-- ! -------------------- Image & Title -------------------- ! -->*/}
            <div className="relative w-full">
                <img
                    className="h-52 w-full object-cover [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] sm:h-64 md:h-80 lg:h-96"
                    src="/images/banner/Hero_pic_contact.webp"
                    alt="تماس با ویلاجو"
                />

                {/* <!-- ! -------------------- Breadcrumb & Title -------------------- ! -->*/}
                <div className="container">
                    {/*<!-- ! -------------------- Breadcrumb -------------------- ! -->*/}
                    <div className="absolute top-5 text-xs sm:top-8 sm:text-sm lg:top-10">
                        <Breadcrumb path={["contact"]} />
                    </div>
                    {/*<!-- ! -------------------- Page Title -------------------- ! --> */}
                    <h2 className="absolute top-16 text-right text-xl font-bold text-primary sm:top-20 sm:text-2xl md:top-24 md:text-3xl lg:top-25">
                        تماس با ما
                    </h2>
                </div>
            </div>
            {/* <!-- ! -------------------- Page Content -------------------- ! -->*/}
            <div className="container px-4 sm:px-5 lg:px-0">
                {/*<!-- ! -------------------- Contact Form & Communication -------------------- ! -->   */}
                <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-7.5 lg:grid-cols-2 lg:gap-7.5">

                    {/*
            <!-- ! -------------------- Send Message -------------------- ! -->
            */}
                    <div className="rounded-2xl border border-stone bg-surface px-4 py-5 shadow-[0_0_10px_var(--color-stone)] sm:rounded-3xl sm:px-5 sm:py-6">
                        <h3 className="text-lg font-bold text-primary sm:text-xl">
                            ارسال پیام
                        </h3>

                        <form>
                            <input
                                type="text"
                                placeholder="نام و نام خانوادگی"
                                className="mt-2.5 h-11.25 w-full rounded-xl border border-stone bg-background px-3 text-sm text-black outline-none transition-colors focus:border-primary sm:rounded-2xl sm:text-base"
                            />

                            <input
                                type="email"
                                placeholder="ایمیل"
                                className="mt-2.5 h-11.25 w-full rounded-xl border border-stone bg-background px-3 text-sm text-black outline-none transition-colors focus:border-primary sm:rounded-2xl sm:text-base"
                            />

                            <textarea
                                placeholder="پیام شما"
                                className="mt-2.5 h-32 w-full resize-none rounded-xl border border-stone bg-background px-3 py-3 text-sm text-black outline-none transition-colors focus:border-primary sm:rounded-2xl sm:text-base"
                            />

                            <div className="mb-3.75 mt-5 flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="h-11 w-full cursor-pointer rounded-xl border border-primary bg-primary text-sm font-bold text-white transition-colors hover:bg-accent hover:text-primary sm:rounded-2xl sm:text-base"
                                >
                                    ارسال پیام
                                </button>
                            </div>
                        </form>
                    </div>

                    {/*
            <!-- ! -------------------- Communication -------------------- ! -->
            */}
                    <div className="rounded-2xl border border-stone bg-surface px-4 py-5 shadow-[0_0_10px_var(--color-stone)] sm:rounded-3xl sm:px-5 sm:py-6">
                        <h3 className="mb-6 text-lg font-bold text-primary sm:text-xl">
                            راه های ارتباطی
                        </h3>

                        <div className="space-y-6">

                            {/*
                    <!-- ! -------------------- Phone -------------------- ! -->
                    */}
                            <div className="flex items-center">
                                <Phone className="w-5 shrink-0 text-primary sm:w-6" aria-hidden="true" />

                                <p className="mr-3.75 text-sm sm:text-base">
                                    021-9000
                                </p>
                            </div>

                            {/*
                    <!-- ! -------------------- Email -------------------- ! -->
                    */}
                            <div className="flex items-center">
                                <Mail className="w-5 shrink-0 text-primary sm:w-6" aria-hidden="true" />

                                <p className="mr-3.75 break-all text-sm sm:text-base">
                                    info@vilajo.com
                                </p>
                            </div>

                            {/*
                    <!-- ! -------------------- Address -------------------- ! -->
                    */}
                            <div className="flex items-center">
                                <MapPin className="w-5 shrink-0 text-primary sm:w-6" aria-hidden="true" />

                                <p className="mr-3.75 text-sm sm:text-base">
                                    تهران، خیابان ولیعصر، پلاک 136
                                </p>
                            </div>
                        </div>

                        {/*
                <!-- ! -------------------- Social Media -------------------- ! -->
                */}
                        <div className="mb-0 mt-10 flex items-center justify-center gap-7 pb-0 sm:mt-15 sm:gap-10">

                            {/*
                    <!-- ! -------------------- LinkedIn -------------------- ! -->
                    */}
                            <svg
                                className="w-8 text-primary transition-colors hover:text-accent sm:w-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                            >
                                <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                            </svg>

                            {/*
                    <!-- ! -------------------- Telegram -------------------- ! -->
                    */}
                            <svg
                                className="w-8 text-primary transition-colors hover:text-accent sm:w-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                            >
                                <path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
                            </svg>

                            {/*
                    <!-- ! -------------------- Instagram -------------------- ! -->
                    */}
                            <svg
                                className="w-8 text-primary transition-colors hover:text-accent sm:w-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                fill="currentColor"
                            >
                                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.4 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* <!-- ! -------------------- Googles Map -------------------- ! --> */}
                <div className="mx-auto mt-6 h-56 overflow-hidden rounded-2xl shadow-[0_0_10px_var(--color-stone)] sm:mt-7.5 sm:h-64 sm:rounded-3xl md:h-75">
                    <iframe
                        className="h-full w-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.2466194592155!2d51.407977239814414!3d35.73867970385938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e060ddacbb909%3A0x2297707295d2278b!2sTehran%20Province%2C%20Valiasr%20St%2C%20Iran!5e0!3m2!1sen!2suk!4v1793458752068!5m2!1sen!2suk"
                        title="Google Map Location"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </div>
        </div>


    );
}

export default Page;