/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';

interface VoucherModalProps {
  open: boolean;
  onClose: () => void;
  voucherList: any[];
  onSelect: (voucher: any) => void;
}

const VoucherModal: React.FC<VoucherModalProps> = ({ open, onClose, voucherList, onSelect }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center z-50">
      <div className="bg-white w-full md:w-[400px] max-h-[80vh] overflow-y-auto p-6 rounded-t-2xl md:rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="font-bold text-lg text-center mb-4">Pilih Voucher</h2>

        {voucherList.length > 0 ? (
          voucherList.map((voucher) => (
            <div
              key={voucher.id}
              className="border p-4 rounded-xl mb-4 flex justify-between items-center hover:shadow"
            >
              <div>
                <p className="font-semibold">{voucher.code}</p>
                <p className="text-sm text-gray-600">{voucher.discountPercent}% OFF</p>
              </div>
              <button
                onClick={() => {
                  onSelect(voucher);
                  onClose();
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded text-sm"
              >
                Gunakan
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Tidak ada voucher tersedia</p>
        )}

        <button
          onClick={() => {
            onSelect(null);
            onClose();
          }}
          className="mt-6 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded text-sm"
        >
          Tidak Pakai Voucher
        </button>
      </div>
    </div>
  );
};

export default VoucherModal;
