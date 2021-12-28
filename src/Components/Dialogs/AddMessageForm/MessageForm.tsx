import {useForm} from 'react-hook-form';
import {DialogsPropsType} from '../DialogsContainer';

type MessageData = {
    message: string
}

export const MessageForm = (props: DialogsPropsType) => {

    const {register, handleSubmit, formState: {errors}} = useForm<MessageData>({
        defaultValues: {
            message: ''
        }
    })

    const onSubmit = (data: MessageData) => {
        props.addMessage(data.message)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea placeholder={'Enter your message...'}
            {...register('message')}/>
        <input type={'submit'} value={'Send message'}/>
    </form>
}