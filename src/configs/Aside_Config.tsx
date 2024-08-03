
import { Admin_Icon, Ads_Icon, Bookmark_Icon, Category_Icon, Menu_Icon, People_Icon, Playlist_Icon, Role_Icon, Sound_Icon, User_Icon } from "@/util/Icons/Icon_Figma";

const AsideConfig = [
  {
    id: 1,
    title: "Dashboard",
    icon: <Menu_Icon />,
    url: "/",
    item: [],
  },
  {
    id: 2,
    title: "Customer",
    icon: <People_Icon />,
    url: "customer",
    item: [
      { title_item: "User", icon_item: <User_Icon />, children_url: "user" },
      { title_item: "Artist", icon_item: <Playlist_Icon />, children_url: "artist" },
      { title_item: "Song", icon_item: <Sound_Icon />, children_url: "song" },
      { title_item: "Playlist", icon_item: <Playlist_Icon />, children_url: "playlist" },
      { title_item: "Album", icon_item: <Playlist_Icon />, children_url: "album" },
      { title_item: "Bill", icon_item: <Playlist_Icon />, children_url: "bill" },
    ],
  },
  {
    id: 3,
    title: "Administrator",
    icon: <Admin_Icon w={25} />,
    url: "administrator",
    item: [
      { title_item: "Employess", icon_item: <User_Icon />, children_url: "employess" },
      { title_item: "Role", icon_item: <Role_Icon w={25} />, children_url: "role" },
      { title_item: "Category", icon_item: <Category_Icon />, children_url: "category" },
      { title_item: "Song", icon_item: <Sound_Icon />, children_url: "song" },
      { title_item: "Playlist", icon_item: <Playlist_Icon />, children_url: "playlist" },
      { title_item: "subscription", icon_item: <Playlist_Icon />, children_url: "subscription" }
    ],
  }, {
    id: 3,
    title: "Partner",
    icon: <Bookmark_Icon />,
    url: "partner",
    item: [
      { title_item: "Ads", icon_item: <Ads_Icon color="#000" />, children_url: "advertisement" },
      { title_item: "Partner", icon_item: <User_Icon color="#000" />, children_url: "partner" },
    ],
  }
];

export { AsideConfig };
export type Aside_Type = typeof AsideConfig;
