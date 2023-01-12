import { useEffect } from 'react'
import ReactGA from 'react-ga'

import { reactGaTrackingTag } from '../settings'

export interface UseReactGAValues {
    trackPageView: (page: string) => void
}

export const useReactGA = () => {
    useEffect(() => {
        ReactGA.initialize(reactGaTrackingTag)
    }, [])

    const trackPageView = (page: string) => {
        ReactGA.pageview(page)
    }

    return { trackPageView }
}