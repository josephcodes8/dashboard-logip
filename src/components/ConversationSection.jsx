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
      <div className="mx-5 my-10 border-t relative">
        <p className="absolute font-semibold  text-slate-500 -top-3 left-[50%] -translate-x-[50%] px-2 bg-white">
          Today
        </p>
        <ul className="text-slate-500 mt-10 flex flex-col gap-2">
          {messages.map((message) => {
            const { id, isMine, isVoice, text, isLink, link, linkIcon, time } =
              message

            return (
              <li
                key={id}
                className={`flex gap-2 p-4  rounded-t-xl max-w-[75%] lg:max-w-[60%] ${
                  isMine
                    ? " bg-blue-50 self-end rounded-bl-xl"
                    : "bg-gray-50 rounded-br-xl"
                }`}
              >
                {isLink && (
                  <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                    <img src={linkIcon} alt="" className="w-10" />
                  </span>
                )}
                {isVoice && (
                  <i className="uil uil-play bg-blue-50 flex items-center justify-center w-9 rounded-full"></i>
                )}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center">
                    {isVoice && (
                      <div className="flex items-center">
                        {/* FIX: all bars not showing up */}
                        {random_bars(25).map((bar) => {
                          return (
                            <div
                              key={bar.id}
                              className={`w-1 h-[${bar.length}px]  bg-slate-500 rounded-full `}
                            ></div>
                          )
                        })}
                      </div>
                    )}
                    <p
                      className={`${isVoice && "ml-auto"} text-sm ${
                        isLink && "font-bold"
                      }`}
                    >
                      {text}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400/80">{link}</span>
                  <span className="text-xs text-slate-400/80 ml-auto">
                    {time}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
        <form action="#" className="bg-slate" className="flex">
          <span className="uil uil-paperclip"></span>
          <input type="text" placeholder="Write a message" />
          <div>
            <span className="uil uil-emoji"></span>
            <span className="uil uil-microphone"></span>
          </div>
        </form>
      </div>
    </section>
  )
}

const random_bars = (length) => {
  const bars = []
  let i = 0
  while (i < length) {
    bars.push({
      id: i,
      length: Math.round(Math.random() * 40),
    })
    i++
  }
  console.log(bars)
  return bars
}

export default ConversationSection
