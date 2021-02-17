import React, { useEffect, useState, useContext } from 'react'
import Context from '../Context'
import { useParams, Link } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'


const NotePage = () => {
    const { id } = useParams()
    const { deleteNote, handleChange, note, setNote, updateNote } = useContext(Context)

    useEffect(() => {
        fetch(`/notes/${id}`).then(res => {
            if (res.ok) {
                console.log(note)
                return res.json()
            }
        }).then(jsonRes => setNote(jsonRes))
    }, [])

    return (
        <Container className='mt-4'>
            <Link to='/notes'>
                <button className='btn btn-dark mb-3'>Go back</button>
            </Link>
            <h1>
                <input onChange={handleChange} name='title' value={note.title} className='text-lowercase input'></input>
            </h1>
            <textarea onChange={handleChange} name='text' className='input' value={note.text} />
            <br />
            <Link to='/notes'>
                <button className='btn btn-success mt-3' onClick={() => updateNote(note._id)}>
                    Update note
                </button>
            </Link>
            <hr />
            <Link to='/notes'>
                <button className='btn btn-danger mb-2' onClick={() => deleteNote(note._id)}>
                    Delete note
                </button>
            </Link>
        </Container>
    )
}

export default NotePage
