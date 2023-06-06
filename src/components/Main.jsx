import { TeamSection, ConversationSection, ProjectSection } from "./"
const Main = () => {
  return (
    <main className=" grid grid-cols-2 grid-rows-2 flex-1 gap-4">
      <ConversationSection />
      <TeamSection />
      <ProjectSection />
    </main>
  )
}

export default Main
