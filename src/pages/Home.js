import CarouselNav from "../components/Carousel"


const Home = () => {
  return(
<>
  <div className="home-center">
    <h1>Welcome to Meet Meow</h1>

  <br />
    <div className="p-home">
      <p>
        “Are you tired of swiping left on all the basic tabbies and predictable persians? Well, look no further! Cat Tinder is here to help you find the purrrfect match. Whether you're a sassy Siamese or a cool and collected Russian Blue, we've got the feline for you. So don't be a scaredy-cat, swipe right on Cat Tinder and find your meow-mate today!”
      </p>
      <span className="home-carousel">
    <CarouselNav />
    </span>
    </div>
  <br />
  
  </div>
  

</>

  )
}


export default Home