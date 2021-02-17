import React, { useState, createContext } from 'react'
import axios from 'axios'


export const ContextProvider = ({ children }) => {
    const [note, setNote] = useState({ title: '', text: '' })
    const [notes, setNotes] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)

    function handleChange(e) {
        setIsEmpty(false)
        const { name, value } = e.target
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    async function deleteNote(id) {
        await axios.delete(`http://localhost:3001/notes/${id}`)
            .then(res => res.data)
    }

    async function updateNote(id) {
        setIsEmpty(false)
        await axios.put(`http://localhost:3001/notes/${id}`, note)
    }

    function handleClick(e) {
        e.preventDefault()
        if (note.title === '' || note.text === '') {
            setIsEmpty(true)
        } else {
            const newNote = {
                title: note.title,
                text: note.text
            }
            axios.post('http://localhost:3001/create', newNote)
            setNote({ title: '', text: '' })
        }
    }

    return (
        <div>
            <Context.Provider value={{ isEmpty, setIsEmpty, setNotes, updateNote, deleteNote, handleChange, note, setNote, handleClick, notes }}>
                {children}
            </Context.Provider>
        </div>
    )
}

const Context = createContext()

export default Context



