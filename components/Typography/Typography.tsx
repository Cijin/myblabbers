import { twMerge } from 'tailwind-merge'

export interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const Caption = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-xs lg:text-sm text-white'
  return <span className={twMerge(defaultClass, className)}>{children}</span>
}

export const P2 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-base text-white'
  return <p className={twMerge(defaultClass, className)}>{children}</p>
}

export const P1 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-lg text-white'
  return <p className={twMerge(defaultClass, className)}>{children}</p>
}

export const Sub2 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-xl text-white'
  return <span className={twMerge(defaultClass, className)}>{children}</span>
}

export const Sub1 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-header-3 text-white'
  return <span className={twMerge(defaultClass, className)}>{children}</span>
}

export const H6 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-base font-bold text-white'
  return <h6 className={twMerge(defaultClass, className)}>{children}</h6>
}

export const H5 = ({ children = '', className }: TypographyProps) => {
  const defaultClass =
    'text-base font-semibold lg:text-lg lg:font-bold text-white'
  return <h5 className={twMerge(defaultClass, className)}>{children}</h5>
}

export const H4 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-lg lg:text-xl font-bold text-white'
  return <h4 className={twMerge(defaultClass, className)}>{children}</h4>
}

export const H3 = ({ children = '', className }: TypographyProps) => {
  const defaultClass =
    'text-xl font-semibold lg:text-header-3 lg:font-bold text-white'
  return <h3 className={twMerge(defaultClass, className)}>{children}</h3>
}

export const H2 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-xl lg:text-header-2 font-bold text-white'
  return <h2 className={twMerge(defaultClass, className)}>{children}</h2>
}

export const H1 = ({ children = '', className }: TypographyProps) => {
  const defaultClass = 'text-header-3 lg:text-3xl font-bold text-white'
  return <h1 className={twMerge(defaultClass, className)}>{children}</h1>
}
