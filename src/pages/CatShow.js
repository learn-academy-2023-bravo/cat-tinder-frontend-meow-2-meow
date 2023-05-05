import {useParams, NavLink} from "react-router-dom"
import {Button} from 'reactstrap'
import React from "react"

const CatShow = ({cats, deleteCat}) => {
  const {id} = useParams()
  let selectedCat =  cats.find(cat => cat.id === +id)
  return(
    <main>
      {selectedCat && (
      <>
        <img
        alt='cat pic'
        src={selectedCat.image}
        />
        <h3>
          {selectedCat.name} likes {selectedCat.enjoys}
        </h3>
        
      </>
    )}
    <div>
      <NavLink to={`/catedit/${id}`} className="nav-link">
        <Button>Edit Cat Profile</Button>
      </NavLink>
      <NavLink to="/catindex">
        <Button onSubmit={deleteCat}>Delete Cat Profile</Button>
      </NavLink>
    </div>
    </main>
  )
}


export default CatShow