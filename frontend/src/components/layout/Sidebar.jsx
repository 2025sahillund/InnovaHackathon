import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Route,
  Lightbulb,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Exams", icon: FileText },
  { title: "Interview", icon: MessageSquare },
  { title: "Roadmap", icon: Route },
  { title: "Recommendations", icon: Lightbulb },
  { title: "Analytics", icon: BarChart3 },
  { title: "Profile", icon: User },
  { title: "Settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 h-screen sticky top-0">

      <div className="px-8 py-8">

        <h1 className="text-2xl font-bold text-white">
          PrepPilot AI
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Personalized Study Coach
        </p>

      </div>

      <nav className="px-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="
                w-full
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                text-slate-300
                hover:bg-slate-800
                hover:text-white
                transition
                duration-300
                mb-2
              "
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </button>
          );
        })}

      </nav>

    </aside>
  );
};

export default Sidebar;