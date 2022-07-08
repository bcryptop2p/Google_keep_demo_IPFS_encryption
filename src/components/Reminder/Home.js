import { Divider } from '@mui/material';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import TakeNote from './TakeNote';
import { NoteContext } from "../../context/CreateNoteContext";
import NoteView from './NoteView';

const PinnedNote = () => {
  const notContext = React.useContext(NoteContext);
  const { pinned_id, notes_list, removeFromNotes, removePin } = notContext; 
  
  if (pinned_id) {
    return (
      <div className="pinned">
        <h4>Pinned</h4>
        {notes_list.filter(n => { return n.id === pinned_id }).map((item, index) =>
          <p key={index} className="list-item" id="li">
            <span className="span1">{item.title} <button className="pin-button" onClick={e => removePin(item.id)}><img className="pin" src="./push-pin.png" /></button></span>
            <span className="span2">{item.input}</span>
            <button className="list-button" onClick={e => removeFromNotes(index, item.id)}>delete</button>
          </p>
        )}
        <Divider />
      </div>
    );
  }
  else {
    return null;
  }
}
const Home = () => {
  const notContext = React.useContext(NoteContext);
  const { pinned_id,
    notes_list,
    showPopUp,
    editNote,
    popUp_id,
    search,
    search_list,
    pinNote,
    updateNote,
    removeFromNotes,
    showNote,
    handleChangeEditNote,
    handleChangeEditTitle,
    styles, } = notContext;
  return (
    <div>
      <TakeNote />
      <div className="popup" style={showPopUp ? styles.inputStyle : styles.inputStyle1}>
        <p className="text" >
          <span className="edit-title"><input value={editNote.title} onChange={(e) => handleChangeEditTitle(e.target.value)} /> <button onClick={e => pinNote(popUp_id)}><img className="pin" src="./push-pin.png" /></button></span>
          <input value={editNote.input} onChange={(e) => handleChangeEditNote(e.target.value)} className="edit-input" />
          <button onClick={e => updateNote(popUp_id)} className="close">Save</button>
          <button onClick={e => removeFromNotes(popUp_id)} className="delete">delete</button>
        </p>
      </div>
      <PinnedNote /> 
      <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {  notes_list && (! search ?  notes_list :  search_list).filter(n=>{ return ((n.id !==  pinned_id) && (n.id !==  popUp_id)) }).map((item,index)=>
              <li key={index} className="list-item" >
                <span className="span1">{item.title} <button className="pin-button" onClick={e=> pinNote(item.id)}><img className="pin" src="./push-pin.png"/></button></span> 
                <span className="span2">{item.input}</span> 
                <button className="list-button" onClick={e =>  showNote(item.id)}>Edit</button>
                <button className="list-button" onClick={e=> removeFromNotes(index, item.id)}>Delete</button></li>)}
          </Masonry>
        </ul>

    </div>
  );
}

export default Home;