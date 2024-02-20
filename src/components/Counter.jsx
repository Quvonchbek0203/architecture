import React from 'react'

// components
import CountUp from 'react-countup';


const Counter = (props) => {
    const {startNum, endNum} = props
  return (
    <div>
        <CountUp 
        
        duration={10}
        end={endNum} 
        start={startNum}
        />
    </div>
  )
}

export default Counter