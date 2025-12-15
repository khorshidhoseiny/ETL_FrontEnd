import {
  MdOutlineDataThresholding,
  MdStorage,
  MdAccountTree,
  MdMonitorHeart,
  MdInsights,
  MdAutoGraph,
  MdPsychology,
  MdDashboard,
  MdSettings,
  MdSchedule,
  MdNotificationsActive,
  MdLockOutline,
  MdRuleFolder,
} from "react-icons/md";

export const menuItems = [
  {
    id: "data-extraction",
    title: "استخراج داده",
    icon: MdOutlineDataThresholding,
    submenu: null,
  },
  {
    id: "data-transformation",
    title: "تبدیل و پردازش داده",
    icon: MdSettings,
    submenu: null,
  },
  {
    id: "data-storage",
    title: "بانک داده",
    icon: MdStorage,
    submenu: null,
  },
  {
    id: "pipelines",
    title: "پایپ‌لاین‌ها",
    icon: MdAccountTree,
    submenu: null,
  },
  {
    id: "monitoring",
    title: "مانیتورینگ",
    icon: MdMonitorHeart,
    submenu: null,
  },
  {
    id: "visualization",
    title: "بصری‌سازی",
    icon: MdAutoGraph,
    submenu: null,
  },
  {
    id: "machine-learning",
    title: "یادگیری ماشین",
    icon: MdPsychology,
    submenu: null,
  },
  {
    id: "business-intelligence",
    title: "هوش تجاری",
    icon: MdInsights,
    submenu: null,
  },
  {
    id: "general",
    title: "عمومی",
    icon: MdDashboard,
    submenu: [
      {
        id: "schedules",
        title: "زمان‌بندی‌ها",
        icon: MdSchedule,
      },
      {
        id: "notifications",
        title: "اعلان‌ها",
        icon: MdNotificationsActive,
      },
      {
        id: "access-control",
        title: "دسترسی‌ها",
        icon: MdLockOutline,
      },
      {
        id: "data-governance",
        title: "حاکمیت داده",
        icon: MdRuleFolder,
      },
    ],
  },
];
