import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg'
import { Link } from 'react-router-dom';

function NotePage({match, history}) {
    let noteId = match.params.id;
    let [note, setNote] = useState(null);

    useEffect(()=>{
        let noteId = match.params.id;
        getNotes();
    },[noteId]);

    let getNotes = async() =>{
        if(noteId  === 'new') return

    let response = await fetch(`https://json-note-server.herokuapp.com/notes/${noteId}`);
    let data = await response.json();
        setNote(data);
    };

    let createNote = async() =>{
        await fetch(`https://json-note-server.herokuapp.com/notes/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...note,'updated':new Date()})
        })
    };

    let updateNote = async() =>{
        await fetch(`https://json-note-server.herokuapp.com/notes/${noteId}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...note,'updated':new Date()})
        })
    };

    let deleteNote = async () => {
        await fetch(`https://json-note-server.herokuapp.com/notes/${noteId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
        history.push('/');
    }
    

    let handleSubmit = () =>{

        if(noteId !== 'new' && !note.body){
            deleteNote()
        }  
        else if(noteId !== 'new'){
            updateNote()
        }
        else if(noteId === 'new' && note!==null){
            createNote()
        }
        history.push('/')
    }
  return (
    <div className="note">
        <div className="note-header">
            <h3>
                <Link to="/">
                    <ArrowLeft onClick={handleSubmit}/>
                </Link>
            </h3>
            {
                noteId!=='new'?(
                    <button onClick={deleteNote}>Delete</button>
                ):(
                    <button onClick={handleSubmit}>Done</button>
                )
            }
            
        </div>
        <textarea onChange={(e)=> {setNote({...note,'body':e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}
 
export default NotePage