import React, { useContext, useRef } from 'react'

import Toast from './toast'
import Portal from '~/components/portal'

export const ToastsContext = React.createContext()
export const useToasts = () => useContext(ToastsContext)

export function withToasts(Component) {
  let Comp = function({ ...props }) {
    const currentToasts = useToasts()
    const toastsRef = useRef(null)

    // If there is already a toast ref, return it
    if (currentToasts && currentToasts.current) {
      return <Component {...props} />
    }

    return (
      <ToastsContext.Provider value={toastsRef}>
        <>
          <Component {...props} />
          <Toasts ref={toastsRef} />
        </>
      </ToastsContext.Provider>
    )
  }
  Comp.getInitialProps = Component.getInitialProps
  return Comp
}

class Toasts extends React.Component {
  state = {
    hovering: false,
    messages: [],
    removed: new Set(),
    offset: 0,
    opacity: 1
  }

  message = toastMessage => {
    const { messages } = this.state
    const message =
      typeof toastMessage === 'string' ? { text: toastMessage } : toastMessage

    this.setState({
      messages: [
        ...messages,
        {
          ...message,
          key: Date.now()
        }
      ]
    })
  }

  // only showing 1 toast
  setMessage = toastMessage => {
    this.setState({
      messages: [toastMessage]
    })
  }
  setHiding = () => {
    this.setState({
      messages: this.state.messages.map(message => ({
        ...message,
        shouldHide: true
      }))
    })
  }

  error = toastMessage => {
    const message = toastMessage
      ? typeof toastMessage === 'string'
        ? { text: toastMessage }
        : toastMessage
      : { text: 'An error occurred.' }

    this.message({ ...message, type: 'error' })
  }

  success = toastMessage => {
    const message = toastMessage
      ? typeof toastMessage === 'string'
        ? { text: toastMessage }
        : toastMessage
      : { text: 'Success!' }

    this.message({ ...message, type: 'success ' })
  }

  onMouseEnter = () => {
    this.setState({ hovering: true })
  }

  onMouseLeave = () => {
    this.setState({ hovering: false })
  }

  removeToast = message => {
    const { removed } = this.state
    removed.add(message)

    this.setState({ removed })
  }

  clear = () => {
    this.setState({ messages: [], removed: new Set() })
  }

  render() {
    // const { } = this.state
    const { messages: allMessages, removed } = this.state
    const { center, dark } = this.props
    const messages = allMessages.filter(message => !removed.has(message))

    return (
      <Portal>
        <div
          className="toast-area"
          onMouseEnter={this.onMouseEnter}
          onTouchStart={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onTouchEnd={this.onMouseLeave}
        >
          {messages.map((message, i) => (
            <Toast
              key={message.key}
              index={i}
              length={messages.length}
              hovering={this.state.hovering}
              remove={() => this.removeToast(message)}
              dark={dark}
              {...message}
            />
          ))}
          <style jsx>
            {`
              .toast-area {
                position: fixed;
                bottom: 10px;
                right: ${center ? 'calc(50% - 210px)' : '20px'};
                max-width: 420px;
                z-index: 2000;
                transition: transform 0.4s ease;
              }

              .toast-area:hover {
                ${messages.length > 1
                  ? 'transform: translate3d(0, -10px, 0);'
                  : ''};
              }

              @media (max-width: 440px) {
                .toast-area {
                  max-width: 90vw;
                  right: 5vw;
                }
              }
            `}
          </style>
        </div>
      </Portal>
    )
  }
}

export default Toasts
