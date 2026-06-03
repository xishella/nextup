'use client';

import { ChevronRight, Bell, Grid3x3, Archive, Settings } from "lucide-react";
import { BrandedBackground } from "../components/BrandedBackground";

export function ProfileScreen() {
  const stats = [
    { label: "Open Loops", value: 12, color: "text-[#4C9FE8]" },
    { label: "Closed This Month", value: 18, color: "text-green-600" },
    { label: "Waiting On", value: 8, color: "text-amber-600" },
  ];

  const settingsRows = [
    { icon: Bell, label: "Notifications", value: "Enabled" },
    { icon: Grid3x3, label: "Categories", value: "Manage" },
    { icon: Archive, label: "Archived Loops", value: "24 items" },
    { icon: Settings, label: "App Preferences", value: "" },
  ];

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      <BrandedBackground variant="extended" />

      <div className="px-5 pt-12 relative z-10">
        <h1 className="text-white text-2xl mb-8 font-semibold">Profile</h1>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 relative overflow-hidden border border-white/20">
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border-2 border-white/30">
              <span className="text-white text-2xl font-medium">X</span>
            </div>
            <div className="flex-1">
              <h2 className="text-white text-xl mb-1 font-semibold">Xishel</h2>
              <p className="text-white/80 text-sm">Life admin under control</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-[#21313F]/10 text-center"
            >
              <p className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {settingsRows.map((row, idx) => {
            const Icon = row.icon;
            return (
              <button
                key={idx}
                className="w-full bg-white rounded-2xl p-4 border border-[#21313F]/10 hover:border-[#21313F]/20 transition-colors flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D5E9FA] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#21313F]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#21313F] font-medium text-sm">{row.label}</p>
                  {row.value && (
                    <p className="text-gray-400 text-xs">{row.value}</p>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
