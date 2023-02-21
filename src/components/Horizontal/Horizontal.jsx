import React from 'react'

const Horizontal = (props) => {
    const style = {
        width: `${props.width}%`,
        height: props.height,
        backgroundColor: props.color,
        margin: '20px 0',
        display: "inline-block"
    }
  return (
    <div className='horizontal' style={style}></div>
  )
}

export default Horizontal