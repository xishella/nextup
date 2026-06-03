'use client';

import { Search, Bell, ArrowRight, Clock, AlertCircle, CheckCircle2, Circle } from "lucide-react";
import { BrandedBackground } from "../components/BrandedBackground";

interface LoopCardProps {
  title: string;
  category: string;
  tags: string[];
  status: string;
  priority: "High" | "Medium" | "Low";
  date: string;
  featured?: boolean;
  progress?: number;
}

function LoopCard({ title, category, tags, status, priority, date, featured, progress = 60 }: LoopCardProps) {
  if (featured) {
    return (
      <div className="bg-[#21313F] rounded-3xl p-5 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative">
          <div className="flex items-start justify-between mb-3">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/10 text-[#D5E9FA] rounded-full text-xs border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full border-2 border-[#4C9FE8] flex items-center justify-center">
                <span className="text-[10px] text-[#4C9FE8] font-medium">{progress}%</span>
              </div>
            </div>
          </div>

          <h3 className="text-white mb-3 text-lg font-semibold">{title}</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-[#4C9FE8] text-white rounded-full text-xs font-medium">
                {priority}
              </span>
              <span className="text-white/60 text-xs">{status}</span>
            </div>
            <span className="text-[#D5E9FA] text-sm font-medium">{date}</span>
          </div>
        </div>
      </div>
    );
  }

  const priorityColors = {
    High: "bg-red-50 text-red-700 border-red-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Low: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#21313F]/10 hover:border-[#21313F]/20 transition-colors relative">
      <div className="absolute top-4 right-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#EEF2F5] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#4C9FE8]"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2.5 pr-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-[#EEF2F5] text-[#21313F] rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <h4 className="text-[#21313F] mb-3 pr-4 font-semibold">{title}</h4>

      <div className="flex items-center justify-between text-xs">
        <span className={`px-2.5 py-1 rounded-full border ${priorityColors[priority]}`}>
          {priority}
        </span>
        <span className="text-[#4C9FE8] font-medium">{date}</span>
      </div>
    </div>
  );
}

export function HomeDashboard() {
  const todayFollowUps = [
    {
      title: "Tesla repair quote follow-up",
      category: "Car",
      tags: ["Car", "Repair"],
      status: "Waiting on shop",
      priority: "High" as const,
      date: "Tomorrow",
      featured: true,
      progress: 65,
    },
    {
      title: "Submit daycare documents",
      category: "Baby",
      tags: ["Baby", "Documents"],
      status: "Needs action",
      priority: "Medium" as const,
      date: "Friday",
    },
    {
      title: "Check refund status",
      category: "Money",
      tags: ["Money", "Follow-up"],
      status: "Waiting on response",
      priority: "Low" as const,
      date: "Next week",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      <BrandedBackground variant="extended" />

      <div className="px-5 pt-12 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/60 text-sm mb-1 font-medium">Good morning,</p>
            <h1 className="text-white text-3xl font-semibold">Xishel</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>
            <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center relative hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#4C9FE8] rounded-full ring-2 ring-[#21313F]"></span>
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 relative overflow-hidden shadow-lg border border-white/20">
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 20 50 Q 35 20, 50 50 T 80 50" fill="none" stroke="white" strokeWidth="1" />
              <path d="M 15 60 Q 30 30, 45 60 T 75 60" fill="none" stroke="white" strokeWidth="1" />
              <path d="M 25 40 Q 40 10, 55 40 T 85 40" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <div className="relative">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="text-white text-2xl mb-1 font-bold">3</h2>
                <p className="text-white/90 text-sm font-medium">loops need attention today</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#4C9FE8]/30 backdrop-blur-sm flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="col-span-1 bg-[#D5E9FA] rounded-2xl p-4 border border-[#D5E9FA]">
            <div className="flex items-center gap-2 mb-2">
              <Circle className="w-4 h-4 text-[#4C9FE8]" strokeWidth={2} />
              <p className="text-2xl font-bold text-[#21313F]">12</p>
            </div>
            <p className="text-xs text-[#21313F]/70 font-medium">Open Loops</p>
          </div>

          <div className="col-span-1 bg-white rounded-2xl p-4 border border-[#21313F]/10">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#21313F]" strokeWidth={2} />
              <p className="text-2xl font-bold text-[#21313F]">5</p>
            </div>
            <p className="text-xs text-gray-500 font-medium">Due This Week</p>
          </div>

          <div className="col-span-1 bg-white rounded-2xl p-4 border border-[#21313F]/10">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" strokeWidth={2} />
              <p className="text-2xl font-bold text-[#21313F]">3</p>
            </div>
            <p className="text-xs text-gray-500 font-medium">Closed</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#21313F] text-lg font-semibold">Today's Follow-Ups</h3>
          <button className="text-[#4C9FE8] text-sm flex items-center gap-1 font-semibold hover:gap-2 transition-all">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {todayFollowUps.map((loop, idx) => (
            <LoopCard key={idx} {...loop} />
          ))}
        </div>
      </div>
    </div>
  );
}
