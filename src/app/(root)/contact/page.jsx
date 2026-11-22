import React from 'react';
import Breadcrumb from "../../../components/lsyout/Breadcrumb/Breadcrumb";

function Page(props) {
    return (
        <div className="relative min-h-225 w-full">
            {/*<!-- ! -------------------- Image & Title -------------------- ! -->*/}
            <div className="relative w-full">
                <img className="w-full [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]" src="/images/banner/Hero_pic_contact.webp" alt="تماس با ویلاجو"/>
                {/*<!-- ! -------------------- Breadcrumb & Title -------------------- ! -->*/}
                <div className="container">
                    {/*<!-- ! -------------------- Breadcrumb -------------------- ! -->*/}
                    <div className="absolute top-10 text-sm">
                        <Breadcrumb path={['contact']} />
                    </div>
                    <h2 className="absolute top-25 text-right text-3xl font-bold text-primary">
                        تماس با ما
                    </h2>
                </div>
            </div>
            {/*<!-- ! -------------------- Page Content -------------------- ! -->*/}
            <div className="container">
                {/*<!-- ! -------------------- Contact Form & Communication -------------------- ! -->*/}
                <div className="mt-7.5 grid grid-cols-12 gap-x-7.5 ">
                    {/*<!-- ! -------------------- Send Message -------------------- ! -->*/}
                    <div className="col-span-6 rounded-3xl border border-stone bg-surface px-5 py-6 shadow-[0_0_10px_var(--color-stone)]">
                        <h3 className="text-xl font-bold text-primary">ارسال پیام</h3>
                        <form className="">
                            <input type="text" placeholder="نام و نام خانوادگی" className="mt-2.5 h-11.25 w-full rounded-2xl border border-stone bg-background pr-1.25 text-black outline-none focus:border-primary"/>
                            <input type="email" placeholder="ایمیل" className="mt-2.5 h-11.25 w-full rounded-2xl border border-stone bg-background pr-1.25 text-black outline-none focus:border-primary"/>
                            <textarea placeholder="پیام شما" className="mt-2.5 h-17.5 w-full resize-none rounded-2xl border border-stone bg-background pt-3.75 pr-1.5 text-[17px] text-black outline-none focus:border-primary"/>
                            <div className="mt-5 mb-3.75 flex flex-row items-center justify-center">
                                <button className="h-10.5 w-full rounded-2xl border border-primary bg-primary text-base font-bold text-white transition-colors hover:bg-accent hover:text-primary cursor-pointer">
                                    ارسال پیام
                                </button>
                            </div>
                        </form>
                    </div>
                    {/*<!-- ! -------------------- Communication -------------------- ! -->*/}
                    <div className="col-span-6 rounded-3xl border border-stone bg-surface px-5 py-6 shadow-[0_0_10px_var(--color-stone)]">

                        <h3 className="text-xl font-bold text-primary mb-6">
                            راه های ارتباطی
                        </h3>
                        <div className="space-y-6">
                            {/*<!-- ! -------------------- Phone -------------------- ! -->*/}
                            <div className="flex flex items-center">
                                <svg className="inline-block w-6.25 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                                </svg>
                                <p className="mr-3.75 inline-block text-base">
                                    021-9000
                                </p>
                            </div>
                            {/*<!-- ! -------------------- Email -------------------- ! -->*/}
                            <div className="flex flex-row items-center">
                                <svg
                                    className="inline-block w-6.25 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="currentColor"
                                >
                                    <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                                </svg>
                                <p className="mr-3.75 inline-block text-base">
                                    info@vilajo.com
                                </p>
                            </div>
                            {/*<!-- ! -------------------- Address -------------------- ! -->*/}
                            <div className="flex flex-row items-center">
                                <svg
                                    className="inline-block w-6.25 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill="currentColor"
                                >
                                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                                </svg>
                                <p className="mr-3.75 inline-block text-base">
                                    تهران، خیابان ولیعصر، پلاک 136
                                </p>
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Social Media -------------------- ! -->*/}
                        <div className="mt-15 mb-0 flex flex-row items-center justify-center pb-0">
                            {/*<!-- ! -------------------- LinkedIn -------------------- ! -->*/}
                            <svg className="w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                            </svg>
                            {/*<!-- ! -------------------- Telegram -------------------- ! -->*/}
                            <svg className="mx-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
                            </svg>
                            {/*<!-- ! -------------------- Instagram -------------------- ! -->*/}
                            <svg className="w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/*<!-- ! -------------------- Googles Map -------------------- ! -->*/}
                <div className="mx-auto mt-7.5 h-75 rounded-3xl shadow-[0_0_10px_var(--color-stone)]">
                    <iframe
                        className="h-full w-full rounded-3xl border-0"
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