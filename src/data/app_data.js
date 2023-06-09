import meets from "../assets/icons/meets.svg"
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

const projects_onboarding = [
  {
    id: "p-1",
    icon: "uil uil-clock",
    time: "11:00 - 12:30",
  },
  {
    id: "p-2",
    icon: "uil uil-schedule",
    time: "Monday, 20 February",
  },
]

const attendees = [
  {
    id: "a-1",
    img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
    left: 0,
    z: 0,
  },
  {
    id: "a-2",
    img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600",
    left: 4,
    z: 10,
  },
  {
    id: "a-3",
    img: "https://images.pexels.com/photos/2901191/pexels-photo-2901191.jpeg?auto=compress&cs=tinysrgb&w=600",
    left: 8,
    z: 20,
  },
  {
    img: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=600",
    left: 12,
    z: 30,
  },
  {
    img: "https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=600",
    left: 16,
    z: 40,
  },
]

const messages = [
  {
    id: "text_one",
    isMine: true,
    text: "Hi Next week we'll start a new project, I'll tell you all the details later",
    time: "9:32",
  },
  {
    id: "text_four",
    isMine: false,
    isVoice: true,
    text: "00:35",
    time: "9:32",
  },
  {
    id: "text_two",
    isMine: true,
    text: "Here is the link to tommorow's meeting, check it please",
    time: "9:33",
  },
  {
    id: "text_three",
    isMine: true,
    text: "Project onboarding",
    isLink: true,
    link: "meet.google.com/project",
    linkIcon: meets,
    time: "9:33",
  },
]

export {
  navigation_links,
  projects_onboarding,
  messages,
  attendees,
  team_members,
}
