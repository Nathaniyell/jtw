"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function NotFound() {

    const router = useRouter()

    return (
        <main className="min-h-[70vh] w-full flex items-center justify-center text-titles">
        
            <div className="max-w-[500px] w-[97%] hover:shadow-md flex flex-col items-center justify-center gap-5 p-4 rounded-md">
            
                <h1 className="font-bold text-3xl md:text-4xl">Ooops! Page Not Found</h1>
                
                <p className="md:text-lg text-center">Seems the page you&apos;re looking for does not exist or has been moved to a new route.</p>

                <button className="bg-zinc-700 text-white hover:bg-opacity-20 rounded-md p-3 transition-all duration-300" onClick={() => router.push("/")}>go back home</button>
                
            </div>
            
        </main>
    )

}