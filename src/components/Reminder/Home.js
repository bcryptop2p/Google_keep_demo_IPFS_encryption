import { Divider } from '@mui/material';
import React from 'react';
import Masonry from 'react-masonry-css';
import TakeNote from './TakeNote';

const PinnedNote = (props) => { 
    if(props.actions.pinned_id){
      
      return (
      <div className="pinned">
        <h4>Pinned</h4>
        { props.actions.notes_list.filter(n=>{ return n.id === props.actions.pinned_id }).map((item,index)=>
        <p key={index} className="list-item" id="li">
          <span className="span1">{item.title} <button className="pin-button" onClick={e=>props.actions.removePin(item.id)}><img className="pin" src="./push-pin.png"/></button></span> 
          <span className="span2">{item.input}</span>
          <button className="list-button" onClick={e=>props.actions.removeFromNotes(index,item.id)}>delete</button>
        </p>
        )}
        <Divider/>
      </div>
      );
    }
    else {
        return null;
    }
}
const Home = (props) => { 
    return(
        <div>
        <TakeNote actions={props} />
        <div className="popup" style={props.showPopUp ? props.inputStyle : props.inputStyle1}>  
    
            <p className="text" >
              <span className="edit-title"><input value={props.edited_note.title} onChange={(e)=>props.handleChangeEditTitle(e.target.value)}/> <button onClick={e=>props.pinNote(props.popUp_id)}><img className="pin" src="./push-pin.png"/></button></span>
              <input value={props.edited_note.input} onChange={(e)=>props.handleChangeEditNote(e.target.value)} className="edit-input" />
              <button onClick={e=>props.updateNote(props.popUp_id)} className="close">close</button>
              <button onClick={e=>props.removeFromNotes(props.popUp_id)} className="delete">delete</button>
            </p>
        </div>
        <PinnedNote actions={props}/>
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            { props.notes_list && (!props.search ? props.notes_list : props.search_list).filter(n=>{ return ((n.id !== props.pinned_id) && (n.id !== props.popUp_id)) }).map((item,index)=>
              <li key={index} className="list-item" >
                <span className="span1">{item.title} <button className="pin-button" onClick={e=>props.pinNote(item.id)}><img className="pin" src="./push-pin.png"/></button></span> 
                <span className="span2">{item.input}</span> 
                <button className="list-button" onClick={e => props.showNote(item.id)}>Edit</button>
                <button className="list-button" onClick={e=>props.removeFromNotes(index, item.id)}>Delete</button></li>)}
          </Masonry>
        </ul>
         
        </div>
    );
}

export default Home;