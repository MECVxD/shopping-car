import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as inicialProducts } from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { useFilters } from "./hooks/useFilters.js"

function App() {
  const [products] = useState(inicialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
