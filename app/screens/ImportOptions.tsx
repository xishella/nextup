'use client';

import { ArrowLeft, Mail, Calendar, FileText } from "lucide-react";

interface ImportOptionsProps {
  onBack: () => void;
}

export function ImportOptions({ onBack }: ImportOptionsProps) {
  const importSources = [
    {
      icon: Mail,
      title: "Email",
      description: "Import from email threads and confirmations",
      iconBg: "bg-[#D5E9FA]",
      iconColor: "text-[#4C9FE8]",
    },
    {
      icon: Calendar,
      title: "Calendar",
      description: "Bring in appointments and scheduled events",
      iconBg: "bg-[#D5E9FA]",
      iconColor: "text-[#21313F]",
    },
    {
      icon: FileText,
      title: "Files",
      description: "Upload documents, PDFs, and attachments",
      iconBg: "bg-[#D5E9FA]",
      iconColor: "text-[#4C9FE8]",
    },
  ];

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
            <h1 className="text-[#21313F] text-2xl font-semibold">Import</h1>
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
            <h2 className="text-white text-lg mb-1 font-semibold">Choose an import source</h2>
            <p className="text-white/80 text-sm">Connect to bring in your appointments, threads, and documents.</p>
          </div>
        </div>

        <div className="space-y-3">
          {importSources.map((source, idx) => {
            const Icon = source.icon;
            return (
              <button
                key={idx}
                className="w-full bg-white border border-[#21313F]/10 rounded-2xl p-5 hover:border-[#4C9FE8] hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${source.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-6 h-6 ${source.iconColor}`} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#21313F] font-semibold mb-1">{source.title}</h3>
                    <p className="text-gray-600 text-sm">{source.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
