import {useState} from 'react';
import Carousel from 'react-elastic-carousel';
function App() {
  const [images, setImages] = useState(
    [
      {id:1,url:"https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM="},
      {id:2,url:"https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg"},
      {id:3,url:"https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJpZXN8ZW58MHx8MHx8&w=1000&q=80"}
    ]
  );
  return (
    <div>
      <section id="section-1">
        <Carousel>
          {images.map(image=>
            <div class="image-container">
              <img key={image.id} src={image.url} class="carousel-image" alt="fruit"></img>
            </div>
          )}
        </Carousel>
      </section>
            
      <div id="section-2">
        <div style={{width:"250px",margin:"auto",padding:"300px"}}><h1>Hello World 1</h1></div>
        <div style={{width:"250px",margin:"auto",padding:"300px"}}><h1>Hello World 2</h1></div>
        <div style={{width:"250px",margin:"auto",padding:"300px"}}><h1>Hello World 3</h1></div>
        <div style={{width:"250px",margin:"auto",padding:"300px"}}><h1>Hello World 4</h1></div>
      </div>
    </div>
  );
}

export default App;
