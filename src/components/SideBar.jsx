import SideBarLinks from "./SideBarLinks"
import Button from "./Button"
import logo from "../assets/icons/logo.svg"
const SideBar = () => {
  return (
    <aside className="max-w-[230px] h-[600px] bg-[#f9fbfe] p-2 md:p-5 pt-7 rounded-xl flex  flex-col justify-between transition-all">
      {/* logo */}
      <a
        href="#"
        className="flex justify-center md:justify-start text-slate-700"
      >
        <img src={logo} alt="logip logo" className="md:mr-1" />
        <span className="hidden md:inline font-bold ">logip</span>
      </a>
      {/* primary navigation list */}
      <SideBarLinks type="main" />
      {/* membership plan */}
      <div className="text-center bg-gradient-to-b from-white to-transparent rounded-lg py-4 px-4 hidden md:block">
        <h1 className="mb-2 font-bold text-slate-600">Upgrade to Pro 🔥</h1>
        <p className="text-xs text-slate-500 mb-4">
          Get 1 month free and unlock all pro features
        </p>
        <Button {...{ label: "Upgrade" }}></Button>
      </div>
      {/* secondary navigation list */}
      <SideBarLinks type="secondary" />
    </aside>
  )
}

export default SideBar
