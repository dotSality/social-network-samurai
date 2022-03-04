import {ComponentType, Suspense} from 'react';
import {Preloader} from '../Components/common/Preloader/Preloader';

export function LazyWithSuspense<T = any>(Component: ComponentType) {
    return (props: T) => <Suspense fallback={<Preloader/>}>
        <Component {...props}/>
    </Suspense>
}