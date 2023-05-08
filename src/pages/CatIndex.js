import { NavLink } from "react-router-dom"
import  {Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"


const CatIndex = ({cats}) => {

  return(
    <main className="cards-wrapper">
      {cats?.map((cat, index) => {
        return(
          <Card
            color="light"
            style= {{
            width: '18rem'
            }}
            key={index}
          >
          <img
            alt="Sample"
            src={cat.image}
          />
            <CardBody>
              <CardTitle tag="h5">
                {cat.name}
              </CardTitle>
              <CardSubtitle>
                Age: {cat.age}
                <br/>
                Gender: {cat.gender}
              </CardSubtitle>
              <NavLink to={`/catShow/${cat.id}`}>
                Purrr Details
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}


export default CatIndex