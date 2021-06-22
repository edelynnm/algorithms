import React from 'react';
import 'bulma/css/bulma.min.css';

const Sidebar = () => {
   const fileTree = [{title: 'Item 1'}, {title: 'Item 2'}, {title: 'Item 3'}]
  return (
    <div style={{"flexDirection": 'row', display: "flex"}}>
    <div id="icon-menu">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    </div>

    <div className="m-4">
      <aside class="menu">
        <p class="menu-label">
          Explorer
        </p>
        <ul class="menu-list">
          { fileTree.map((file) => [
            <li className="is-size-6">{file.title}</li>
          ])}
        </ul>
      </aside>
    </div>
    </div>
  )
}

export default Sidebar;
