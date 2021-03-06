import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import FoodCard from './FoodCard'

const Food = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/Food')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/Food/' + id, {
      method: 'DELETE'
    })
    const newFood = notes.filter(note => Node.id != id)
    setNotes(newFood)
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={3}> 
          <FoodCard note={note} handleDelete={handleDelete} />
        </Grid>
        ))}
      </Grid>
    </Container>
  )
}

// Auflisten der ganzen Lebensmittel aus einer Datenbank

export default Food