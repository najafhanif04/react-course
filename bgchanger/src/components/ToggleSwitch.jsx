import React, { useState } from 'react'

export default function ToggleSwitch() {

    const [active, inactive] = useState(false)

    const handleToggleSwitch = () => {
        inactive(!active);
    }

  return (
    <>
    <div className='toggle-switch' onClick={handleToggleSwitch}>
        <div className='switch'>
            <span className={active ? "text-white bg-green-600" : "text-white bg-red-600"}>{active ? "Active" : "In-Active"}</span>
        </div>
    </div>
    </>
  )
}
