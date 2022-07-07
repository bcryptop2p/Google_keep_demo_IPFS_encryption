import React, { useEffect, useState } from 'react'
import Home from './Home';
import Trash from './Trash';

function Reminder() {
  const [search, setSearch] = useState(null);
  const [editNote, seteditNote] = useState({ title: "", input: "" });
  const [note, setNote] = useState({ title: "", input: "" });
  const [deleted, setDeleted] = useState({ title: "", input: "" });
  const [search_list, setSearch_list] = useState([]);
  const [notes_list, setNotes_list] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pinned_id, setPinned_id] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUp_id, setPopUp_id] = useState(null);
  const [trash_list, setTrash_list] = useState([]);
 const [isUpdate,setIsUpdate]= useState(false);

  useEffect(() => {
    const trash_string = localStorage.getItem('trash');
    const trash_lis = JSON.parse(trash_string);
    console.log(trash_list, "trash_lis");
    const list_string = localStorage.getItem('list');
    const not_list = JSON.parse(list_string);
    if (not_list != null) {
      setNotes_list(not_list);
    } 
    if (trash_lis != null) {
      setTrash_list(trash_lis);
    }
  }, [isUpdate])



  const handleClick = () => {
    setVisible(true);
  }

  const handleSearch = (value) => {
    if (value.length > 0) {
      setSearch(value);
      const dd = notes_list.filter(note => { return (note.title.includes(value) || note.input.includes(value)) });
      setSearch_list(dd)
    }
    else {
      setSearch(null);
      setSearch_list([])
    }
  }
  const handleChangeNote = (value) => {
    setNote({ input: value, title: note.title });
  }

  const handleChangeTitle = (value) => {
    setNote({ input: note.input, title: value });

  }

  const handleChangeEditNote = (value) => {
    seteditNote({ input: value, title: editNote.title });
  }

  const handleChangeEditTitle = (value) => {
    seteditNote({ input: editNote.input, title: value });

  }

  const addToNotes = () => {
    if ((note.input.length) > 0 || (note.title.length) > 0) {
      notes_list.unshift({
        id: Date.now(),
        ...note
      });

      setNote({ title: '', input: '' });
      setNotes_list(notes_list);
      setVisible(false);
      localStorage.setItem("list", JSON.stringify(notes_list));
      setIsUpdate(!setIsUpdate);
    }
    else {
      setVisible(false);
      setIsUpdate(!setIsUpdate);

    }
  }

  const removeFromNotes = (i, id) => {
    let deleted_note = notes_list.filter(item => { return item.id === id })[0]; 
    trash_list.unshift(deleted_note); 
    setTrash_list(trash_list);  
    const notes_li = notes_list.filter((note, index) => { return index !== i; }); 
    if (pinned_id) {
      setNotes_list(notes_li);
      setIsUpdate(!setIsUpdate); 
      setPinned_id(null);
    }
    else {
      setShowPopUp(false);
      setNotes_list(notes_li);
      setIsUpdate(!setIsUpdate);

    }
    localStorage.setItem("list", JSON.stringify(notes_li));
    localStorage.setItem("trash", JSON.stringify(trash_list));
    setIsUpdate(!setIsUpdate);

  }
  const pinNote = (id) => {
    setPinned_id(id);
  }
  const removePin = () => {
    setPinned_id(null);
  }
  const showNote = (id) => {
    let edited_note = notes_list.filter(item => { return item.id === id })[0];
    seteditNote(edited_note);
    setShowPopUp(true);
    setPopUp_id(id);
  }

  const updateNote = (id) => { 
    let containsOnlyOneElement = notes_list.length === 1;  
    setNotes_list((containsOnlyOneElement ? [{ id, ...editNote }] : [{ id, ...editNote }, ...notes_list.filter(item => item.id !== id)]));
    seteditNote({
      title: "",
      input: ""
    });
    setShowPopUp(false);
    setPopUp_id(null);
    setIsUpdate(!setIsUpdate);

  }
  const removeFromTrash = (id) => {
    console.log(id,"id");
    const trash_l = trash_list.filter((item) => { return item.id !== id }); 
    setTrash_list(trash_l);
    localStorage.setItem("trash", JSON.stringify(trash_l));
    setIsUpdate(!setIsUpdate);

  }

  let styles = {
    inputStyle: {
      display: 'flex'
    },
    inputStyle1: {
      display: 'none'
    }
  };


  return (
    <div>
      <Home
        pinned_id={pinned_id}
        notes_list={notes_list}
        showPopUp={showPopUp}
        edited_note={editNote}
        popUp_id={popUp_id}
        search={search}
        search_list={search_list}
        handleChangeNote={handleChangeNote}
        pinNote={pinNote}
        updateNote={updateNote}
        removeFromNotes={removeFromNotes}
        showNote={showNote}
        inputStyle={styles.inputStyle}
        inputStyle1={styles.inputStyle1}
        note={note}
        visible={visible}
        handleClick={handleClick}
        handleChangeTitle={handleChangeTitle}
        addToNotes={addToNotes}
        handleChangeEditNote={handleChangeEditNote}
        handleChangeEditTitle={handleChangeEditTitle}
        removePin={removePin}
      />
      <Trash removeFromTrash={removeFromTrash} trash_list={trash_list} styles={styles} />
    </div>
  )
}

export default Reminder