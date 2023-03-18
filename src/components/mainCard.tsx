import InputGroup from './inputGroup'
import TodosList from './todosList'
import { useState } from 'react'
import { Toggle } from '../types/types'

const MainCard = () => {
  const [toggle, setToggle] = useState<Toggle>('all')

  return (
    <div>
      <InputGroup />
      <TodosList toggle={toggle} />
      <button
        onClick={() => {
          setToggle('all')
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          setToggle('notcompleted')
        }}
      >
        not complete
      </button>
      <button
        onClick={() => {
          setToggle('completed')
        }}
      >
        completed
      </button>
      <button
        onClick={() => {
          setToggle('deleted')
        }}
      >
        deleted
      </button>
    </div>
  )
}

export default MainCard
