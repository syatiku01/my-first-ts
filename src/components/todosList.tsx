import React from 'react'
import { useAtom } from 'jotai'
import { todosAtom } from '../services/atoms'
import TodoContent from './todoContent'
import { Todo, Toggle } from '../types/types'

type Props = {
  toggle: Toggle
}

const TodosList = ({ toggle }: Props) => {
  const [todos, setTodos] = useAtom(todosAtom)

  const handleClear = () => {
    const newTodos: Todo[] = todos.filter((todo) => todo.delete == false)
    setTodos([...newTodos])
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          switch (toggle) {
            case 'all':
              if (!todo.delete) return <TodoContent key={todo.id} todo={todo} />
              break
            case 'notcompleted':
              if (!todo.delete && !todo.complete)
                return <TodoContent key={todo.id} todo={todo} />
              break
            case 'completed':
              if (!todo.delete && todo.complete)
                return <TodoContent key={todo.id} todo={todo} />
              break
            case 'deleted':
              if (todo.delete) return <TodoContent key={todo.id} todo={todo} />
              break
          }
        })}
      </ul>

      {toggle == 'deleted' && <button onClick={handleClear}>clear</button>}
    </div>
  )
}

export default TodosList
