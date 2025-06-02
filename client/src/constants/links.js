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

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];
