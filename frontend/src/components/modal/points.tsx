/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';

interface PointsModalProps {
  open: boolean;
  onClose: () => void;
  pointList: any[];
  onSelect: (point: any) => void;
}

const PointsModal: React.FC<PointsModalProps> = ({ open, onClose, pointList, onSelect }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center z-50">
      <div className="bg-white w-full md:w-[400px] max-h-[80vh] overflow-y-auto p-6 rounded-t-2xl md:rounded-xl shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="text-lg font-bold text-center mb-4">Pilih Points</h2>

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
      </div>
    </div>
  );
};

export default PointsModal;
