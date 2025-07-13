"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const router = useRouter()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" })
  }

  const handleCheckout = () => {
    closeCart()
    router.push("/checkout")
  }

  return (
    <Sheet open={state.isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
          </SheetTitle>
          <SheetDescription>
            {state.itemCount === 0 ? "Your cart is empty" : `${state.itemCount} items in your cart`}
          </SheetDescription>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-4">Add some items to get started</p>
            <Button onClick={closeCart} variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b">
                    <div className="relative w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg?height=64&width=64"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-sm leading-tight">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs line-through text-muted-foreground">
                                ₹{item.originalPrice.toLocaleString()}
                              </span>
                              <Badge variant="destructive" className="text-xs">
                                {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                              </Badge>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-6 w-6 p-0 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-sm">₹{(item.price * item.quantity).toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">₹{item.price.toLocaleString()} each</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span>₹{state.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Delivery</span>
                  <span>{state.total >= 500 ? "FREE" : "₹50"}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{(state.total + (state.total >= 500 ? 0 : 50)).toLocaleString()}</span>
                </div>
                {state.total < 500 && (
                  <p className="text-xs text-muted-foreground">
                    Add ₹{(500 - state.total).toLocaleString()} more for free delivery
                  </p>
                )}
              </div>

              <Button onClick={handleCheckout} className="w-full h-12 text-base">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" onClick={closeCart} className="w-full bg-transparent">
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
