import Carousel from "./components/Carousel"

function App() {
  return (
    <div className="App">
      <Carousel style={{ width: "800px", height: "500px" }} columns="multi">
        <img
          style={{ objectFit: "contain" }}
          src="https://picsum.photos/id/1/400/500"
        />
        <img
          style={{ objectFit: "contain" }}
          src="https://picsum.photos/id/20/400/500"
        />
        <img
          style={{ objectFit: "contain" }}
          src="https://picsum.photos/id/35/400/500"
        />
        <img
          style={{ objectFit: "contain" }}
          src="https://picsum.photos/id/47/400/500"
        />
        <img
          style={{ objectFit: "contain" }}
          src="https://picsum.photos/id/54/400/500"
        />
      </Carousel>
    </div>
  )
}

export default App
