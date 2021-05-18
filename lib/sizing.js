const sizes = {
  large: 24,
  small: 16,
  default: 20
}

export const Size = 'small' | 'large'

export function getIxIconSize(size) {
  return sizes[size || 'default']
}