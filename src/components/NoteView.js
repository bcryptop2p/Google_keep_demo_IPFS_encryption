import React from 'react'
import styled from "styled-components";

const NoteDiv = styled.div`
padding:20px;
border:1px solid #e0e0e0;
border-radius:8px;
text-align:left;
font-size:18px;
margin:10px;
min-width:300px;
`
const H = styled.h3`
font-size:20px;
font-weight:bold;`

function NoteView(props) {
    console.log(props, "props");
    return (
        <NoteDiv>
            {
                props.note && props.note.map((e) => {
                    return (
                        <>
                            <H>{e.title}</H>
                            <p>{e.text}</p>
                        </>
                    )
                })
            }
        </NoteDiv>
    )
}

export default NoteView