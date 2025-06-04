import { FormEvent, useState } from 'react'

interface SelectProductsProps {
  onSubmit: (products: string[]) => void
}

export function SelectProducts({ onSubmit }: SelectProductsProps) {
  const [selectedProducts, setSelectedProducts] = useState({
    Lettuce: false,
    Tomato: false,
    Chicken: false,
    Noodles: false,
    Cheese: false,
    Beans: false
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const products = Object.entries(selectedProducts)
      .filter(([_, selected]) => selected)
      .map(([name]) => name)

    if (products.length > 0) {
      onSubmit(products)
    }
  }

  return (
    <div className="panel">
      <h2>What's in your fridge?</h2>
      <form onSubmit={handleSubmit}>
        <div className="checkbox-group">
          {Object.keys(selectedProducts).map(product => (
            <label key={product} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedProducts[product as keyof typeof selectedProducts]}
                onChange={() => setSelectedProducts(prev => ({
                  ...prev,
                  [product]: !prev[product as keyof typeof selectedProducts]
                }))}
              />
              {product}
            </label>
          ))}
        </div>

        <button 
          type="submit" 
          className="button"
          disabled={!Object.values(selectedProducts).some(Boolean)}
        >
          Generate Recipe
        </button>
      </form>
    </div>
  )
}