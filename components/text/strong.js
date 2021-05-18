const Strong = ({ children }) => (
  <span>
    {children}
    <style jsx>{`
      span {
        font-weight: 600;
      }
    `}</style>
  </span>
)

export default Strong
