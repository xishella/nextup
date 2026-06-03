'use client';

import React from "react";
import { ArrowLeft, Filter, Search, Circle } from "lucide-react";
import { BrandedBackground } from "../components/BrandedBackground";

interface LoopCardProps {
  title: string;
  tags: string[];
  status: string;
  priority: "High" | "Medium" | "Low";
  date: string;
  dateLabel: string;
  notes?: string;
  contact?: string;
}

function LoopCard({ title, tags, status, priority, date, dateLabel, notes, contact }: LoopCardProps) {
  const priorityColors = {
    High: "bg-red-50 text-red-700 border-red-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Low: "bg-blue-50 text-blue-700 border-blue-200",
  };

  // First card is featured with Deep Slate
  const isFeatured = title.includes("Tesla");

  if (isFeatured) {
    return (
      <div className="bg-[#21313F] rounded-3xl p-6 shadow-lg relative overflow-hidden border-l-4 border-[#4C9FE8]">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
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
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#4C9FE8" strokeWidth="2" />
                <circle cx="16" cy="16" r="14" fill="none" stroke="#4C9FE8" strokeWidth="2" strokeDasharray="88" strokeDashoffset="22" strokeLinecap="round" transform="rotate(-90 16 16)" />
              </svg>
            </div>
          </div>

          <h3 className="text-white mb-3 text-lg leading-snug font-semibold">{title}</h3>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1.5 bg-[#4C9FE8] text-white rounded-full text-xs font-medium">
              {priority}
            </span>
            <span className="text-white/60 text-xs">{status}</span>
          </div>

          {notes && (
            <p className="text-white/70 text-xs mb-3 line-clamp-2">{notes}</p>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">{dateLabel}</p>
              <p className="text-[#D5E9FA] text-sm font-medium">{date}</p>
            </div>
            {contact && (
              <p className="text-white/70 text-xs">{contact}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Standard cards with variation
  const cardStyles = [
    "bg-white border-[#21313F]/10",
    "bg-[#D5E9FA]/30 border-[#D5E9FA]",
    "bg-white border-[#21313F]/10",
  ];

  const cardIndex = tags[0] === "Baby" ? 1 : tags[0] === "Money" ? 2 : 0;
  const cardStyle = cardStyles[cardIndex];

  return (
    <div className={`rounded-3xl p-5 shadow-sm border relative ${cardStyle}`}>
      <div className="absolute top-5 right-5">
        <div className="w-7 h-7 rounded-full border-2 border-[#EEF2F5] flex items-center justify-center bg-white">
          <Circle className="w-3 h-3 text-[#4C9FE8]" fill="#4C9FE8" />
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3 pr-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-[#EEF2F5] text-[#21313F] rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-[#21313F] mb-3 pr-6 font-semibold">{title}</h3>

      <div className="flex items-center gap-2 mb-3">
        <span className={`px-2.5 py-1 rounded-full text-xs border ${priorityColors[priority]}`}>
          {priority}
        </span>
        <span className="text-gray-500 text-xs">{status}</span>
      </div>

      {notes && (
        <p className="text-gray-500 text-xs mb-3 line-clamp-1">{notes}</p>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-[#EEF2F5]">
        <span className="text-gray-400 text-xs">{dateLabel}</span>
        <span className="text-[#4C9FE8] text-sm font-medium">{date}</span>
      </div>

      {contact && (
        <p className="text-[#21313F] text-xs mt-2 opacity-60">{contact}</p>
      )}
    </div>
  );
}

export function OpenLoopsList() {
  const loops = [
    {
      title: "Tesla repair quote follow-up",
      tags: ["Car", "Repair"],
      status: "Waiting on shop",
      priority: "High" as const,
      date: "Tomorrow",
      dateLabel: "Follow-up",
      notes: "Called on Monday, waiting for estimate",
      contact: "Tesla Service Center",
    },
    {
      title: "Submit daycare documents",
      tags: ["Baby", "Documents"],
      status: "Needs action",
      priority: "Medium" as const,
      date: "Friday",
      dateLabel: "Due",
      notes: "Birth certificate, immunization records",
    },
    {
      title: "Check refund status",
      tags: ["Money", "Follow-up"],
      status: "Waiting on response",
      priority: "Low" as const,
      date: "Next week",
      dateLabel: "Follow-up",
      contact: "Amazon Support",
    },
    {
      title: "Schedule annual checkup",
      tags: ["Health", "Appointments"],
      status: "Needs action",
      priority: "Medium" as const,
      date: "This month",
      dateLabel: "Due",
      notes: "Find available slots in June",
    },
    {
      title: "Renew car insurance",
      tags: ["Car", "Documents"],
      status: "Waiting on quote",
      priority: "High" as const,
      date: "June 15",
      dateLabel: "Due",
      contact: "State Farm",
    },
  ];

  const filters = ["All", "Needs Action", "Waiting On", "Due Soon", "Closed"];
  const [activeFilter, setActiveFilter] = React.useState("All");

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      <BrandedBackground />

      <div className="px-5 pt-12 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-white text-2xl font-semibold">Open Loops</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>
            <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Filter className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-white/70 text-sm mb-3">{loops.length} active loops</p>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? "bg-white text-[#21313F] shadow-sm"
                    : "bg-white/10 backdrop-blur-sm text-white/90 border border-white/20 hover:bg-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 mt-6">
          {loops.map((loop, idx) => (
            <LoopCard key={idx} {...loop} />
          ))}
        </div>
      </div>
    </div>
  );
}
