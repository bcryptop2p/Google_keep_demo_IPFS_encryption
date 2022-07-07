import React, { useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';

import draftjsToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import draftToMarkdown from 'draftjs-to-markdown';
import { Button } from '@mui/material'; 


function Landing() {
    const { editorState } = EditorState.createEmpty();
    const [editData, setEditData] = useState(editorState);
    const [arryData, setArryData] = useState([]);
    const [note, setNote] = useState('');

    const onEditorStateChange = (e) => {
        setEditData(e);
    }

    // onEditorStateChange: Function = (editorState) => {
    //     setEditData({
    //         editorState,
    //     });
    // }; 

    // console.log(draftjsToHtml(convertToRaw(editData && editData.getCurrentContent())), "dd");
    //  const data = editData != undefined && draftjsToHtml(convertToRaw(editData && editData.getCurrentContent()));
    // var ard = [];

    useEffect(() => {
        const draff = editData && draftToMarkdown(convertToRaw(editData.getCurrentContent()));
        setNote(draff);
    }, [editData])

    const handleDone = () => setArryData(prev => ([
        ...prev,
        { note }
    ]),
        (setNote(""))
    );


    return (
        <div>
            <h1>Editor</h1> 
            <div className='container'>
                <div className="row">
                    <div className='col-8'>
                        <Editor
                            style={{ border: '1px solid blue' }}
                            editorState={editData}
                            toolbarClassName="toolbar ClassName"
                            wrapperClassName="wrapper ClassName"
                            editorClassName="editor ClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                        <Button className='mt-3' onClick={handleDone} variant='contained'>Done</Button>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className='col-8'>
                        {
                            arryData && arryData.map((e, i) => {
                                return (
                                    <div key={i}>
{i}
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing