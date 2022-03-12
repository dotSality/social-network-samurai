import {useForm} from 'react-hook-form';
import {postFieldValidator} from '../../../../utils/validators/validators';
import s from '../../../../common/styles/Common.module.scss';

type PostFormType = {
    text: string,
}

type PostFormPropsType = {
    onSubmit: (text: string) => void
}

export const AddPostForm = (props: PostFormPropsType) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<PostFormType>({
        defaultValues: {
            text: ''
        }
    })

    const errorClassName = errors.text ? `${s.textArea} ${s.error}` : s.textArea

    const onSubmit = (data: PostFormType) => {
        props.onSubmit(data.text)
        reset()
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
            <textarea className={errorClassName} placeholder={'Write something...'}
                {...register('text', postFieldValidator)}/>
        <div className={s.textBlock}>
            {errors.text && errors.text.message}
        </div>
        <input value={'Publish post'} type='submit'/>
    </form>
}