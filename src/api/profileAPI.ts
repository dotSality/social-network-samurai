import { ContactsType, ProfileType } from '../Components/Profile/Profile';
import { instance } from './instance';
import { CommonResponseType } from './usersAPI';

export type ProfileDataType = {
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  aboutMe: string,
  contacts: ContactsType
}

export const profileAPI = {
  getUserProfile(userId: number) {
    return instance.get<ProfileType>(`profile/` + userId).then(res => res.data);
  },
  getUserStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
  },
  updateStatus(status: string) {
    return instance.put<CommonResponseType>(`profile/status`, { status });
  },
  uploadPhoto(file: File) {
    let formData = new FormData();
    formData.append('image', file);
    return instance.put<CommonResponseType<PhotosType>>(`profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => res.data);
  },
  submitProfile(profile: ProfileDataType) {
    return instance.put<CommonResponseType>(`profile`, profile).then(res => res.data);
  }
};

type PhotosType = {
  photos: {
    small: string
    large: string
  }
}
