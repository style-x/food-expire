import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import FoodCard from './FoodCard'

const Food = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/Food')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <Container>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={3}> 
          <FoodCard note={note} />
        </Grid>
        ))}
      </Grid>
    </Container>
  )
}

// Auflisten der ganzen Lebensmittel aus einer Datenbank

export default Food