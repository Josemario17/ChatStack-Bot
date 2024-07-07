import { ReactDOM, useEffect } from 'react'
import { useState } from 'react'
import AppRoutes from './Routes'
import ChatBotYY from './Chat/ChatGemini'

function App() {
  return (
    <>
      <div className='w-screen h-screen px-10 py-10'>
        <AppRoutes></AppRoutes>
      </div>
    </>
  )
}

export default App
