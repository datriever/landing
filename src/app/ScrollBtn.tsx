'use client'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export type Props = JSX.IntrinsicElements['a'] & { to: string }

export function ScrollBtn({ to, ...props }: Props) {
  return (
    <a {...props} onClick={e => { e.preventDefault(); scrollTo(to)}} />
  )
}

export default ScrollBtn