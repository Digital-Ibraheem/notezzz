import React, { useContext, useEffect } from 'react'
import Context from '../Context'
import { Container, Form } from 'react-bootstrap'

const Create = () => {
    const { note, handleChange, handleClick, setNote, isEmpty } = useContext(Context)

    useEffect(() => {
        setNote({ title: '', text: '' })
    }, [])

    return (
        <Container>
            {isEmpty && <button style={{ width: '100%' }} class="alert alert-danger alert-dismissible fade show" role="alert">
                <span className='float-left'>
                    <strong>Oops!</strong> Looks you forget to fill in all the fields
                </span>
            </button>}
            <Form className='mt-4'>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        value={note.title}
                        type="text"
                        name='title'
                        placeholder="Enter your note's title here"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Text</Form.Label>
                    <input
                        onChange={handleChange}
                        className='form-control'
                        value={note.text}
                        type="text"
                        name='text'
                        placeholder="Enter your note's text here"
                    />
                </Form.Group>

                <button type='submit' onClick={handleClick} className='btn btn-dark'>
                    Add note
                </button>
            </Form>
        </Container >
    )
}

export default Create
