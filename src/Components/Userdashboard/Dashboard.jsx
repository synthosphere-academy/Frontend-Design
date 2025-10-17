import { useState } from "react";
import {
  Home,
  User,
  ShoppingCart,
  GraduationCap,
  Users,
  DollarSign,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function UserDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "My Profile", icon: <User size={20} /> },
    { name: "Enrolled Courses", icon: <GraduationCap size={20} /> },
    { name: "Order History", icon: <ShoppingCart size={20} /> },
    { name: "Direct Team", icon: <Users size={20} /> },
    { name: "Payout", icon: <DollarSign size={20} /> },
  ];

  const handleLogout = () => {
    sessionStorage.clear();
    alert("Logged out successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white border-r transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className={`font-bold text-xl text-purple-700 ${!isOpen && "hidden"}`}>
            User Panel
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all ${
                active === item.name ? "bg-purple-100 text-purple-700" : ""
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {isOpen && <span>{item.name}</span>}
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut size={20} className="mr-2" />
            {isOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{active}</h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600">
            This is the <strong>{active}</strong> section. You can replace this content
            with your actual dashboard content component.
          </p>
        </div>
      </div>
    </div>
  );
}
