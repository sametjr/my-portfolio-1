import React from 'react'

const Vertical = (props) => {
    const style = {
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundColor: props.color,
        margin: '0 20px'
    }
  return (
    <div style={style}></div>
  )
}

export default Vertical