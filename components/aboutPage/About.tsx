import AboutMe from "./AboutMe"
import Facts from "./Facts"
import MyServices from "./MyServices"
import Title from "../Title"
import { teamData } from "../../data"

export default function About() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="about me" />
      <AboutMe />

      <Title name="my services" />
      <MyServices />

      <Title name="team members" />
      <Facts teamData={teamData}/>
    </section>
  )
}
