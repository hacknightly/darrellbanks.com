import { SVGProps } from 'lib/types'

export const HealthIcon = ({ height = 30, width = 30, className }: SVGProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    className={className}
    viewBox='0 0 30 30'
    fill='none'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M24.375 5H5.625C5.27982 5 5 5.27982 5 5.625V24.375C5 24.7202 5.27982 25 5.625 25H24.375C24.7202 25 25 24.7202 25 24.375V5.625C25 5.27982 24.7202 5 24.375 5ZM5.625 3.75C4.58947 3.75 3.75 4.58947 3.75 5.625V24.375C3.75 25.4106 4.58947 26.25 5.625 26.25H24.375C25.4106 26.25 26.25 25.4106 26.25 24.375V5.625C26.25 4.58947 25.4106 3.75 24.375 3.75H5.625Z'
      fill='#006DB6'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M13.75 21.25V8.75H16.25V21.25H13.75Z'
      fill='#006DB6'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M21.25 16.2501L8.75 16.2498L8.75006 13.7498L21.2501 13.7501L21.25 16.2501Z'
      fill='#006DB6'
    />
  </svg>
)
