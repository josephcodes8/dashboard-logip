import React from "react"
import { projects_onboarding, attendees } from "../data/app_data"
const ProjectSection = () => {
  return (
    <section className="bg-white rounded-lg text-slate-600 py-6 px-8 col-span-1">
      <span className="uppercase mb-2 block text-xs text-slate-400 ">
        meeting
      </span>
      <h1 className="font-bold text-xl mb-2">Project Onbarding</h1>
      <p className="text-xs text-slate-400">Add description of your meeting</p>
      <ul className="my-4">
        {projects_onboarding.map((project) => {
          const { id, icon, time } = project
          return (
            <li
              key={id}
              className="flex gap-2 items-center bg-slate-50/50 p-3 rounded-xl mb-4"
            >
              <i className={icon}></i>
              <span className="text-xs">{time}</span>
              <i className="uil uil-ellipsis-v  ml-auto"></i>
            </li>
          )
        })}
      </ul>
      <p className="font-bold mb-2">Attendees</p>
      <div className="relative flex items-center">
        {attendees.map((attendee) => {
          return (
            <img
              key={attendee.id}
              src={attendee.img}
              className={`w-7 h-7 object-cover rounded-full border border-white absolute z-${attendee.z} left-${attendee.left}`}
            />
          )
        })}
        <p className="absolute left-[5.2rem] font-bold text-xs flex w-7 h-7 bg-slate-100 items-center justify-center rounded-full z-[60]">
          +2
        </p>
        <a href="#" className="ml-auto text-xs">
          <span className="mr-2 font-semibold">Send Invitation link</span>
          <i className="uil uil-location-arrow bg-blue-300/50 text-slate-600 py-1 px-2 rounded-full "></i>
        </a>
      </div>
    </section>
  )
}

export default ProjectSection
