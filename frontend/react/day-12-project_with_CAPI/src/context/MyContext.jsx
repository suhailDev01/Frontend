import { children, createContext} from "react";
import { useState } from "react";
export const MyStore = createContext();

export const ContextProvider = ({children})=>{

     const [IsCartOpen, setIsCartOpen] = useState(false)
      const [cartItem, setCartItem] = useState([])
          console.log(cartItem)

           const incrementQuantity = (id) =>{
        setCartItem((prev)=>{
            return prev.map((val)=>{
                return val.id === id ? {...val, quantity: val.quantity + 1} : val;
            })
        })
           }

           const decrementQuantity = (id) =>{
        setCartItem((prev)=>{
            return prev.map((val)=>{
                return val.id === id ? {...val, quantity: val.quantity - 1} : val;
            })
        })
           }

    return <MyStore.Provider value={{IsCartOpen, 
    setIsCartOpen,
     cartItem,
      setCartItem, 
     incrementQuantity,
     decrementQuantity}}>
        {children}
    </MyStore.Provider>
}