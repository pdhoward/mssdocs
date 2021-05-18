import React from 'react'
import PropTypes from 'prop-types'
import Link from './link'

export const TerminalInput = ({ children }, { darkBg = false }) => (
  <div className={darkBg ? 'dark' : ''}>
    {Array.isArray(children) ? (
      <span>{children}</span>
    ) : (
      children
        .split(/\r?\n/)
        .map((item, index) => <span key={index}>{item}</span>)
    )}

    <style jsx>
      {`
        div {
          border: 1px solid #eaeaea;
          color: #000;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 13px;
          line-height: 20px;
          margin: 40px 0;
          padding: 20px;
          -webkit-overflow-scrolling: touch;
          white-space: pre;
          overflow: auto;
          background: white;
        }

        div span {
          display: block;
          margin-right: 24px;
        }

        div span::before {
          content: '$ ';
        }

        div.dark {
          border-color: #333;
          color: #5ce6cd;
        }
      `}
    </style>
  </div>
)

TerminalInput.contextTypes = {
  darkBg: PropTypes.bool
}

export class TerminalOutput extends React.Component {
  static childContextTypes = {
    darkBg: PropTypes.bool
  }

  getChildContext() {
    return { darkBg: true }
  }

  render() {
    const { children } = this.props
    return (
      <div className="output">
        {children}
        <style jsx>
          {`
            .output {
              background: #000;
              color: #fff;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                monospace, serif;
              font-size: 13px;
              line-height: 20px;
              margin: 40px 0;
              padding: 20px;
            }

            .output :global(pre) {
              margin: 0;
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
              white-space: pre-wrap;
            }
          `}
        </style>
      </div>
    )
  }
}

export const TerminalLink = props => (
  <span>
    <Link {...props} />
    <style jsx>
      {`
        span :global(a) {
          text-decoration: underline;
        }
      `}
    </style>
  </span>
)
