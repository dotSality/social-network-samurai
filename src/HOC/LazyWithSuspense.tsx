import React, {ComponentType} from 'react';
import {Preloader} from '../Components/common/Preloader/Preloader';

export function LazyWithSuspense<T = any> (Component: ComponentType){
    return (props: T) => <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
}