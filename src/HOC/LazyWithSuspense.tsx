import React, { ComponentType, Suspense } from 'react';
import { Preloader } from '../Components/Preloader/Preloader';

export function LazyWithSuspense<T>(Component: ComponentType) {
  return (props: T) => <Suspense fallback={<Preloader/>}>
    <Component {...props}/>
  </Suspense>;
}