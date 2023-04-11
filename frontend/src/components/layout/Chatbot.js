
import React from 'react'


const Chatbot = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-4'>          
            <iframe
              title="generalVisual"
              
              height="500px"
              width="100%"
              src="https://widget.kommunicate.io/chat?appId=3decbf70ef307e696608fce571926916e"
              allow="microphone; geolocation;"></iframe>
        </div>
      </div>
    </div>    
  
  )
}

export default Chatbot
