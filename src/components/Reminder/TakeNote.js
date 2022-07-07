import React from 'react';

const TakeNote = (props) => {
    return(
        <div>
        {
            props.actions.visible === false
            ?
            <div className="take-notes1">
              <input type="text" placeholder="Take a note..." onClick={props.actions.handleClick} className="initial" value={props.actions.note.title} onChange={()=>null}/>
            </div>
            :
            <div className="take-notes2">
              <input type="text" value={props.actions.note.title} placeholder="Title" className="title" onChange={(e)=>props.actions.handleChangeTitle(e.target.value )}/><br></br>
              <input type="text" value={props.actions.note.input} placeholder="Take a note..." onChange={(e)=>props.actions.handleChangeNote(e.target.value)} className="take-note" autoFocus="autofocus " /> 
              <button onClick={props.actions.addToNotes}>Save</button>
              
            </div>
        }
        </div>
    );
}

export default TakeNote;