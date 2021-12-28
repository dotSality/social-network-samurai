import {useForm} from 'react-hook-form';

type PostFormType = {
    text: string,
}

type PostFormPropsType = {
    onSubmit: (text: string) => void
}

export const AddPostForm = (props: PostFormPropsType) => {

    const {register, handleSubmit, formState: {errors}} = useForm<PostFormType>({
        defaultValues: {
            text: ''
        }
    })

    const onSubmit = (data: PostFormType) => props.onSubmit(data.text)

    return <form onSubmit={handleSubmit(onSubmit)}>
        <textarea placeholder={'Write something...'}
            {...register('text')}/>
        <input onClick={() => {}} value={'Publish post'} type='submit'/>
    </form>
}