export interface Gist {
  description: string
  updated_at: string
  created_at: string
  id: string
  files: {
    [key: string]: MarkdownFileObject
  }
}

interface MarkdownFileObject {
  filename: string
  type: string
  language: string
  size: number
  content: string
}
