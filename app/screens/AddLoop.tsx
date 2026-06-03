'use client';

import React from "react";
import { ArrowLeft, Upload, ChevronDown } from "lucide-react";

export function AddLoop() {
  const [selectedPriority, setSelectedPriority] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-5 pt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-2xl bg-white border border-[#EEF2F5] flex items-center justify-center hover:border-[#21313F]/20 transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#21313F]" />
            </button>
            <h1 className="text-[#21313F] text-2xl font-semibold">Add New Loop</h1>
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
            <h2 className="text-white text-lg mb-1 font-semibold">Capture the loop before it slips</h2>
            <p className="text-white/60 text-sm">Track what needs your attention and close the loop when done.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-[#21313F] font-semibold mb-4">What are you tracking?</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="e.g., Follow up on car repair"
                className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-4 text-[#21313F] placeholder-gray-400 focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20 transition-all"
              />
              <div className="relative">
                <select className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-4 text-[#21313F] appearance-none focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20">
                  <option>Select category</option>
                  <option>Car</option>
                  <option>Baby</option>
                  <option>Money</option>
                  <option>Health</option>
                  <option>Home</option>
                  <option>Documents</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#21313F] font-semibold mb-4">Timing</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-500 text-xs mb-2">Follow-up date</label>
                <input
                  type="date"
                  className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-3 text-[#21313F] text-sm focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-2">Due date</label>
                <input
                  type="date"
                  className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-3 text-[#21313F] text-sm focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#21313F] font-semibold mb-3">Status</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-500 text-xs mb-2">Priority level</label>
                <div className="grid grid-cols-3 gap-2">
                  {["High", "Medium", "Low"].map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setSelectedPriority(priority)}
                      className={`rounded-xl py-2.5 text-sm font-medium transition-all ${
                        selectedPriority === priority
                          ? priority === "High"
                            ? "bg-red-100 text-red-700 border-2 border-red-300"
                            : priority === "Medium"
                            ? "bg-amber-100 text-amber-700 border-2 border-amber-300"
                            : "bg-blue-100 text-blue-700 border-2 border-blue-300"
                          : "bg-white border border-[#21313F]/10 text-[#21313F] hover:border-[#21313F]/20"
                      }`}
                    >
                      {priority}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs mb-2">Current status</label>
                <div className="relative">
                  <select className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-3 text-[#21313F] text-sm appearance-none focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20">
                    <option>Select status</option>
                    <option>Needs action</option>
                    <option>Waiting on response</option>
                    <option>In progress</option>
                    <option>Blocked</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#21313F] font-semibold mb-4">Details</h3>
            <div className="space-y-3">
              <textarea
                placeholder="Add any relevant details..."
                rows={4}
                className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-4 text-[#21313F] placeholder-gray-400 focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20 resize-none"
              />
              <input
                type="text"
                placeholder="Related contact (optional)"
                className="w-full bg-white border border-[#21313F]/10 rounded-2xl px-4 py-3 text-[#21313F] placeholder-gray-400 focus:outline-none focus:border-[#4C9FE8] focus:ring-2 focus:ring-[#4C9FE8]/20"
              />
            </div>
          </div>

          <div>
            <button className="w-full bg-white border-2 border-dashed border-[#D5E9FA] rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-2 hover:border-[#4C9FE8] hover:bg-[#D5E9FA]/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#D5E9FA] flex items-center justify-center mb-1">
                <Upload className="w-5 h-5 text-[#4C9FE8]" />
              </div>
              <span className="text-[#21313F] text-sm font-medium">Add attachments</span>
              <span className="text-gray-400 text-xs">PDFs, images, or documents</span>
            </button>
          </div>

          <button className="w-full bg-[#4C9FE8] text-white rounded-2xl py-4 font-medium shadow-lg hover:bg-[#3D8ED7] transition-colors">
            Save Loop
          </button>
        </div>
      </div>
    </div>
  );
}
