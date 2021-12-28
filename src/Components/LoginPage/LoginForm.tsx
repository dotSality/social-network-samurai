import {useForm, SubmitHandler} from 'react-hook-form';

export type FormInputsType = {
    login: string,
    password: string,
    rememberMe: boolean,
}

type SubmitDataPropsType = {
    onSubmitData: (data: FormInputsType) => void
}

export const LoginForm = (props: SubmitDataPropsType) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInputsType>({
        defaultValues: {
            login: '',
            password: '',
            rememberMe: false,
        }
    })

    const onSubmit: SubmitHandler<FormInputsType> = (data: FormInputsType) => props.onSubmitData(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'Login...'}
                    {...register('login')}/>
            </div>
            {errors.login?.message}
            <div>
                <input type={'password'} placeholder={'Password...'}
                    {...register('password')}/>
            </div>
            {errors.password?.message}
            <div>
                <input type={'checkbox'} {...register('rememberMe')}/> Remember me
            </div>
            <div>
                <input value={'Login'} type={'submit'}/>
            </div>
        </form>
    )
}




