import { team_members } from "../data/app_data"

const TeamSection = () => {
  return (
    <section className="bg-white rounded-lg py-6 px-8 col-span-1">
      <div className="flex justify-between items-center text-slate-600">
        <h1 className="font-bold text-xl">Team</h1>
        <span className="text-xs bg-slate-50 py-1 px-3 rounded-full text-indigo-600 font-semibold">
          <i className="uil uil-user"> 63</i>
        </span>
      </div>
      {/* FIXME: change the border color */}
      <ul className="my-6  border-b border-slate-200 py-2">
        {team_members.map((member) => {
          const { id, name, position, img } = member
          return (
            <li
              key={id}
              className="text-slate-600 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={img}
                  alt={`image of ${id}`}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <span className="text-xs text-slate-400">{position}</span>
                </div>
              </div>
              <i className="uil uil-envelope  text-slate-600 py-1 px-2 bg-slate-50 rounded-full "></i>
            </li>
          )
        })}
      </ul>
      <button className="my-1">
        <i className="uil uil-plus bg-blue-300/50 text-slate-600 py-1 px-2 rounded-full "></i>
        <span className="text-xs font-semibold ml-2">
          Invite new team member
        </span>
      </button>
    </section>
  )
}

export default TeamSection
