// components/PointsModal.tsx
'use client';

import { Dialog } from '@headlessui/react';

interface PointsModalProps {
  open: boolean;
  onClose: () => void;
  pointList: any[];
  onSelect: (point: any) => void;
}

export default function PointsModal({ open, onClose, pointList, onSelect }: PointsModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-end md:items-center justify-center">
        <Dialog.Panel className="bg-white w-full md:w-[400px] max-h-[80vh] overflow-y-auto p-6 rounded-t-2xl md:rounded-lg shadow-lg">
          <Dialog.Title className="font-bold text-lg text-center mb-4">Pilih Points</Dialog.Title>

          {pointList.length > 0 ? (
            pointList.map((point) => (
              <div
                key={point.id}
                className="border p-4 rounded-xl mb-4 flex justify-between items-center hover:shadow"
              >
                <div>
                  <p className="font-semibold">{point.description || "Point"}</p>
                  <p className="text-sm text-gray-600">Rp {point.amount.toLocaleString('id-ID')}</p>
                </div>
                <button
                  onClick={() => {
                    onSelect(point);
                    onClose();
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
                >
                  Gunakan
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Tidak ada points tersedia</p>
          )}

          <button
            onClick={() => {
              onSelect(null);
              onClose();
            }}
            className="mt-6 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded text-sm"
          >
            Tidak Pakai Points
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
