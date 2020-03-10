import React from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'

class NoteList extends React.Component {
notes = this.props.notes;
    render() { 
    if (this.props.folders.id) {
      notes = this.notes.filter(note => 
        note.folderId == this.props.folders.id
      )
    }
    this.notes.map(note => 
        <Note content=''name="note.name" modified="note.modified"/> )
}

export default NoteList 