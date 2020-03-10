import React from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'

class NoteList extends React.Component {

  render() {
    let notes = this.props.notes;
    if (this.props.filterId) {
      notes = notes.filter(note =>
        note.folderId == this.props.filterId
      )
    }
    return (notes.map(note =>
      <li>
        <Link to={`/note/${note.id}`}>{note.name}</Link>
      </li>))
  }
}
export default NoteList 