import React from "react"

const Navigation = () => {
  return (
    <nav className="bg-white flex justify-between items-center  rounded-xl p-4 ">
      <div className="flex items-center">
        <div className="flex">
          <div className="mr-4 relative after:absolute after:w-[10px] after:h-[10px] after:bg-green-500 after:rounded-full after:right-[2px] after:bottom-[2px] after:border-white after:border-[1px]">
            <img
              src="https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Margaret Fletcher"
              className="w-10 h-10 object-cover rounded-full "
            />
          </div>
          <div className="pr-5 border-r border-slate-100">
            <h4 className="text-sm font-bold text-slate-700 mb-[2px]">
              Margaret Fletcher
            </h4>
            <p className="text-[10px] text-slate-400">Project Manager</p>
          </div>
        </div>
        <p className="ml-3 whitespace-nowrap bg-slate-50 py-1 px-2 rounded-full">
          <i className="uil-schedule mr-1"></i>
          <span className="text-xs font-semibold">27 Feb</span>
        </p>
      </div>
      <form action="#" className="flex gap-2 items-center">
        <label className="relative">
          <i className="uil uil-search text-slate-600 absolute top-[50%] left-3 -translate-y-[50%]"></i>
          <input
            type="text"
            className="bg-slate-50 rounded-full text-xs py-2 pr-2 pl-10 outline-none focus:ring-1 focus:ring-indigo-600/50 min-w-[250px]"
            placeholder="Search"
          />
        </label>
        <i className="uil-bell text-lg text-slate-600 py-0.5 px-2 relative bg-slate-50 rounded-full after:absolute after:w-2 after:h-2 after:bg-red-400 after:rounded-full after:border-white after:border"></i>
        <i className="uil uil-message  text-slate-600 py-1 px-2 bg-slate-50 rounded-full"></i>
      </form>
    </nav>
  )
}

export default Navigation
