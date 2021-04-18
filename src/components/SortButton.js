import React from 'react'
import Button from '@material-ui/core/Button';

function SortButton() {
  const [sort, setSort] = React.useState(true);

  const handleClick = () => {
    setSort(!sort);
  };

  return (
    <Button 
      variant="outlined" 
      color={sort ? "primary" : "secondary"}
      onClick={handleClick}
    >
    Sort: {sort ? "Date" : "Addet"}
    </Button>
  );
}

export default SortButton
