import React from "react"

const Heading = ({ title, title2, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <h1 style={{ color: '#070707' }}>{title2}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
