
import Link from "next/link";
import DestinationCard from "./components/DestinationCard";
import { ArrowLeft } from "lucide-react";

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

                    <ArrowLeft className="h-5 w-5" aria-hidden="true" />
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
