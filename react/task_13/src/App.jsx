import ProductCard from './ProductCard'

function App() {
  return (
    <>
      <h1>Our Products</h1>
      <div className="products">
        <ProductCard
          image="./headphones.jpg"
          title="Headphones"
          description="High-quality wireless headphones with clear sound."
        />
        <ProductCard
          image="./watch.jpg"
          title="Smart Watch"
          description="Stylish smartwatch with fitness tracking features."
        />
        <ProductCard
          image="./camera.jpg"
          title="Camera"
          description="Capture beautiful moments with this digital camera."
        />
      </div>
    </>
  )
}

export default App