import React from "react"
import './GridRoom.css'

export default function GridRoom() {
    return ( 
      <div className='gridbody'>
        <div className='stage'>
          <div className='spin x-spin'>
            <div className='spin y-spin'>
              <div className='spin z-spin'>
                <div className='spin object cube'>
                  <div className='face face-1'></div>
                  <div className='face face-2'></div>
                  <div className='face face-3'></div>
                  <div className='face face-4'></div>
                  <div className='face face-5'></div>
                  <div className='face face-6'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};