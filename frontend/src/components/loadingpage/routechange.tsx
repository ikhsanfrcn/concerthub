'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import NarutoLoadingPage from './loading';


export default function RouteChangeHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Mulai loading saat path berubah

    const timer = setTimeout(() => {
      setLoading(false); // Stop loading setelah 3 detik
    }, 3000);

    return () => clearTimeout(timer); // Bersihkan timer kalau ada perubahan
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <NarutoLoadingPage />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}
