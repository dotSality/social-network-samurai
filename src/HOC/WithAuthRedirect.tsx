import {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../bll/hooks';

export function WithAuthRedirect<T>(Component: FC<T>) {
    function RedirectComponent(props: T) {
        const {isAuth} = useAppSelector(state => state.auth)
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    return RedirectComponent;
}