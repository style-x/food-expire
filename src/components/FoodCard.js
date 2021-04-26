import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import Card from '@material-ui/core/Card'


export default function FoodCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={4}>
        <CardHeader 
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.name}
          subheader={note.details}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.expdate}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
