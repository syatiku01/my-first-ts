export type Todo = {
  id: string
  title: string
  complete: boolean
  delete: boolean
}

export type Toggle = 'all' | 'notcompleted' | 'completed' | 'deleted'
