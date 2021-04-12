import React, {FC, PropsWithChildren, ReactNode} from 'react'

export const Layout: FC = (props: PropsWithChildren<ReactNode>): JSX.Element => (
  <div className="layout">
    {props.children}
  </div>
)
