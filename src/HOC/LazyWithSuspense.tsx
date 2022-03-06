import React, {ComponentType, Suspense} from 'react';
import {InnerPreloader} from '../Components/InnerPreloader/InnerPreloader';

export function LazyWithSuspense<T>(Component: ComponentType) {
    return (props: T) => <Suspense fallback={<InnerPreloader/>}>
        <Component {...props}/>
    </Suspense>
}