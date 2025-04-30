// components/VoucherModal.tsx
'use client';

import { Dialog } from '@headlessui/react';

interface VoucherModalProps {
  open: boolean;
  onClose: () => void;
  voucherList: any[];
  onSelect: (voucher: any) => void;
}

export default function VoucherModal({ open, onClose, voucherList, onSelect }: VoucherModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-end md:items-center justify-center">
        <Dialog.Panel className="bg-white w-full md:w-[400px] max-h-[80vh] overflow-y-auto p-6 rounded-t-2xl md:rounded-lg shadow-lg">
          <Dialog.Title className="font-bold text-lg text-center mb-4">Pilih Voucher</Dialog.Title>

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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
