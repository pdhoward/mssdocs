const Wrapper = ({ children, className, width = 1000 }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: ${parseInt(width) + 48}px;
        padding: 0 24px;
        position: relative;
      }
    `}</style>
  </div>
)

export default Wrapper
