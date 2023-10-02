import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren{
    
}

const HomeLayout = (props: Props) => {
  return (
    <div>{props.children}</div>
  )
}

export default HomeLayout