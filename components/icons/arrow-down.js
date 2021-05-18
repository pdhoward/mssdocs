import PropTypes from 'prop-types'

const ArrowDown = ({ fill, width, height, strokeWidth }) => {
  return (
    <svg
      width={width || '22'}
      height={height || '12'}
      viewBox="0 0 22 12"
      fill="none"
    >
      <path
        d="M1 1L11 11L21 1"
        stroke={fill || '#000'}
        strokeWidth={strokeWidth || '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ArrowDown.propTypes = {
  // Width and height support both `width={20}` and `width="20px"`
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string
}

export default ArrowDown
