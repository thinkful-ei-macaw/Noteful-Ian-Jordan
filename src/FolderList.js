import React from 'react'
import { Link } from 'react-router-dom'

class FolderList extends React.Component {
  render() {
    return (<ul>
      {this.props.folders.map(folder => <li>
        <Link to={`/folder/${folder.id}`}>
          {folder.name}
        </Link>
      </li>)}
    </ul>)
  }
}

export default FolderList;