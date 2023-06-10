import { FC } from 'react'

import { AudiusLanding, DesignConsiderations, TrackUploader } from 'components/organisms'
import { ParallaxLandingScrollableSections } from 'components/templates'

export const AudiusPage: FC = () => (
  <ParallaxLandingScrollableSections
    landing={<AudiusLanding />}
    sections={[<TrackUploader key={'TrackUploader'}/>, <DesignConsiderations key={'DesignConsiderations'}/>]}
  />
)