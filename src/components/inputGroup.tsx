import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { Todo } from '../types/types'
import { todosAtom } from '../services/atoms'
import { nanoid } from 'nanoid'

const InputGroup = () => {
  const [text, setText] = useState<string>('')
  const [todos, setTodos] = useAtom(todosAtom)

  const handleClick = () => {
    const id = nanoid(5)
    setTodos([
      ...todos,
      { id: id, title: text, complete: false, delete: false }
    ])
    console.log(todos)
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default InputGroup
