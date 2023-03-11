import { useEffect } from 'react'
import ReactGA from 'react-ga4'

import { reactGaTrackingTag } from '../settings'

export const useReactGA = () => {
    useEffect(() => {
        ReactGA.initialize(reactGaTrackingTag)
    }, [])
}