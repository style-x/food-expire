import React, { useEffect, useState } from 'react'

const Food = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/Schrank')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>{ note.name }</p>
      ))}
    </div>
  )
}

// Auflisten der ganzen Lebensmittel aus einer Datenbank

export default Food