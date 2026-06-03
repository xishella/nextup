"use client";

import type { LucideIcon } from "lucide-react";

type TabItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type BottomNavProps = {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tab: any) => void;
};

export function BottomNav({
  tabs,
  activeTab,
  onTabChange,
}: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 border-t border-[#D9E0E6] bg-white/95 px-5 pb-6 pt-3 shadow-[0_-12px_32px_rgba(33,49,63,0.12)] backdrop-blur">
      <div className="grid grid-cols-5 items-end gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isAdd = tab.id === "add";

          if (isAdd) {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="mb-1 flex h-[72px] w-[72px] -translate-y-6 items-center justify-center rounded-full bg-[#21313F] text-white shadow-[0_18px_36px_rgba(33,49,63,0.28)] ring-4 ring-[#D5E9FA]/60">
                  <Icon size={36} strokeWidth={2.4} />
                </div>

                <span className="mt-[-20px] text-[13px] font-bold leading-none text-[#21313F]">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 transition"
            >
              <Icon
                size={28}
                strokeWidth={isActive ? 2.6 : 2.2}
                className={isActive ? "text-[#21313F]" : "text-[#98A2B3]"}
              />

              <span
                className={`text-[13px] font-bold leading-none ${
                  isActive ? "text-[#21313F]" : "text-[#98A2B3]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;