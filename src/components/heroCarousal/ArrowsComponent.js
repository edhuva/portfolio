import React from 'react'

export const NextArrow = (props) => {
    
    return (
        <>
         <div className={props.className} style={{ ...props.style, backgroundColor: 'hsl(0, 0%, 0%, 0.6)', width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}} onClick={props.onClick} />
        </>
    )
}

export const PrevArrow = (props) => {
    
    return (
        <>
        <div className={props.className} style={{ ...props.style, backgroundColor: 'hsl(0, 0%, 0%, 0.6)', width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'}} onClick={props.onClick} />
        </>
    )
}

const ArrowsComponent = () => {
  return (
    <>
    </>
  )
}

export default ArrowsComponent
