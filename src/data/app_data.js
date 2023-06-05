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

export { navigation_links }
