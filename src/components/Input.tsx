import { type ComponentPropsWithoutRef } from "react"

type InputProps= {label:string, id:string} & ComponentPropsWithoutRef<'input'>

function Input({label, id, ...props}:InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props}/>
    </div>
  )
}

export default Input