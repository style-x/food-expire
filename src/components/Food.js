const Food = ({ food }) => {
  return (
    <>
      {food.map((food) => (
        <h3 key={food.id}>{food.text}</h3>
      ))}
    </>
  )
}

export default Food