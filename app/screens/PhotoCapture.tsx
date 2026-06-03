'use client';

import { ArrowLeft, Camera, Image as ImageIcon } from "lucide-react";

interface PhotoCaptureProps {
  onBack: () => void;
}

export function PhotoCapture({ onBack }: PhotoCaptureProps) {
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-5 pt-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-11 h-11 rounded-2xl bg-white border border-[#EEF2F5] flex items-center justify-center hover:border-[#21313F]/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#21313F]" />
            </button>
            <h1 className="text-[#21313F] text-2xl font-semibold">Snap a Photo</h1>
          </div>
        </div>

        <div className="bg-[#21313F] rounded-3xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative">
            <h2 className="text-white text-lg mb-1 font-semibold">Scan a document or screenshot</h2>
            <p className="text-white/80 text-sm">NextUp will suggest the title, due date, category, and next follow-up.</p>
          </div>
        </div>

        <div className="bg-[#EEF2F5] rounded-3xl aspect-[4/3] flex flex-col items-center justify-center mb-6 border-2 border-dashed border-[#D5E9FA]">
          <div className="w-20 h-20 rounded-full bg-[#D5E9FA] flex items-center justify-center mb-4">
            <Camera className="w-10 h-10 text-[#4C9FE8]" />
          </div>
          <h3 className="text-[#21313F] font-semibold mb-2">Camera preview</h3>
          <p className="text-gray-500 text-sm text-center px-8">
            Capture repair quotes, forms, receipts, appointment cards, or documents
          </p>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-[#4C9FE8] text-white rounded-2xl py-4 font-semibold shadow-lg hover:bg-[#3D8ED7] transition-colors flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" />
            Take Photo
          </button>
          <button className="w-full bg-white border border-[#21313F]/10 text-[#21313F] rounded-2xl py-4 font-semibold hover:border-[#21313F]/20 transition-colors flex items-center justify-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Choose from Library
          </button>
        </div>
      </div>
    </div>
  );
}
