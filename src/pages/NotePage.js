import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg'
import { Link } from 'react-router-dom';
import { __esModule } from 'react-router-dom/cjs/react-router-dom.min';
 
function NotePage({match}) {
    let noteId = match.params.id;
    let [note, setNote] = useState(null);

    useEffect(()=>{
        let noteId = match.params.id;
        getNotes();
    },[noteId]);

    let getNotes = async() =>{
    let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`);
    let data = await response.json();
        setNote(data);
    };

  return (
    <div className="note">
        <div className="note-header">
            <h3>
                <Link to="/">
                    <ArrowLeft/>
                </Link>
            </h3>
        </div>
        <textarea value={note?.body}></textarea>
    </div>
  )
}
 
export default NotePage