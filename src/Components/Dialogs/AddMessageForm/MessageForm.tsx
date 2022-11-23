import { useAppDispatch } from '../../../bll/hooks';
import { addMessage } from '../../../bll/dialogs-reducer';
import { Form, Input } from 'antd';
import CommonButton from '../../CommonUI/CommonButton/CommonButton';
import s from './MessageForm.module.scss';

const { Item } = Form;
const { TextArea } = Input;

type MessageData = {
  message: string
}

export const MessageForm = () => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  const onSubmit = (data: MessageData) => {
    dispatch(addMessage(data.message));
    form.resetFields();
  };

  return <Form
    layout="vertical"
    className={s.messageForm}
    form={form}
    onFinish={onSubmit}
  >
    <Item name="message" rules={[{ required: true, message: 'Message can\'t be empty' }]}>
      <TextArea autoSize={{ minRows: 3, maxRows: 6 }}/>
    </Item>
    <CommonButton htmlType="submit">
      Send message
    </CommonButton>
  </Form>;
};