import { create } from 'zustand';

const useCartStore = create((set) => ({
  products: [],
  cart: [],
  isLoading: false,
  hasErrors: false,
  addProductToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  clearCart: () => set({ cart: [] }),
  fetchProducts: async (url) => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch('https://api.noroff.dev/api/v1/online-shop/');
      const json = await response.json();
      set((state) => ({ products: (state.products = json), isLoading: false }));
    } catch (error) {
      set(() => ({ hasErrors: true, isLoading: false }));
    }
  },
}));

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const isLoading = useCartStore((state) => state.isLoading);
  const hasErrors = useCartStore((state) => state.hasErrors);
  const cart = useCartStore((state) => state.cart);
  const clearingCart = useCartStore((state) => state.clearCart);

  function addToCart(product) {
    addProductToCart(product);
    
    const count = document.querySelector("#cartAmount");
    count.innerHTML = cart.length + 1;
    console.log(count);
  }

   function clearCart() {
    clearingCart();
    const count = document.querySelector("#cartAmount");
    count.innerHTML = 0;
    window.localStorage.clear();
  }

  function findTotal () {
    const prices = cart.map((cart) => (
      cart.discountedPrice
    ))
    
    return prices.reduce((a, b) => a + b, 0).toFixed(2);
  }


  return {
    products,
    cart,
    isLoading,
    hasErrors,
    addToCart,
    clearCart,
    fetchProducts,
    findTotal
  };
}



export { useCart };