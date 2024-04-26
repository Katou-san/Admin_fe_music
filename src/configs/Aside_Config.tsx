import {
  ChartIcon,
  CloseIcon,
  SlidersIcon,
  UserIcon,
  PiedIcon,
} from "@/util/Icons/Icon";

const AsideConfig = [
  {
    id: 1,
    title: "Dashboard",
    icon: <ChartIcon />,
    url: "home",
    item: [],
  },
  {
    id: 2,
    title: "Manage",
    icon: <PiedIcon />,
    url: "manage",
    item: [
      { title_item: "user", icon_item: <UserIcon />, children_url: "user" },
      { title_item: "Song", icon_item: <UserIcon />, children_url: "song" },
      { title_item: "Playlist", icon_item: <UserIcon />, children_url: "playlist" },
    ],
  },
  {
    id: 3,
    title: "Employees",
    icon: <PiedIcon />,
    url: "manage",
    item: [
      { title_item: "user", icon_item: <UserIcon />, children_url: "user" },
      { title_item: "Song", icon_item: <UserIcon />, children_url: "song" },
      { title_item: "Playlist", icon_item: <UserIcon />, children_url: "playlist" },
    ],
  },
];

export { AsideConfig };
export type Aside_Type = typeof AsideConfig;
