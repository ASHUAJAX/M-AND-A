import React from 'react';


interface ButtonCompProps {
  classname?: string,
  text: string,
  type: "button" | "submit" | "reset";
  varient?:string
}
function ButtonComp({ classname, text, type,varient }: ButtonCompProps) {
  return (
    <button type={type} className={`${classname} bg-primary px-4 p-2 rounded font-bold  ButtonComp ${varient === "fill" && "filled" }`}>
      {text}
    </button>
  )
}

export default ButtonComp