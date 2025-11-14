import React from 'react'

export default function HeadingTitle({ children, variant }) {

  const defaultClass = "px-2 py-3 bg-primary text-secondary font-bold inline-block";

  switch(variant) {
    case 'h3':
        return (
            <div className='flex items-center justify-center my-5'>
                <h3 className={ `text-sm ${ defaultClass }` }>
                    { children }
                </h3>
            </div>
        );
    default:
        return (
            <div className='flex items-center justify-center'>
                <h2 className={ `text-base ${ defaultClass }` }>
                    { children }
                </h2>
            </div>
        );
  }
}