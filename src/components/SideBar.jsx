import SideBarLinks from "./SideBarLinks"
import Button from "./Button"
const SideBar = () => {
  return (
    <aside className="max-w-[230px] h-[600px] bg-slate-50/30 p-5 pt-7 rounded-xl flex  flex-col justify-between transition-all">
      {/* logo */}
      <a
        href="#"
        className="text-lg font-bold text-slate-700 flex items-center"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          className="mr-0 md:mr-2"
        >
          <rect
            x="0.562241"
            y="7.16907"
            width="7.92927"
            height="1.71758"
            rx="0.858788"
            transform="rotate(-45 0.562241 7.16907)"
            fill="#350861"
          />
          <circle cx="2" cy="7" r="2" fill="#350861" />
          <circle cx="7" cy="2" r="2" fill="#350861" />
          <rect
            x="6.56224"
            y="13.1691"
            width="7.92927"
            height="1.71758"
            rx="0.858788"
            transform="rotate(-45 6.56224 13.1691)"
            fill="#350861"
          />
          <circle cx="8" cy="13" r="2" fill="#350861" />
          <circle cx="13" cy="8" r="2" fill="#350861" />
          <circle cx="7" cy="8" r="2" fill="#350861" />
          <rect
            x="1"
            y="12.6068"
            width="14.2919"
            height="1.71758"
            rx="0.858788"
            transform="rotate(-45 1 12.6068)"
            fill="#350861"
          />
          <circle cx="2" cy="13" r="2" fill="#350861" />
          <circle cx="12" cy="3" r="2" fill="#350861" />
        </svg>
        <span className="hidden md:flex">logip</span>
      </a>
      {/* primary navigation list */}
      <SideBarLinks type="main" />
      {/* membership plan */}
      <div className="text-center bg-gradient-to-b from-white to-transparent rounded-lg py-4 px-4 hidden md:block">
        <h1 className="mb-2 font-bold text-slate-600">Upgrade to Pro 🔥</h1>
        <p className="text-xs text-slate-500 mb-4">
          Get 1 month free and unlock all pro features
        </p>
        <Button {...{ label: "upgrade" }}></Button>
      </div>
      {/* secondary navigation list */}
      <SideBarLinks type="secondary" />
    </aside>
  )
}

export default SideBar
