import axios from 'axios';
import cryptoJs from 'crypto-js';
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'

function NoteView(props) { 
    // const [urlData, setUrlData] = useState();
    // const [data, setData] = useState();
    // const [update, setUpdate] = useState(false);

    // function decryptData(encrypted, iv, key) {
    //     console.log(encrypted, iv, key, "key");
    //     var decrypted = cryptoJs.AES.decrypt(encrypted, key, {
    //         iv: iv,
    //         mode: cryptoJs.mode.CBC,
    //         padding: cryptoJs.pad.Pkcs7
    //     });
    //     return decrypted.toString(cryptoJs.enc.Utf8);
    // }

    // useEffect(() => {
    //     var array = [];
    //     var iv = cryptoJs.enc.Base64.parse("");
    //     var key = cryptoJs.SHA256("test123"); 
    //     props.notes_list && (!props.search ? props.notes_list : props.search_list).filter(n => { return ((n.id !== props.pinned_id) && (n.id !== props.popUp_id)) }).map(async (item, index) => {
    //         console.log(item, "item"); 
    //         const res = await axios.get(item.url);  
    //        var decryptTitle = decryptData(res.data.title.toString(), iv, key);
    //         var decryptInput = decryptData(res.data.input.toString(), iv, key);
    //         const decDeta = {
    //                 id: res.data.id,
    //                 title: decryptTitle,
    //                 input: decryptInput,
    //             }

    //         array.push(decDeta);
    //         console.log(decDeta, "res");
    //     });
    //     setData(array); 
    // }, [props])

    // useEffect(async () => {
    //     var arrayData = [];
    //     var iv = cryptoJs.enc.Base64.parse("");
    //     var key = cryptoJs.SHA256("test123");  
    //     data && data.map((e) => {
    //         var decryptTitle = decryptData(e.title.toString(), iv, key);
    //         var decryptInput = decryptData(e.input.toString(), iv, key);
    //         const decDeta = {
    //             id: e.id,
    //             title: decryptTitle,
    //             input: decryptInput,
    //         }
    //         arrayData.push(decDeta);
    //     })
    //     setUrlData(arrayData);
    //     setUpdate(!update);
    // }, [update])

    // console.log(data, "data");



    return (
        <ul>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {props.notes_list && (!props.search ? props.notes_list : props.search_list).filter(n => { return ((n.id !== props.pinned_id) && (n.id !== props.popUp_id)) }).map((item, index) =>
                <li key={index} className="list-item" >
                    <span className="span1">{item.title} <button className="pin-button" onClick={e => props.pinNote(item.id)}><img className="pin" src="./push-pin.png" /></button></span>
                    <span className="span2">{item.input}</span>
                    <button className="list-button" onClick={e => props.showNote(item.id)}>Edit</button>
               <button className="list-button" onClick={e => props.removeFromNotes(index, item.id)}>Delete</button></li>)
            }
            </Masonry>
        </ul>
    )
}

export default NoteView