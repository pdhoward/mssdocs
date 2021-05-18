const UL = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        padding: 0;
        list-style-type: none;
        margin-left: 15px;
      }
      ul > :global(li::before) {
        content: '-';
        display: inline-block;
        color: #999;
        position: absolute;
        margin-left: -15px;
      }
    `}</style>
  </ul>
)

export default UL
