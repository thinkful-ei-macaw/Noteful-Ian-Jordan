import React from 'react'
import { Link } from 'react-router-dom'

class Note extends React.Component {


    render() {
        if (this.props.notes.length) {
            const note = this.props.notes.find(n => n.id === this.props.match.params.noteId)
            return (
                <li>{note.name}
                    <p>{note.modified}</p>
                    <p>{note.content}</p>
                    <button>Delete Note</button>
                </li>
            )
        } else {
            return null
        }

    }
}


export default Note