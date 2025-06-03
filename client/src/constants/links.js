import { LayoutDashboard, Map, MapPlus, UsersRound } from "lucide-react";

export const sidebarIcon = [
  {
    id: 1,
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    id: 2,
    icon: Map,
    label: "All Trips",
    href: "/admin/trips",
  },
  {
    id: 3,
    icon: UsersRound,
    label: "All Users",
    href: "/admin/all-users",
  },
  {
    id: 4,
    icon: MapPlus,
    label: "Generate Trips",
    href: "/admin/create-trip",
  },
];

export const userLinks = [
  {
    id: 1,
    label: "Home",
    href: "/home",
  },
  {
    id: 2,
    label: "Travels",
    href: "/travels",
  },
  {
    id: 3,
    label: "About Us",
    href: "/about",
  },
  {
    id: 4,
    label: "Contact",
    href: "/contact",
  },
];

