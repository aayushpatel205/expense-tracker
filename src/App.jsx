import React from 'react'
import Header from './components/Header'
import History from './components/History'
import AddTransaction from './components/AddTransaction'

const App = () => {
  return (
    <div className='h-dvh w-dvw flex justify-center items-center'>
      <div className='w-[310px] flex flex-col gap-2'>
          <Header/>
          <History/>
          <AddTransaction/>
      </div>
    </div>
  )
}

export default App