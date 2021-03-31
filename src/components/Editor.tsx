import { BlockType } from '../types'
import Block from './Block';

interface Props {
  id: string,
  blocksToDisplay: Array<BlockType>,
  allBlocks: Array<BlockType>,
  handleContentChange(e: any, id: string): any,
  handleTypeChange(id: string, value: string): any,
  handleColorChange(id: string, value: string): any,
  handleAdd(): any,
  handleDelete(id: string): any,
  handleIndent(id: string, blocks: Array<BlockType>): any,
  handleIndentEvent(id: string, editorId: string): any,
  handleOutdent(id: string, parent: string): any,
  emptyBlock(id: string): any
}

export default function Editor(props: Props) {

  function indent(id: string, editorId: string) {
    if (editorId === props.id) {
      props.handleIndent(id, props.blocksToDisplay)
    }
  }

  return (
    <div className="Editor">
      {props.blocksToDisplay.map((block: BlockType) => {
        const children = props.allBlocks.filter(bl => bl.parent === block.id)
        return (
          <Block
            key={block.id}
            id={block.id}
            editorId={props.id}
            type={block.type}
            color={block.color}
            content={block.content}
            parent={block.parent}
            children={children}
            blocks={props.allBlocks}
            blockLength={props.blocksToDisplay.length}
            handleContentChange={props.handleContentChange}
            handleTypeChange={props.handleTypeChange}
            handleColorChange={props.handleColorChange}
            handleAdd={props.handleAdd}
            handleDelete={props.handleDelete}
            handleIndent={props.handleIndent}
            handleIndentEvent={indent}
            handleOutdent={props.handleOutdent}
            emptyBlock={props.emptyBlock}
          />
        )
      })}
    </div>
  )
}