import React from 'react'
import NoteList from './NoteList'
import { Link } from 'react-router-dom'

class FolderList extends React.Component {
  defaultProps = {
    state: {
      folders: {},
      notes: {}
    }
  }
  render() {
    const folders = this.props.folders;
    const notes = this.props.notes;
    console.log(folders)
    console.log(notes)
    return (<>
      <FolderList folders={folders} folderFilter={"b0715efe - ffaf - 11e8 - 8e b2-f2801f1b9fd1"} />
      <NoteList notes={notes} folders={folders} filterId={false} />
      <Link to='/NewNote'>New Note</Link>
    </>)
  }
}


export default FolderList