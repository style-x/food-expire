// import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'


export default function FoodCard({ note }) {
  return (
    <div>
      <Card>
        <CardHeader 
          action={
            <IconButton onClick={() => console.log('delete', note.name)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.name}
          subheader={note.exp-date}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
