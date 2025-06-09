// app/data/products.ts

export interface Product {
    id: number
    name: string
    price: number
    image: string
    description: string
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Voile Été', price: 40, image: '/product1.jpg', description: '…' },
    { id: 2, name: 'Voile Élégante', price: 55, image: '/product2.jpg', description: '…' },
    { id: 3, name: 'Voile Sport', price: 30, image: '/product3.jpg', description: '…' },
    { id: 1, name: 'Voile Été', price: 40, image: '/product1.jpg', description: '…' },
    { id: 2, name: 'Voile Élégante', price: 55, image: '/product2.jpg', description: '…' },
    { id: 3, name: 'Voile Sport', price: 30, image: '/product3.jpg', description: '…' },
    { id: 1, name: 'Voile Été', price: 40, image: '/product1.jpg', description: '…' },
    { id: 2, name: 'Voile Élégante', price: 55, image: '/product2.jpg', description: '…' },
    { id: 3, name: 'Voile Sport', price: 30, image: '/product3.jpg', description: '…' },
  ]
  
  export function getProductById(id: number) {
    return products.find(product => product.id === id)
  }
  