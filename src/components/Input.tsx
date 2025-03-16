import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </>
  )
})

export default Input
