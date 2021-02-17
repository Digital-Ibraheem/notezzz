import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import Note from '../components/Note'
import { Container } from 'react-bootstrap'

const Notes = () => {
    const { notes, setNotes } = useContext(Context)
    const [fetched, setFetched] = useState(false)

    let noNotes = fetched ? notes.length <= 0 && "You have no notes" : "Loading..."
    let notesMap = fetched && notes.map(
        note => (
            <Note key={note.id} note={note} />
        )
    )

    useEffect(() => {
        setFetched(false)
        fetch('/notes').then(res => {
            if (res.ok) {
                setFetched(true)
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))
    }, [])

    return (
        <Container>
            <h2 className='mt-3'>{noNotes}</h2>
            {notesMap}
        </Container>
    )
}

export default Notes
