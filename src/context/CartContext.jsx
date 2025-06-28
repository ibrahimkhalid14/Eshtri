import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = []

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        return [...state, action.payload]
      }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  function addToCart(product, quantity = 1) {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity }
    })
  }

  function removeFromCart(productId) {
    dispatch({ type: 'REMOVE_ITEM', payload: productId })
  }

  function clearCart() {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
