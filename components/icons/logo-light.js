const LogoLight = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 113 100"
  >
    <defs>
      <linearGradient x1="196.57%" y1="228.82%" x2="50%" y2="50%" id="a">
        <stop offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M350.5 150L407 250H294z"
      transform="translate(-294 -150)"
      fill="url(#a)"
      fillRule="evenodd"
    />
  </svg>
)

export default LogoLight
