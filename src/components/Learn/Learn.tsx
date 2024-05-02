import React from 'react'
import Sidebar from './Sidebar'

function Learn() {
  return (
    <div className="flex">
              {/* Side bar */}
              <div className="bg-white max-w-xs h-screen overflow-y-auto md:min-w-[18rem] border-r border-gray-300">
                <Sidebar />
              </div>

              <div className="bg-white flex-1">

              </div>
            </div>
  )
}

export default Learn