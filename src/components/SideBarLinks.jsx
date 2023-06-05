import { navigation_links } from "../data/app_data"

const NavigationList = ({ type }) => {
  return (
    <ul>
      {navigation_links[type].map((item) => {
        const { id, icon, name, hasChildren, isActive } = item

        return (
          <li key={id}>
            <a href="#" className="block md:flex justify-between p-2">
              <p
                className={`${isActive && "font-semibold"} ${
                  !isActive && "text-slate-400 hover:text-slate-800"
                }`}
              >
                <span className={`${icon} mr-2`}></span>
                <span className="text-xs hidden md:inline-block">
                  {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
                </span>
              </p>
              {hasChildren && (
                <span className="hidden uil uil-plus text-xs bg-gray-100 md:flex items-center justify-center aspect-square h-5 text-center rounded-full"></span>
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationList
