"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

export function CartButton() {
  const { state, dispatch } = useCart()

  const openCart = () => {
    dispatch({ type: "OPEN_CART" })
  }

  return (
    <Button variant="outline" size="sm" className="relative bg-transparent" onClick={openCart}>
      <ShoppingCart className="h-4 w-4" />
      {state.itemCount > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {state.itemCount > 99 ? "99+" : state.itemCount}
        </Badge>
      )}
      <span className="sr-only">Shopping cart with {state.itemCount} items</span>
    </Button>
  )
}
