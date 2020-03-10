import React from 'react'
import { Link } from 'react-router-dom'

class FolderList extends React.Component {
  render() {
    return (<ul>
      {this.props.folders.map(folder => <Link to={`/folder/${folder.id}`}><li onClick={() => this.props.folderFilter(folder.id)}>
        {folder.name}
      </li></Link>)}
    </ul>)
  }
}

export default FolderList;