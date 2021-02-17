import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Note = ({ note }) => {

    return (
        <Link className='link' to={`/notes/${note._id}`}>
            <Card className='mt-4'>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link >
    )
}

export default Note
