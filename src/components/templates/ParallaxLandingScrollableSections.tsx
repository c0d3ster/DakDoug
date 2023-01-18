import { FC, ReactElement } from 'react'

import { Footer } from 'components/molecules'

interface Props {
  landing: ReactElement
  sections: ReactElement[]
}

export const ParallaxLandingScrollableSections: FC<Props> = ({
  landing,
  sections,
}) => (
  <>
    {landing}
    {sections}
    <Footer />
  </>
)
