const Tag = ({ children }) => (
  <span className="tag">
    {children}

    <style jsx>{`
      .tag {
        border-radius: 5px;
        border: 1px solid #eaeaea;
        background: #fafafa;
        font-size: 12px;
        font-weight: 500;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
      }
    `}</style>
  </span>
)

export default Tag
