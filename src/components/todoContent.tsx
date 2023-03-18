import React from 'react'
import { Todo } from '../types/types'
import { useAtom } from 'jotai'
import { todosAtom } from '../services/atoms'

type Props = {
  todo: Todo
}

const TodoContent = ({ todo }: Props) => {
  const [todos, setTodos] = useAtom(todosAtom)

  const handleCheck = () => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, complete: !t.complete }
      }
      return t
    })
    setTodos(newTodos)
  }

  const handleClick = () => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, delete: !t.delete }
      }
      return t
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <li>
        <input type="checkbox" checked={todo.complete} onChange={handleCheck} />
        <span>{todo.title}</span>
        <button onClick={handleClick}>
          {todo.delete ? 'restore' : 'delete'}
        </button>
      </li>
    </div>
  )
}

export default TodoContent
