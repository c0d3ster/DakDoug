import { FC } from 'react'

import { AudiusLanding, DesignConsiderations, TrackExplorer, TrackUploader } from 'components/organisms'
import { ParallaxLandingScrollableSections } from 'components/templates'

export const AudiusPage: FC = () => (
  <ParallaxLandingScrollableSections
    landing={<AudiusLanding />}
    sections={[<TrackUploader key={'TrackUploader'}/>, <TrackExplorer key={'TrackExplorer'}/>, <DesignConsiderations key={'DesignConsiderations'}/>]}
  />
)