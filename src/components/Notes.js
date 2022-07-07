import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { useState ,useRef} from 'react' 
import NoteView from './NoteView';

const NoteInput = styled.form`
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),
    0 2px 6px 2px rgba(60,64,67,.15);
  width:600px;
  border-radius:8px;
  margin:20px auto;
  padding:20px;
  `

const Title = styled.input`
    border:none;
    color:#000;
    display:block;
    width:100%;
    font-size:18px;
    margin:10px 0;
    outline:none;
    &::placeholder{
      color:#3c4043;
      opacity:1;
    }
  `

const TextArea = styled.textarea`
      border:none;
      color:#000;
      display:block;
      width:100%;
      font-family: 'Noto Sans', sans-serif;
      font-size:13px;
      font-weight:bold;
      outline:none;
      resize: none;
      overflow: hidden;
      min-height: 10px;
      &::placeholder{
        color:#3c4043;
        opacity:1;
      }
  `

  const NoteCon = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:center;
`

  
function Notes() {
  const [showInput, setShowInput] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [titleFocus, setTitleFocus] = useState(false);
  const [textFocus, setTextFocus] = useState(false);
  const [notes, setNotes] = useState([]);

  const textAreaRef = useRef(null);

  const autoGrow = (elem) =>{
    elem.current.style.height = "5px";
    elem.current.style.height = (10 + 
    elem.current.scrollHeight)+"px";
  }

  const blurOut = () => {
    console.log("click");
   
      
      if(textValue !== '' || titleValue !== ''){
        console.log("click22");
        setShowInput(false)
        let noteObj = {
          title:titleValue,
          text:textValue
        }
        setNotes([...notes, noteObj])
        setTextValue('');
        setTitleValue('')
      } 
  };


  return (
    <>
      <NoteInput action="">
        <Title type="text" name="" id=""
          placeholder="Title"
          value={titleValue}
          onFocus={()=>setTitleFocus(true)}
          onBlur={()=>setTitleFocus(false)}
          onChange={(e) => setTitleValue(e.target.value)} />

        <TextArea name="" id="" cols="30" rows="1"
          placeholder="Take a note..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          onInput={()=>autoGrow(textAreaRef)} ref={textAreaRef}  
          onFocus={()=> {
            setTextFocus(true);
            textAreaRef.current.focus(); 
          }}
        />

<Button className='mt-3' onClick={()=>blurOut()} variant='contained'>Done</Button>

        <NoteView note={notes}/>
      </NoteInput>
    </>
  )
}

export default Notes