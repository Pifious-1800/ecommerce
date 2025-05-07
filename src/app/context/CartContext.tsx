// src/context/CartContext.tsx
'use client'
import React, { createContext, useContext, useState } from 'react'

export interface CartItem {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
  qty: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: any) => void
  adjustQuantity: (productId: number, change: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: any) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      } else {
        return [...prevItems, { product, qty: 1 }]
      }
    })
  }

  const adjustQuantity = (productId: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, qty: Math.max(item.qty + change, 0) }
          : item
      )
    )
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, adjustQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
