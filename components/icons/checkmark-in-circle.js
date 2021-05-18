import { memo } from 'react'

function CheckmarkInCircle({
  color = '#0076FF',
  checkColor = '#FFF',
  size = 18,
  ...props
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" {...props}>
      <circle cx="9" cy="9" r="9" fill={color} />
      <path
        d="M6.42871 9.21445L8.30371 11.0895L12.3216 7.07159"
        stroke={checkColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default memo(CheckmarkInCircle)
