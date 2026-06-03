'use client';

import React from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Clock, Circle } from "lucide-react";
import { BrandedBackground } from "../components/BrandedBackground";

export function CalendarView() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDate, setSelectedDate] = React.useState<number | null>(6);

  const calendarData = [
    { day: 1, hasEvent: true, type: "followup" },
    { day: 2, hasEvent: false, type: "default" },
    { day: 3, hasEvent: false, type: "default" },
    { day: 4, hasEvent: true, type: "deadline" },
    { day: 5, hasEvent: false, type: "default" },
    { day: 6, hasEvent: true, type: "followup" },
    { day: 7, hasEvent: false, type: "default" },
    { day: 8, hasEvent: false, type: "default" },
    { day: 9, hasEvent: false, type: "default" },
    { day: 10, hasEvent: false, type: "default" },
    { day: 11, hasEvent: true, type: "followup" },
    { day: 12, hasEvent: false, type: "default" },
    { day: 13, hasEvent: true, type: "deadline" },
    { day: 14, hasEvent: false, type: "default" },
    { day: 15, hasEvent: false, type: "default" },
    { day: 16, hasEvent: false, type: "default" },
    { day: 17, hasEvent: false, type: "default" },
    { day: 18, hasEvent: false, type: "default" },
    { day: 19, hasEvent: false, type: "default" },
    { day: 20, hasEvent: false, type: "default" },
    { day: 21, hasEvent: false, type: "default" },
    { day: 22, hasEvent: false, type: "default" },
    { day: 23, hasEvent: false, type: "default" },
    { day: 24, hasEvent: false, type: "default" },
    { day: 25, hasEvent: true, type: "followup" },
    { day: 26, hasEvent: false, type: "default" },
    { day: 27, hasEvent: false, type: "default" },
    { day: 28, hasEvent: false, type: "default" },
    { day: 29, hasEvent: false, type: "default" },
    { day: 30, hasEvent: false, type: "default" },
  ];

  const upcomingLoops = [
    {
      title: "Tesla repair quote follow-up",
      time: "10:00 AM",
      date: "Tomorrow",
      status: "Waiting on shop",
      priority: "High" as const,
      tags: ["Car", "Repair"],
      note: "Called on Monday, waiting for estimate",
    },
    {
      title: "Submit daycare documents",
      time: "All day",
      date: "Friday",
      status: "Needs action",
      priority: "Medium" as const,
      tags: ["Baby", "Documents"],
    },
    {
      title: "Check refund status",
      time: "2:00 PM",
      date: "Next week",
      status: "Waiting on response",
      priority: "Low" as const,
      tags: ["Money", "Follow-up"],
    },
  ];

  const getDateStyle = (day: number, type: string, hasEvent?: boolean) => {
    const isSelected = selectedDate === day;

    if (isSelected) {
      return "bg-[#4C9FE8] text-white shadow-md";
    }

    if (hasEvent) {
      switch (type) {
        case "followup":
          return "bg-[#D5E9FA] text-[#21313F]";
        case "deadline":
          return "bg-[#21313F] text-white";
        default:
          return "text-[#21313F]";
      }
    }

    return "text-gray-400 hover:bg-[#EEF2F5]";
  };

  const getEventDot = (type: string, hasEvent?: boolean) => {
    if (!hasEvent) return null;
    const dotColors = {
      followup: "#4C9FE8",
      deadline: "#EF4444",
      default: "#21313F",
    };
    return dotColors[type as keyof typeof dotColors] || null;
  };

  const priorityColors = {
    High: "bg-red-50 text-red-700 border-red-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Low: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      <BrandedBackground variant="extended" />

      <div className="px-5 pt-14 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
            <h1 className="text-white text-2xl font-semibold">Calendar</h1>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-5">
            <button className="w-9 h-9 rounded-xl bg-[#EEF2F5] flex items-center justify-center hover:bg-[#D5E9FA] transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#21313F]" strokeWidth={2.5} />
            </button>
            <h2 className="text-[#21313F] font-semibold">June 2026</h2>
            <button className="w-9 h-9 rounded-xl bg-[#EEF2F5] flex items-center justify-center hover:bg-[#D5E9FA] transition-colors">
              <ChevronRight className="w-5 h-5 text-[#21313F]" strokeWidth={2.5} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-3">
            {weekDays.map((day, idx) => (
              <div key={idx} className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {calendarData.map((item) => {
              const dotColor = getEventDot(item.type, item.hasEvent);
              const isSelected = selectedDate === item.day;

              return (
                <button
                  key={item.day}
                  onClick={() => setSelectedDate(item.day)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all text-sm font-medium ${getDateStyle(
                    item.day,
                    item.type,
                    item.hasEvent
                  )}`}
                >
                  <span>{item.day}</span>
                  {dotColor && !isSelected && (
                    <div className="absolute bottom-1 w-1 h-1 rounded-full" style={{ backgroundColor: dotColor }}></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-[#EEF2F5]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#4C9FE8]"></div>
              <span className="text-xs text-gray-500">Follow-up</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-xs text-gray-500">Deadline</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#21313F]"></div>
              <span className="text-xs text-gray-500">Important</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-[#21313F] font-semibold mb-3">
            {selectedDate ? `Loops for June ${selectedDate}` : "This Week's Follow-Ups"}
          </h2>
        </div>

        <div className="space-y-4">
          {upcomingLoops.map((loop, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="flex flex-col items-center pt-1 w-16 flex-shrink-0">
                <span className="text-xs text-gray-400 font-medium mb-1">{loop.time}</span>
                <div className="w-px h-full bg-[#EEF2F5] mt-2"></div>
              </div>

              <div className="flex-1 bg-white rounded-2xl p-4 border border-[#EEF2F5] shadow-sm hover:shadow-md transition-shadow mb-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D5E9FA] flex items-center justify-center flex-shrink-0">
                    <Circle className="w-5 h-5 text-[#4C9FE8]" fill="#4C9FE8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#21313F] font-semibold text-[15px] mb-1 leading-snug">{loop.title}</h3>
                    <p className="text-[#4C9FE8] text-sm font-medium">{loop.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${priorityColors[loop.priority]}`}>
                    {loop.priority}
                  </span>
                  <span className="text-gray-500 text-xs font-medium">{loop.status}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {loop.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#EEF2F5] text-[#21313F] rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {loop.note && (
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{loop.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
