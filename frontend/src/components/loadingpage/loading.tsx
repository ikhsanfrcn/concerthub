// components/NarutoLoadingPage.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export const LoadingPage: React.FC = () => (
<div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br">
    {/* Background Image */}
    <div className="absolute inset-0">
        <Image
            src="/concert.png" // Ganti dengan path gambar background Anda
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
        />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center">
        <Image
            src="/logoconcert.png"
            alt="sing"
            width={300}
            height={300}
            className="animate-spin-slow"
        />
        <h1 className="mt-6 text-3xl font-bold text-white animate-bounce">
            Loading...
        </h1>
    </div>

    {/* scoped CSS for a slower spin than Tailwind’s default */}
    <style jsx>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
        }
    `}</style>
</div>
);
