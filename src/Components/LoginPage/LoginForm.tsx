import { SubmitHandler } from 'react-hook-form';
import { Nullable } from '../../bll/profile-reducer';
import { useAppSelector } from '../../bll/hooks';
import { Checkbox, Form, Input } from 'antd';
import CommonButton from '../CommonUI/CommonButton/CommonButton';
import { useEffect } from 'react';
import s from './LoginForm.module.scss';

const { Item } = Form;

export type FormInputsType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha?: string
}

type SubmitDataPropsType = {
  onSubmitData: (data: FormInputsType) => void
  captchaUrl: Nullable<string>
}

export const LoginForm = (props: SubmitDataPropsType) => {
  const [form] = Form.useForm();

  const { error } = useAppSelector(state => state.app);
  const isFetching = useAppSelector(state => state.auth.isFetching);

  useEffect(() => {
    if (error) {
      form.setFields([{
        name: error === 'Incorrect anti-bot symbols' ? 'captcha' : 'email',
        errors: [error]
      }]);
    }
  }, [error, form]);

  console.log(error);
  const onSubmit: SubmitHandler<FormInputsType> = (data: FormInputsType) => {
    props.onSubmitData(data);
    form.resetFields();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmit}
      className={s.form}
    >
      <Item
        rules={[
          { required: true, message: 'Please, enter e-mail' },
          { pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, message: 'Incorrect e-mail' }]}
        name="email"
        label="Email"
      >
        <Input/>
      </Item>
      <Item
        rules={[{ required: true, message: 'Please, enter password' }]}
        name="password"
        label="Password"
      >
        <Input.Password/>
      </Item>
      {
        props.captchaUrl &&
        <div>
          <div>
            <img src={props.captchaUrl} alt={'captcha'}/>
            <Item
              rules={[{ required: true, message: 'Provide anti-bot symbols' }]}
              name="captcha"
              label="Captcha"
            >
              <Input/>
            </Item>
          </div>
        </div>
      }
      <Item
        valuePropName="checked"
        name="rememberMe"
        label="Remember me"
        className={s.formItem}
      >
        <Checkbox/>
      </Item>
      <CommonButton
        loading={isFetching}
        disabled={isFetching}
        htmlType="submit"
      >
        Login
      </CommonButton>
    </Form>
  );
};
