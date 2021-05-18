import PropTypes from 'prop-types'
import refractor from 'refractor'
import rehype from 'rehype'

export const Code = ({ children, lang }, { darkBg } = {}) => (
  <pre className={(darkBg ? 'dark' : '') + (lang ? ` ${lang}` : '')}>
    {lang ? (
      <code
        className={`language-${lang}`}
        dangerouslySetInnerHTML={{
          __html: rehype()
            .stringify({
              type: 'root',
              children: refractor.highlight(children, lang)
            })
            .toString()
        }}
      />
    ) : (
      <code>{children}</code>
    )}
    <style jsx>
      {`
        pre {
          border: 1px solid #eaeaea;
          padding: 20px;
          margin: 24px 0 40px;
          white-space: pre;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          background: white;
        }
        code {
          color: #000;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 13px;
          line-height: 20px;
        }
        pre.dark {
          border-color: #333;
          background: transparent;
        }
        .dark code {
          color: #fff;
        }
        .dark.bash code {
          color: #50e3c2;
        }
      `}
    </style>
  </pre>
)

Code.contextTypes = {
  darkBg: PropTypes.bool
}

const literal = '`'

export const InlineCode = ({ children, noWrap, color }) => (
  <code className={noWrap && 'no-wrap'}>
    {children}
    <style jsx>
      {`
        code {
          color: ${color ? color : '#bd10e0'};
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 0.9em;
          white-space: pre-wrap;
        }

        code.no-wrap {
          white-space: nowrap;
        }

        code::before {
          content: '${literal}';
        }

        code::after {
          content: '${literal}';
        }
      `}
    </style>
  </code>
)

export const RequestHeader = ({ children, ...props }) => (
  <InlineCode noWrap color="#0076FF" {...props}>
    {children}
  </InlineCode>
)
