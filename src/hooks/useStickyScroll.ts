import {useCallback, useEffect, useRef, useState} from 'react';

export function UseStickyScroll<T extends HTMLElement>(coordinates: number) {
    const ref = useRef<T>(null)

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const scrollHandler = useCallback(() => {
        const bcr = ref.current?.getBoundingClientRect();
        if (bcr!.y < coordinates) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    },[])

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, false)
        return () => {
            window.removeEventListener('scroll', scrollHandler, false)
        }
    }, [])

    return {ref, isScrolled}
}