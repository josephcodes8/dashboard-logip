import { Main, Navigation, SideBar } from "./components"

function App() {
  return (
    <>
      <SideBar />
      <div className="flex-1 flex flex-col gap-3 justify-start">
        <Navigation />
        <Main />
      </div>
    </>
  )
}

export default App
