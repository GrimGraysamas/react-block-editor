export interface BlockType {
  id: string,
  type: 'base' | 'heading',
  content: string,
  color: string,
  parent: string
}