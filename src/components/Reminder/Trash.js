import React from 'react';
import Masonry from 'react-masonry-css';
import { NoteContext } from '../../context/CreateNoteContext';

const Trash = () => {  
  const notContext = React.useContext(NoteContext);
  const { trash_list, removeFromTrash} = notContext;
    return(
        <div>
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            { trash_list &&  trash_list.map((item,index)=>
              <li key={index} className="trash-item" >
                <span className="span1">{ item.title}</span> 
                <span className="span2">{ item.input}</span> 
                <button onClick={e=> removeFromTrash(item.id)} className="delete-forever"><img className="del-forever" src="./del1.png"/></button>
              </li>)}
          </Masonry>
        </ul>
        </div>
    );
}

export default Trash;