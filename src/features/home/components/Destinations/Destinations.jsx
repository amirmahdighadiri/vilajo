
import Link from "next/link";
import DestinationCard from "./components/DestinationCard";

const destinations = [
    {
        id: 1,
        name: "شمال",
        image: "/images/city/Shomal.webp",
        count: "160",
    },
    {
        id: 2,
        name: "کردستان",
        image: "/images/city/kordestan.webp",
        count: "160",
    },
    {
        id: 3,
        name: "اصفهان",
        image: "/images/city/Esfahan.webp",
        count: "160",
    },
    {
        id: 4,
        name: "کیش",
        image: "/images/city/Kish.webp",
        count: "160",
    },
];

export default function Destinations() {
    return (
        <section className="mx-auto mb-12 mt-16 container">
            {/*<!-- ! -------------------- Section Header -------------------- ! -->*/}
            <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-right" dir="rtl">
                    <h2 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">
                        مقاصد محبوب
                    </h2>

                    <p className="text-sm text-muted sm:text-base">
                        بهترین مقاصد برای یک سفر فراموش نشدنی
                    </p>
                </div>

                <Link
                    href="/destinations"
                    className="flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
                    dir="rtl"
                >
                    <span>مشاهده همه</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="h-5 w-5 fill-current"
                        aria-hidden="true"
                    >
                        <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
                    </svg>
                </Link>
            </div>
            {/*<!-- ! -------------------- Destination Cards -------------------- ! -->*/}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id}{...destination}/>
                ))}
            </div>
        </section>
    );
}
