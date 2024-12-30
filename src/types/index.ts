import { LucideIcon } from "lucide-react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  institution: string;
  preferences: {
    subjects: string[];
    languages: string[];
  };
  progress: {
    savedNotes: number;
    completedTopics: number;
  };
  profilePicture?: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  subItems?: Array<{
    title: string;
    href: string;
  }>;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
}

export interface UserGroup {
  id: string;
  name: string;
  description: string;
  users: string[];
  roles: string[];
}
