import { atom } from 'jotai'
import { Todo } from '../types/types'

export const todosAtom = atom<Todo[]>([])
