import React from 'react'
import { Link } from 'react-router-dom'

class Note extends React.Component {
render () {
    return (
        <li>{this.props.name}
            <p>{this.props.modified}</p>
            <button>Delete Note</button>
        </li>
    )
}
}


export default Note