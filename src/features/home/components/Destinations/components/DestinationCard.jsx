import React from 'react';

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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5 w-5 shrink-0 fill-primary" aria-hidden="true">
                            <path
                                d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/>
                        </svg>

                        <span>{count} اقامتگاه</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default DestinationCard;