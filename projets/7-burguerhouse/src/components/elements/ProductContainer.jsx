import React from 'react'

export default function ProductContainer(props) {

    const {
        children
    } = props;

  return (
    <div className='bg-primary w-full h-full'>{ children }</div>
  )
}