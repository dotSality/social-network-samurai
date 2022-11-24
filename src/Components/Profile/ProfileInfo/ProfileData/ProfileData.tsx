import React, { Fragment } from 'react';
import s from './ProfileData.module.scss';
import { ProfileType } from '../../Profile';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';

type ProfileDataPropsType = {
  isOwner: boolean
  profile: ProfileType
}

export const ProfileData = ({ isOwner, profile }: ProfileDataPropsType) => {

  const { contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName } = profile;

  const contactsKeys = Object.keys(contacts);
  const contactsValues = Object.values(contacts);
  const isRendering = contactsValues.some(value => value !== null);

  const mappedContacts = contactsKeys.map((key, i) => {
    return <Fragment key={contactsKeys[i]}><span className={s.label}>{key}:</span>
      {<a target={'_blank'} rel={'noreferrer'} href={contactsValues[i]!}> {contactsValues[i]}</a>}</Fragment>;
  });

  return (
    <div className={s.container}>
      <span className={s.fullName}>{fullName}</span>
      <ProfileStatus isOwner={isOwner}/>
      <div className={s.dataGrid}>
        <span className={s.label}>Looking for a job:</span><span>{lookingForAJob ? 'Yes' : 'No'}</span>
        {lookingForAJob && <>
          <span className={s.label}>My professional skills:</span><span>{lookingForAJobDescription}</span>
        </>}
        <span className={s.label}>Full name: </span><span>{fullName}</span>
        {aboutMe && <>
          <span className={s.label}>About me: </span><span>{aboutMe}</span>
        </>}
      </div>
      {isRendering && <div className={s.contacts}>
        <span className={s.label}>Contacts:</span>
        <div className={s.links}>
          {mappedContacts}
        </div>
      </div>}
    </div>);
};