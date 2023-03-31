import React, { useState } from 'react'
import Array from './Object';

function Print() {
    const [filter , setFilter] = useState(
        Array.filter((item)=>item.name==="Tata")
    )
    
  return (
    <div>
        {filter.map((e)=>{
            return(
                <div>
                    {e.key}
                    {e.type}
                </div>
            )
        })}
    </div>
  )
}

export default Print;