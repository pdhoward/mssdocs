import { PureComponent } from 'react'

export default class Animation extends PureComponent {
  constructor(props) {
    super(props)
    this.el = null
  }

  onElement = el => {
    this.el = el
    if (el) {
      el.addEventListener('animationend', this.onAnimationEnd)
    }
  }

  onAnimationEnd = () => {
    if (this.props.onComplete) {
      this.props.onComplete()
    }
  }

  render() {
    return (
      <div ref={this.onElement}>
        <svg
          style={{
            top: this.props.y - 10,
            left: this.props.x - 10
          }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="var(--accents-2)">
              <rect width="100%" height="100%" rx="10" />
            </g>
          </g>
        </svg>

        <style jsx>{`
          div {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }

          svg {
            position: absolute;
            animation: 400ms ease-in expand;
            animation-fill-mode: forwards;
            width: 20px;
            height: 20px;
          }

          @keyframes expand {
            0% {
              opacity: 0;
              transform: scale(1);
            }

            30% {
              opacity: 1;
            }

            80% {
              opacity: 0.5;
            }

            100% {
              transform: scale(25);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
