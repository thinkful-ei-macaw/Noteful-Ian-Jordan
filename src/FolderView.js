import React from 'react'
import NoteList from './NoteList'
import { Link } from 'react-router-dom'
import FolderList from './FolderList'

class FolderView extends React.Component {

  render() {
    const folders = this.props.folders;
    const notes = this.props.notes;

    return (<>
      <FolderList folders={folders} />
      <NoteList notes={notes.filter(n => n.folderId === this.props.match.params.folderId)} folders={folders} filterId={false} />
      <Link to='/NewNote'>New Note</Link>
    </>)
  }
}


export default FolderView