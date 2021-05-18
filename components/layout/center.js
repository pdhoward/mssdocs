function Center({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row wrap;
          justify-content: center;
          text-align: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Center
