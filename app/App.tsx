"use client";

import { useState } from "react";
import { Home, ListChecks, CalendarDays, Plus, User } from "lucide-react";

import { HomeDashboard } from "./screens/HomeDashboard";
import { OpenLoopsList } from "./screens/OpenLoopsList";
import { CalendarView } from "./screens/CalendarView";
import { AddLoop } from "./screens/AddLoop";
import { ProfileScreen } from "./screens/ProfileScreen";

import { BottomNav } from "./components/BottomNav";
import { AddOptionsModal } from "./components/AddOptionsModal";

type Tab = "home" | "loops" | "calendar" | "add" | "profile";

const tabs = [
  {
    id: "home" as Tab,
    label: "Home",
    icon: Home,
  },
  {
    id: "loops" as Tab,
    label: "Loops",
    icon: ListChecks,
  },
  {
    id: "calendar" as Tab,
    label: "Calendar",
    icon: CalendarDays,
  },
  {
    id: "add" as Tab,
    label: "Add",
    icon: Plus,
  },
  {
    id: "profile" as Tab,
    label: "Profile",
    icon: User,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showAddOptions, setShowAddOptions] = useState(false);

  const handleTabChange = (tab: Tab) => {
    if (tab === "add") {
      setShowAddOptions(true);
      setActiveTab("add");
      return;
    }

    setActiveTab(tab);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeDashboard />;
      case "loops":
        return <OpenLoopsList />;
      case "calendar":
        return <CalendarView />;
      case "add":
        return <AddLoop />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <main className="min-h-screen bg-[#EEF2F5]">
      <div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden bg-white shadow-xl">
        <div className="min-h-screen overflow-y-auto pb-[150px]">
          {renderScreen()}
        </div>

        <BottomNav
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {showAddOptions && (
          <AddOptionsModal
            onClose={() => setShowAddOptions(false)}
            onManualAdd={() => {
              setShowAddOptions(false);
              setActiveTab("add");
            }}
          />
        )}
      </div>
    </main>
  );
}