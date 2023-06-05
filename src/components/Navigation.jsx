import React from "react"

const Navigation = () => {
  return (
    <nav className="bg-white flex-1 self-start rounded-md py-3 px-4">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
          alt="Margaret Fletcher"
          className="w-10 h-10 object-cover rounded-full mr-3"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-700 mb-[2px]">
            Margaret Fletcher
          </h4>
          <p className="text-[10px] text-slate-400">Project Manager</p>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
