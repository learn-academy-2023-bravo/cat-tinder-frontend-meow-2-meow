import  {Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({cats}) => {

  return(
    <main>
      {cats?.map((cat, index) => {
        return(
          <Card
            color="light"
            style= {{
              width: '18rem'
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

// Auto Carousel Card
{/* <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 /> */}