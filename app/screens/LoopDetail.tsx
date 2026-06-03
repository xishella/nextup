'use client';

import { ArrowLeft, Share2, Paperclip, Calendar, User, Clock } from "lucide-react";

export function LoopDetail() {
  const attachments = [
    { name: "Quote_v1.pdf", size: "245 KB" },
    { name: "Receipt.jpg", size: "1.2 MB" },
    { name: "Invoice.pdf", size: "180 KB" },
  ];

  const timeline = [
    { date: "Jun 2, 2026", action: "Loop created", user: "You" },
    { date: "Jun 2, 2026", action: "Called Tesla Service", user: "You" },
    { date: "Jun 3, 2026", action: "Waiting on quote", user: "Tesla Service" },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-5 pt-12">
        <div className="flex items-center justify-between mb-6">
          <button className="w-11 h-11 rounded-2xl bg-white border border-[#EEF2F5] flex items-center justify-center hover:border-[#21313F]/20 transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#21313F]" />
          </button>
          <button className="w-11 h-11 rounded-2xl bg-white border border-[#EEF2F5] flex items-center justify-center hover:border-[#21313F]/20 transition-colors">
            <Share2 className="w-5 h-5 text-[#21313F]" />
          </button>
        </div>

        <div className="bg-[#21313F] rounded-3xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1.5 bg-white/10 text-[#D5E9FA] rounded-full text-xs border border-white/10">
                Car
              </span>
              <span className="px-3 py-1.5 bg-white/10 text-[#D5E9FA] rounded-full text-xs border border-white/10">
                Repair
              </span>
              <span className="px-3 py-1.5 bg-[#4C9FE8] text-white rounded-full text-xs font-medium">
                High
              </span>
            </div>
            <h1 className="text-white text-2xl mb-3 leading-snug font-semibold">Tesla repair quote follow-up</h1>
            <div className="inline-flex px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/10">
              Waiting on shop
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 mb-4 border border-[#21313F]/10 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#4C9FE8]" />
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-0.5">Next Follow-up</p>
                <p className="text-[#21313F] font-medium">Tomorrow, Jun 4</p>
              </div>
            </div>

            <div className="h-px bg-white"></div>

            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-[#4C9FE8]" />
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-0.5">Related Contact</p>
                <p className="text-[#21313F] font-medium">Tesla Service Center</p>
                <p className="text-xs text-gray-500">(555) 123-4567</p>
              </div>
            </div>

            <div className="h-px bg-white"></div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#4C9FE8]" />
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-0.5">Created</p>
                <p className="text-[#21313F] font-medium">Jun 2, 2026</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-[#21313F] mb-3 font-semibold">Notes</h3>
          <div className="bg-[#D5E9FA]/30 rounded-2xl p-4 border border-[#D5E9FA]">
            <p className="text-[#21313F] text-sm leading-relaxed">
              Called on Monday after minor collision. Need estimate for front bumper
              repair and paint work. Shop said they'd have quote ready by end of week.
              Follow up if no response by Thursday.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#21313F] font-semibold">Attachments</h3>
            <button className="text-[#4C9FE8] text-sm font-medium hover:underline">+ Add</button>
          </div>
          <div className="space-y-2">
            {attachments.map((attachment, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 flex items-center gap-3 border border-[#21313F]/10 hover:border-[#21313F]/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                  <Paperclip className="w-5 h-5 text-[#4C9FE8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#21313F] text-sm font-medium truncate">
                    {attachment.name}
                  </p>
                  <p className="text-gray-500 text-xs">{attachment.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[#21313F] mb-3 font-semibold">Activity Timeline</h3>
          <div className="bg-white rounded-2xl p-5 border border-[#21313F]/10">
            <div className="space-y-3">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4C9FE8] ring-4 ring-[#D5E9FA]/30"></div>
                    {idx < timeline.length - 1 && (
                      <div className="w-px h-full bg-[#EEF2F5] mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-[#21313F] text-sm font-medium mb-0.5">{item.action}</p>
                    <p className="text-gray-400 text-xs">{item.date} • {item.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-[#4C9FE8] text-white rounded-2xl py-4 font-medium shadow-sm hover:bg-[#3D8ED7] transition-colors">
            Mark Followed Up
          </button>
          <button className="w-full bg-white border border-[#21313F]/10 text-[#21313F] rounded-2xl py-4 font-medium hover:border-[#21313F]/20 transition-colors">
            Add Update
          </button>
        </div>
      </div>
    </div>
  );
}
