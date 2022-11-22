import PersonalInformation from "../Components/Settings/PersonalInformation/PerfonalInformation";
import ProfilePicture from "../Components/Settings/ProfilePicture/ProfilePicture";

export const settingsItems = [
  { label: 'Profile picture', key: '1', children: <ProfilePicture /> },
  { label: 'Personal information', key: '2', children: <PersonalInformation /> },
]