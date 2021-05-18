const TabSwitcher = ({ children }) => (
  <div className="tab-switcher">
    {children}

    <style jsx>{`
      .tab-switcher {
        border-radius: 4px;
        border: 1px solid #eaeaea;
        margin-bottom: 16px;
        display: inline-flex;
        overflow: hidden;
        background: white;
      }

      .tab-switcher :global(a) {
        font-size: 12px;
        height: 28px;
        position: relative;
        padding: 0 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 128px;
        font-weight: 200;
        transition: background 0.12s ease;
      }

      .tab-switcher :global(a):hover {
        background: #fafafa;
      }

      .tab-switcher :global(a:not(:last-child))::after {
        content: '';
        border-right: 1px solid #eaeaea;
        height: 16px;
        position: absolute;
        right: 0;
      }

      .tab-switcher :global(a.active) {
        font-weight: 500;
      }
    `}</style>
  </div>
)

export default TabSwitcher
