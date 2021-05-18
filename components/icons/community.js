const Community = ({ width, height, animate }) => (
  <svg width={width || '69'} height={height || '72'} viewBox="0 0 69 72">
    <defs>
      <ellipse id="b" cx="30.5" cy="32" rx="30.5" ry="32" />
      <filter
        id="a"
        width="126.2%"
        height="125%"
        x="-13.1%"
        y="-6.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g fillRule="nonzero" transform="translate(4)">
        <use fill="#000" fillOpacity="1" filter="url(#a)" xlinkHref="#b" />
        <use fill="#FFF" xlinkHref="#b" />
      </g>
      <path
        fill="#000"
        d="M34.5 44.0005c.5833 0 1.1566-.037 1.7223-.095l7.8089 4.096v-7.0821c3.4837-2.565 5.7188-6.4999 5.7188-10.9184C49.75 22.268 42.9223 16 34.5 16s-15.25 6.2685-15.25 14.001c0 7.7315 6.8277 13.9995 15.25 13.9995zM34.5 18c7.3696 0 13.3438 5.373 13.3438 12.0005 0 4.0645-2.2761 7.617-5.7193 9.7825L42.125 45l-5.7192-2.9985s.2811-.001-1.9058-.001c-7.3696 0-13.3438-5.3725-13.3438-11.9995C21.1562 23.373 27.1304 18 34.5 18z"
      />
      <path
        className={animate && 'line1'}
        stroke="#0076FF"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="2"
        d="M27 26.9968158h15"
      />
      <path
        className={animate && 'line2'}
        stroke="#0076FF"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="2"
        d="M29 33.00025h10.997614"
      />
    </g>
    <style jsx>{`
      .line1,
      .line2 {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: dash 4s linear forwards infinite;
        animation-delay: 1.2s;
      }
      .line2 {
        animation-delay: 1.7s;
      }
      @keyframes dash {
        50%,
        100% {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
  </svg>
)

export default Community
