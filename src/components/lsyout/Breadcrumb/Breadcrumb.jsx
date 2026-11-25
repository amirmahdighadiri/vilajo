"use client"

import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const breadcrumbNames = {
    about: "درباره ما",
    contact: "تماس با ما"
};

function Breadcrumb({path}) {
    return <>
        <Link href="/">
            خانه
            <ChevronLeft className="mx-1.25 inline-block w-5 text-primary rotate-180" aria-hidden="true" />
        </Link>
        {path.map((item , index) => {
                const href = `/${path.slice(0, index + 1).join('/')}`
                if(index === path.length - 1){
                    return <span key={index}>
                        {breadcrumbNames[item]}
                    </span>
                }else {
                    return <Link key={index} href={href}>
                        {breadcrumbNames[item]}
                        <ChevronLeft className="mx-1.25 inline-block w-5 text-primary rotate-180" aria-hidden="true" />
                    </Link>
                }
            })}
    </>


}

export default Breadcrumb;