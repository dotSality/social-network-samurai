import {SubmitHandler, useForm} from 'react-hook-form';
import {aboutMeValidator, descriptionValidator, fullNameValidator} from '../../../../utils/profileFormValidators/profile-valid';
import s from './ProfileDataForm.module.css'
import c from './../../../common/styles/Common.module.css';
import {ContactsType, ProfileType} from '../ProfileContainer';

export type ProfileDataType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    aboutMe: string,
    contacts: ContactsType
}

type ProfileDataFormPropsType = {
    onSubmit: (data: ProfileDataType) => void
    profile: ProfileType
    error: string | null
}

export const ProfileDataForm = ({error, profile, onSubmit}: ProfileDataFormPropsType) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<ProfileDataType>({
        defaultValues: {
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription || '',
            fullName: profile.fullName,
            aboutMe: profile.aboutMe || '',
            contacts: {
                facebook: profile.contacts.facebook || null,
                website: profile.contacts.website || null,
                vk: profile.contacts.vk || null,
                twitter: profile.contacts.twitter || null,
                instagram: profile.contacts.instagram || null,
                youtube: profile.contacts.youtube || null,
                github: profile.contacts.github || null,
                mainLink: profile.contacts.mainLink || null,
            }
        }
    })

    const onFormSubmit: SubmitHandler<ProfileDataType> = (data: ProfileDataType) => {
        onSubmit(data)
        // offEditMode()
    }

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>

                <div>
                    <span>Looking for a job?</span>
                    <input className={s.input} type="checkbox" {...register('lookingForAJob')}/>
                </div>

                <div className={s.blocksContainer}>
                    <div className={s.item}>
                        <span>Short skills review:</span>
                        <textarea rows={5} className={s.textarea}
                            {...register('lookingForAJobDescription', descriptionValidator)}/>
                        <div className={c.textBlock}>{errors.lookingForAJobDescription?.message}</div>
                    </div>

                    <div className={s.item}>
                        <span>Your full name:</span>
                        <textarea rows={5} className={s.textarea}
                            {...register('fullName', fullNameValidator)}/>
                        <div className={c.textBlock}>{errors.fullName?.message}</div>
                    </div>

                    <div className={s.item}>
                        <span>About me:</span>
                        <textarea rows={5} className={s.textarea}
                            {...register('aboutMe', aboutMeValidator)}/>
                        <div className={c.textBlock}>{errors.aboutMe?.message}</div>
                    </div>

                    <div className={s.blocksContainer}>
                        <div className={s.item}>
                            <span>Facebook:</span>
                            <input className={s.textarea}
                                {...register('contacts.facebook')}/>
                            <div className={c.textBlock}></div>
                        </div>

                        <div className={s.item}>
                            <span>GitHub:</span>
                            <input className={s.textarea}
                                {...register('contacts.github')}/>
                            <div className={c.textBlock}></div>
                        </div>

                        <div className={s.item}>
                            <span>Twitter:</span>
                            <input className={s.textarea}
                                {...register('contacts.twitter')}/>
                            <div className={c.textBlock}></div>
                        </div>


                        <div className={s.item}>
                            <span>VK:</span>
                            <input className={s.textarea}
                                {...register('contacts.vk')}/>
                            <div className={c.textBlock}></div>
                        </div>


                        <div className={s.item}>
                            <span>Instagram:</span>
                            <input className={s.textarea}
                                {...register('contacts.instagram')}/>
                            <div className={c.textBlock}></div>
                        </div>


                        <div className={s.item}>
                            <span>Main link:</span>
                            <input className={s.textarea}
                                {...register('contacts.mainLink')}/>
                            <div className={c.textBlock}></div>
                        </div>


                        <div className={s.item}>
                            <span>Website:</span>
                            <input className={s.textarea}
                                {...register('contacts.website')}/>
                            <div className={c.textBlock}></div>
                        </div>


                        <div className={s.item}>
                            <span>Youtube:</span>
                            <input className={s.textarea}
                                {...register('contacts.youtube')}/>
                            <div className={c.textBlock}></div>
                        </div>
                    </div>

                </div>

                <div className={c.textBlock}>{error}</div>
                <input className={s.submit} value={'Submit data'} type={'submit'}/>
            </form>
        </div>
    )
}