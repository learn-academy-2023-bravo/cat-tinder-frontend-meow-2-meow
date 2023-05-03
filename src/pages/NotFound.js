import notFound from '../assets/cats_6128799_1280.jpg'

const NotFound = () => {
  return(
    <>
      <h3>No cat here</h3>
      <img
          src={notFound}
          alt="Cat Tinder Not Found"
          className="not-found"
        />

    </>
  )
}


export default NotFound