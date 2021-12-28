import {useForm, SubmitHandler} from 'react-hook-form';
import s from '../common/styles/Common.module.css'
import {emailFieldValidatorType, passwordFieldValidatorType} from '../../utils/validators/validators';

export type FormInputsType = {
    email: string,
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
            email: '',
            password: '',
            rememberMe: false,
        }
    })

    const onSubmit: SubmitHandler<FormInputsType> = (data: FormInputsType) => props.onSubmitData(data)
    console.log(errors)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={s.textArea} placeholder={'Email...'}
                        {...register('email', emailFieldValidatorType)}/>
                </div>
                <div className={s.textBlock}>{errors.email?.message}</div>
                <div>
                    <input type={'password'} placeholder={'Password...'}
                        className={s.textArea} {...register('password', passwordFieldValidatorType)}/>
                </div>
                <div className={s.textBlock}>{errors.password?.message}</div>
                <div>
                    <input type={'checkbox'}
                        {...register('rememberMe')}/> Remember me
                </div>
                <div>
                    <input value={'Login'} type={'submit'}/>
                </div>
            </form>
        </div>
    )
}




