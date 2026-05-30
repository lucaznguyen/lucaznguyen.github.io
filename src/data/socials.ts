import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  Microscope,
  Network,
} from "lucide-react";

export const socials = [
  {
    label: "Email",
    href: "mailto:thinh.nth@vinuni.edu.vn",
    value: "thinh.nth@vinuni.edu.vn",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/lucaznguyen",
    value: "lucaznguyen",
    icon: Code2,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=sb6Qr-kAAAAJ&hl=en&authuser=1",
    value: "Scholar profile",
    icon: GraduationCap,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucaznguyen/",
    value: "lucaznguyen",
    icon: BriefcaseBusiness,
  },
  {
    label: "SAIL Lab",
    href: "https://sail-research.com/",
    value: "Security and Artificial Intelligence Lab",
    icon: Microscope,
  },
  {
    label: "VISHC",
    href: "https://smarthealth.vinuni.edu.vn/nguyen-tran-huu-thinh/",
    value: "VinUni-Illinois Smart Health Center",
    icon: Network,
  },
] as const;
