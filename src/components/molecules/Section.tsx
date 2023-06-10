import { FC, ReactNode } from 'react'
import classnames from 'classnames'

import { Header, Wallet } from 'components/molecules'
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
  hasWallet?: boolean
}

export const Section: FC<Props> = ({
  name,
  background,
  title,
  navList,
  iconList,
  contentClass,
  children,
  hasWallet = false,
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
    {hasWallet && <Wallet />}
    <div className={classnames('section-content-container', contentClass)}>{children}</div>
  </div>
)

