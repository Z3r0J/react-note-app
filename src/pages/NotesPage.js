import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'

const NotesPage = () => {
    return (
    <div>
        {notes.map((note,index)=>(
            <ListItem key={index} note={note}/>
        ))}
    </div>
    )
}

export default NotesPage;