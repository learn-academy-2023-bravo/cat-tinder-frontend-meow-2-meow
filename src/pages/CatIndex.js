import  {Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({cats}) => {

  return(
    <main className="all-cat-cards">
      {cats?.map((cat, index) => {
        return(
          <Card
            color="light"
            style= {{
              width: '10rem'
            }}
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
                {cat.age}
              </CardSubtitle>
              <NavLink to={`/catShow/${cat.id}`}>
                Purrrrr
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}


export default CatIndex