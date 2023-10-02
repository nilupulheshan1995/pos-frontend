import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {

}

const HomeLayout = (props: Props) => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Place New Order</a>
      </div>
      {props.children}
    </div>
  )
}

export default HomeLayout