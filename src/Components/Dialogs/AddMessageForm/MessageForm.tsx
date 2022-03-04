import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../bll/hooks';
import {addMessage} from '../../../bll/dialogs-reducer';

type MessageData = {
    message: string
}

export const MessageForm = () => {

    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset
    } = useForm<MessageData>({
        defaultValues: {
            message: ''
        }
    })

    const onSubmit = (data: MessageData) => {
        dispatch(addMessage(data.message))
        reset()
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea placeholder={'Enter your message...'}
            {...register('message')}/>
        <input type={'submit'} value={'Send message'}/>
    </form>
}