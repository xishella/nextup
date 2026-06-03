"use client";

import { Camera, Edit3, Mail, X } from "lucide-react";

type AddOptionsModalProps = {
  onClose: () => void;
  onManualAdd: () => void;
};

export function AddOptionsModal({
  onClose,
  onManualAdd,
}: AddOptionsModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#21313F]/40 backdrop-blur-sm">
      <div className="w-full max-w-[430px] rounded-t-[32px] bg-white px-6 pb-8 pt-5 shadow-[0_-20px_60px_rgba(33,49,63,0.25)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#4C9FE8]">
              Add a loop
            </p>
            <h2 className="mt-1 text-2xl font-bold text-[#21313F]">
              How do you want to start?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2F5] text-[#21313F]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-3xl bg-[#D5E9FA] p-4 text-left"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#4C9FE8]">
              <Camera size={24} />
            </div>

            <div>
              <h3 className="font-bold text-[#21313F]">
                Capture from camera
              </h3>
              <p className="text-sm text-[#667085]">
                Snap a quote, document, receipt, or note.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={onManualAdd}
            className="flex w-full items-center gap-4 rounded-3xl border border-[#E5EAF0] bg-white p-4 text-left shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2F5] text-[#21313F]">
              <Edit3 size={22} />
            </div>

            <div>
              <h3 className="font-bold text-[#21313F]">
                Add manually
              </h3>
              <p className="text-sm text-[#667085]">
                Type in the details yourself.
              </p>
            </div>
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-3xl border border-[#E5EAF0] bg-white p-4 text-left shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2F5] text-[#21313F]">
              <Mail size={22} />
            </div>

            <div>
              <h3 className="font-bold text-[#21313F]">
                Import from email or calendar
              </h3>
              <p className="text-sm text-[#667085]">
                Pull in details from another source.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOptionsModal;