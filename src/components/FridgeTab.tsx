interface FridgeTabProps {
  products: string[]
}

export function FridgeTab({ products }: FridgeTabProps) {
  return (
    <div className="panel">
      <h2>Your Fridge</h2>
      <div className="space-y-2">
        {products.map((product, index) => (
          <div 
            key={index}
            className="text-neon-cyan p-2 border border-neon-purple rounded"
          >
            {product}
          </div>
        ))}
      </div>
    </div>
  )
}