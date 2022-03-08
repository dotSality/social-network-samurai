import {useForm, SubmitHandler} from 'react-hook-form';
import s from '../../common/styles/Common.module.css'
import {captchaFieldValidator, emailFieldValidator, passwordFieldValidator} from '../../utils/validators/validators';
import {Nullable} from '../../bll/profile-reducer';
import {useAppSelector} from '../../bll/hooks';

export type FormInputsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

type SubmitDataPropsType = {
    onSubmitData: (data: FormInputsType) => void
    captchaUrl: Nullable<string>
}

export const LoginForm = (props: SubmitDataPropsType) => {
    const {error, status} = useAppSelector(state => state.app)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormInputsType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: '',
        }
    })

    const onSubmit: SubmitHandler<FormInputsType> = (data: FormInputsType) => {
        props.onSubmitData(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={s.textArea} placeholder={'Email...'}
                        {...register('email', emailFieldValidator)}/>
                </div>
                <div className={s.textBlock}>{errors.email?.message}</div>
                <div>
                    <input type={'password'} placeholder={'Password...'}
                        className={s.textArea} {...register('password', passwordFieldValidator)}/>
                </div>
                {
                    props.captchaUrl ?
                        <div>
                            <img src={props.captchaUrl} alt={'captcha'}/>
                            <div>
                                <input className={s.textArea} {...register('captcha', captchaFieldValidator)} />
                            </div>
                            <>
                                {status === 'failed' &&
                                <span className={s.textBlock}>{error ? error : errors.captcha && errors.captcha?.message}</span>}
                            </>
                        </div>
                        : error ? <div className={s.textBlock}>{error}</div>
                            : <div className={s.textBlock}>{errors.password?.message}</div>
                }
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




