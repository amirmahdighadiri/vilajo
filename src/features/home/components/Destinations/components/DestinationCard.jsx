import React from "react";
import { MapPin } from "lucide-react";

function DestinationCard({ name, image, count }) {
    return (
        <article className="group w-full relative h-56 overflow-hidden rounded-3xl border border-stone">
            <img src={image} alt={`تصویر ${name}`} fill className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

            <div className="absolute inset-x-0 bottom-0 flex justify-end p-3">
                <div className="absolute bottom-0 right-0 w-full rounded-2xl bg-gradient-to-l from-white/95 via-white/70 to-transparent px-4 py-4 mx-3 my-2 text-right">
                    <h3 className="mb-2 text-base font-bold text-primary">
                        {name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-ink">
                        <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />

                        <span>{count} اقامتگاه</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default DestinationCard;