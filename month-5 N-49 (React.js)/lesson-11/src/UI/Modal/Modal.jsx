import React from 'react'
import clsx from 'clsx'

function Modal({ children }) {
  return (
    <div className={clsx()}>
      {children}
    </div>
  )
}

export default Modal