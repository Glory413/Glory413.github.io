import { ProfileData } from "../types"
import MediaIcons from "./MediaIcons"
import Slide from "./Slide"
import Typing from "./Typing"

interface Props {
  profileData: ProfileData
}

export default function ProfileCard({ profileData }: Props) {
  return (
    <div className="profile h-full lg:w-[42rem] xl:w-[48rem] bg-gray-900 rounded-lg relative lg:block hidden">
      <div className="relative z-40 w-full h-full myShadow">
        <Slide images={profileData.bgImages} />

        <div className="relative z-20 w-56 h-56 mx-auto rounded-full -mt-36 profilePic">
          <img
            src={'/images/trevor.jpeg'}
            alt="userPic"
            className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-4 border-[#1c1b1b] border-solid"
          />
        </div>

        <h1 className="text-center text-gray-300 text-[3.4rem] font-medium mt-4 mb-0.5">
          {"Trevor Hurlburt"}
        </h1>

        <Typing />
        <MediaIcons />
      </div>
    </div>
  )
}
