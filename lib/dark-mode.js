const isServer = typeof window === 'undefined'

export function getDarkMode() {
  if (!isServer) {
    return window.isDark
  }
  return false
}

export function setDarkModeFlag(flag) {
  if (flag) {
    try {
      window.localStorage.setItem('zeit-dark-mode', '1')
      document.querySelector('html').classList.add('dark-theme')
      window.isDark = true
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  } else {
    try {
      window.localStorage.removeItem('zeit-dark-mode')
      document.querySelector('html').classList.remove('dark-theme')
      window.isDark = false
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }
}

export function setDesignDarkMode() {
  if (window.isDark) {
    document.querySelector('html').classList.remove('dark-theme')
    window.isDark = false
  } else {
    document.querySelector('html').classList.add('dark-theme')
    window.isDark = true
  }
}
