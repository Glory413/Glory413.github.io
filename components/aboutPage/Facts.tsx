import Image from "next/image"
import { TeamData } from "../../types"

interface Props {
  teamData: TeamData[]
}
export default function Facts({ teamData }: Props) {
  return (
    <div className="px-12 py-10 flex flex-col items-center">
      <Image
        src={teamData[0].userImage.url}
        alt="team member"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        {teamData[0].userName}
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-6">
        {teamData[0].userStack}
      </p>

      <Image
        src={teamData[1].userImage.url}
        alt="team member"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        {teamData[1].userName}
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-6">
        {teamData[1].userStack}
      </p>

      <Image
        src={teamData[2].userImage.url}
        alt="team member"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        {teamData[2].userName}
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-6">
        {teamData[2].userStack}
      </p>

      <Image
        src={teamData[3].userImage.url}
        alt="team member"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        {teamData[3].userName}
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-6">
        {teamData[3].userStack}
      </p>

      <Image
        src={teamData[4].userImage.url}
        alt="team member"
        width={90}
        height={90}
        objectFit="cover"
        className="rounded-full"
      />
      <h2 className="capitalize text-2xl font-semibold text-gray-300 mt-3 mb-1.5">
        {teamData[4].userName}
      </h2>
      <p className="text-xl text-gray-500 capitalize mb-6">
        {teamData[4].userStack}
      </p>
    </div>
  )
}
