import React, { FC, PropsWithChildren, ReactNode } from 'react'

export const Layout: FC = (props: PropsWithChildren<ReactNode>): JSX.Element => (
  <div
    style={{
      height: '512px',
      width: '512px',
      border: '1px solid black',
      padding: '1rem',
      backgroundImage: `url('${chrome.runtime.getURL('assets/images/background.jpg')}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    {props.children}
  </div>
)
