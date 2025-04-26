// // components/NarutoLoadingPage.tsx
// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const NarutoLoadingPage: React.FC = () => (
// <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-pink-300 to-red-300">
//     <div className="flex flex-col items-center">
//         <Image
//             src="/logoconcert.png"
//             alt="sing"
//             width={300}
//             height={300}
//             className="animate-spin-slow"
//         />
//         <h1 className="mt-6 text-3xl font-bold text-white animate-bounce">
//             Loading...
//         </h1>
//     </div>

//     {/* scoped CSS for a slower spin than Tailwind’s default */}
//     <style jsx>{`
//         @keyframes spin-slow {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//             animation: spin-slow 4s linear infinite;
//         }
//     `}</style>
// </div>
// );

// export default NarutoLoadingPage;
