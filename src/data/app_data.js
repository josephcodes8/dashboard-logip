const navigation_links = {
  main: [
    { id: 1, icon: "uil uil-estate", name: "home", isActive: true },
    { id: 2, icon: "uil uil-apps", name: "projects", hasChildren: true },
    {
      id: 3,
      icon: "uil uil-clipboard-notes",
      name: "tasks",
      hasChildren: true,
    },
    { id: 4, icon: "uil uil-sitemap", name: "team" },
    { id: 5, icon: "uil uil-setting", name: "settings" },
  ],
  secondary: [
    { id: 6, icon: "uil uil-info", name: "Help & information" },
    { id: 7, icon: "uil uil-signout", name: "Logout" },
  ],
}

const team_members = [
  {
    id: "billy_parker",
    img: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Billy Parker",
    position: "Project Manager",
  },
  {
    id: "nancy_salmon",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Nancy Salmon",
    position: "Sales Manager",
  },
  {
    id: "stella_maxwell",
    img: "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Stella Maxwell ",
    position: "UI / UX designer",
  },
]

export { navigation_links, team_members }
