import { messages } from "../data/app_data"

const ConversationSection = () => {
  return (
    <section className="bg-white rounded-lg p-2 col-span-1 row-span-2">
      <div className=" bg-slate-50 p-2 rounded-lg text-center flex flex-col items-center">
        <span className="uil uil-times ml-auto "></span>
        <div className="mb-2 relative after:absolute after:w-3 after:h-3 after:bg-indigo-600 after:rounded-full after:border after:border-white after:bottom-1 after:right-2">
          <img
            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-20 border-2 border-indigo-600 rounded-full"
          />
        </div>
        <h2 className=" font-bold mb-1">Megan Norton </h2>
        <span className="text-xs">@megannorton</span>
        {/* buttons list  */}
        <div className="flex gap-2 my-4">
          <i className="uil uil-phone w-8 h-8 flex items-center justify-center rounded-full bg-white "></i>
          <i className="uil uil-video w-8 h-8  flex items-center justify-center rounded-full bg-white "></i>
          <i className="uil uil-ellipsis-v w-8 h-8 flex items-center justify-center rounded-full bg-white "></i>
        </div>
      </div>
      <div>
        <ul className=" p-4 flex flex-col gap-4">
          {messages.map((message) => (
            <li className="bg-blue-50 max-w-[50%] text-sm p-3 ml-auto rounded-l-xl rounded-tr-xl flex flex-col">
              <span>{message.text}</span>
              <span className="text-xs text-slate-400">{message.capion}</span>
              <span className="ml-auto text-xs pt-2 text-slate-400">
                {message.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ConversationSection
