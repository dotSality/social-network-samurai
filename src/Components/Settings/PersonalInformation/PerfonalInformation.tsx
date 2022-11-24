import { Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import CommonButton from '../../CommonUI/CommonButton/CommonButton';
import s from './PersonalInformation.module.scss';
import { useAppDispatch, useAppSelector } from '../../../bll/hooks';
import { submitProfile } from '../../../bll/profile-reducer';
import { clearSubmitErrors } from '../../../bll/auth-reducer';
import { ProfileDataType } from '../../../api/profileAPI';

const { Item } = Form;
const { TextArea } = Input;

type SubmitDataType = {
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  aboutMe: string,
  facebook: string | null,
  website: string | null,
  vk: string | null,
  twitter: string | null,
  instagram: string | null,
  youtube: string | null,
  github: string | null,
  mainLink: string | null
}

const PersonalInformation = () => {
  const [form] = Form.useForm();

  const profile = useAppSelector(state => state.auth.authProfile);
  const errors = useAppSelector(state => state.auth.submitErrors);
  const isFetching = useAppSelector(state => state.auth.isFetching);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errors.length) {
      errors.forEach(error => {
        const regexp = new RegExp(/>(.*?)\)/g);
        const name = regexp.exec(error)?.[1].replace(/(.)/, (l) => l.toLowerCase());
        if (name) form.setFields([{ name, errors: ['Wrong url format'] }]);
      });
    }
  }, [errors, form]);

  useEffect(() => {
    return () => {
      dispatch(clearSubmitErrors());
    };
  }, [dispatch]);

  const submitInfo = async (data: SubmitDataType) => {
    const {
      facebook,
      website,
      vk,
      twitter,
      instagram,
      youtube,
      github,
      mainLink,
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      fullName
    } = data;

    const contacts = { facebook, website, vk, twitter, instagram, youtube, github, mainLink };

    const keys = Object.keys(contacts);
    const contactsToSubmit = keys.reduce((acc, el) => {
      // @ts-ignore
      if (!contacts[el]) return acc;
      // @ts-ignore
      return { ...acc, [el]: contacts[el] };
    }, {});

    const dataToSubmit = {
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      fullName,
      contacts: contactsToSubmit,
    } as ProfileDataType;

    await dispatch(submitProfile(dataToSubmit));
  };

  const defaultValues = {
    ...profile?.contacts,
    aboutMe: profile?.aboutMe || '',
    fullName: profile?.fullName || '',
    lookingForAJobDescription: profile?.lookingForAJobDescription || '',
    lookingForAJob: profile?.lookingForAJob || false,
  };

  return (
    <div className={s.main}>
      <Form form={form} initialValues={defaultValues} layout="vertical" onFinish={submitInfo}>
        <p className={s.formTitle}>Common information</p>
        <Item
          rules={[{ required: true, message: 'Full name field cannot be empty' }]}
          name="fullName"
          label="Full name"
        >
          <Input/>
        </Item>
        <Item
          rules={[{ required: true, message: 'Skills review field cannot be empty' }]}
          name="lookingForAJobDescription"
          label="Short skills review"
        >
          <TextArea autoSize={{ minRows: 3, maxRows: 6 }}/>
        </Item>
        <Item
          rules={[{ required: true, message: 'About yourself field cannot be empty' }]}
          name="aboutMe"
          label="About yourself"
        >
          <TextArea autoSize={{ minRows: 3, maxRows: 6 }}/>
        </Item>
        <Item
          name="lookingForAJob"
          label="Looking for a job"
          valuePropName="checked"
          className={s.formItem}
        >
          <Checkbox/>
        </Item>
        <p className={s.formTitle}>Contact links</p>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="facebook" label="Facebook">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="website" label="Your website">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="vk" label="VK">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="twitter" label="Twitter">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="instagram" label="Instagram">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="youtube" label="Youtube">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="github" label="GitHub">
          <Input/>
        </Item>
        <Item rules={[{ validateTrigger: 'onChange' }]} name="mainLink" label="Main link">
          <Input/>
        </Item>
        <CommonButton disabled={isFetching} loading={isFetching} htmlType="submit">
          Submit
        </CommonButton>
      </Form>
    </div>
  );
};

export default PersonalInformation;