import React from "react";

export const RegisterContent: React.FC = () => {
  return (
    <div
    className="
      flex items-start justify-center
      md:items-center md:justify-center
      bg-cover bg-center
      bg-black/50 bg-blend-overlay
      h-48 md:h-screen
      w-full
    "
    style={{ backgroundImage: "url('/concert.png')" }}
  >
    <div
      className="
        px-6 pt-12
        md:px-8 md:pt-0
        text-white
        text-center md:text-left
        w-full max-w-md md:max-w-xs
      "
    >
      <h2 className="text-4xl font-bold mb-4 text-pink-600">
        Welcome back
      </h2>
      <p className="text-sm leading-relaxed mb-6">
        Discover millions of concerts, get alerts about your favorite artists,
        teams, plays and more — plus always-secure, effortless ticketing.
      </p>
      <span className="inline-block w-16 h-1 bg-pink-600 rounded" />
    </div>
  </div>
);
};
