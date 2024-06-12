import clsx from 'clsx'
import { FC } from 'react'

import s from './Spinner.module.css'

type TSpinner = {
  width: string
  height: string
  className?: string
}

const Spinner: FC<TSpinner> = ({ width, height, className }) => (
  <svg
    viewBox="0 0 96 96"
    className={clsx(s.Spinner, className && className)}
    width={width}
    height={height}
    fill="none"
    strokeDasharray="53.333333333333336, 144"
    strokeDashoffset="0"
    strokeWidth="4"
    focusable="false"
    aria-hidden="true"
  >
    <circle cx="48" cy="48" r="32"></circle>
  </svg>
)

export default Spinner
