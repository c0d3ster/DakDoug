import { FC, ReactNode } from 'react'
import classnames from 'classnames'

import { Header } from 'components/organisms'
import { Link } from '@/types'

import '@/styles/Section.css'

interface Props {
  name: string
  background: string
  title: string
  navList: string[]
  iconList: Link[]
  children: ReactNode
  contentClass?: string
}

export const Section: FC<Props> = ({
  name,
  background,
  title,
  navList,
  iconList,
  contentClass,
  children,
}) => (
  <div className='section-container' id={name}>
    <div
      className='section-background'
      style={{
        backgroundImage: background.match(/\.(png|jpg)$/)
          ? `url(${background})`
          : `${background}`,
      }}
    />
    <Header title={title} navList={navList} iconList={iconList} />
    <div className={classnames('section-content-container', contentClass)}>{children}</div>
  </div>
)

