import { useQuery } from "@apollo/client"
import {
  SiBlockchaindotcom,
  SiDevexpress
} from 'react-icons/si';
import { SkillData } from "../../types"
import BackEnd from "./BackEnd"
import Blockchain from "./Blockchain"
import IconTitle from "./IconTitle"
import resumeOperations from "../../graphqlOperations/resume"

interface SkillQuery {
  skills: SkillData[]
}

export default function Skills() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  )

  if (error) console.log(error)

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 pt-6">
          <IconTitle title="blockchain" Icon={SiBlockchaindotcom} />
          <Blockchain blockchain={data?.skills[0].blockchain} />
        </li>
        <li className="px-12 py-6">
          <IconTitle title="back-end" Icon={SiDevexpress} />
          <BackEnd backend={data?.skills[0].backEnd} />
        </li>
      </ul>
      <br></br>
      <br></br>
    </>
  )
}
