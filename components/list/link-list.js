export default function LinkList({ children }) {
  return (
    <div className="link-list">
      {children}

      <style jsx>{`
        .link-list {
          display: flex;
        }

        .link-list :global(a) {
          font-weight: 500;
        }

        .link-list :global(span:not(:last-child) a),
        .link-list :global(a:not(:only-child):not(:last-child)) {
          border-right: 1px solid var(--accents-2);
          padding-right: 8px;
        }

        .link-list :global(span:not(:first-child) a),
        .link-list :global(a:not(:only-child):not(:first-child)) {
          padding-left: 8px;
        }
      `}</style>
    </div>
  )
}
