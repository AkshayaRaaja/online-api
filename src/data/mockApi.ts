// Mock API simulation for products
import headphonesImg from "@/assets/headphones.jpg";
import smartphoneImg from "@/assets/smartphone.jpg";
import laptopImg from "@/assets/laptop.jpg";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Pro Headphones",
    brand: "AudioTech",
    description: "Premium wireless headphones with noise cancellation and superior sound quality for professionals and music lovers.",
    price: 129.99,
    originalPrice: 159.99,
    discount: 18.75,
    image: headphonesImg,
    category: "Audio",
    inStock: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 2,
    name: "Smartphone Pro Max",
    brand: "TechCorp",
    description: "Latest smartphone with advanced camera system, powerful processor, and all-day battery life.",
    price: 899.99,
    originalPrice: 999.99,
    discount: 10.0,
    image: smartphoneImg,
    category: "Mobile",
    inStock: true,
    rating: 4.6,
    reviews: 482
  },
  {
    id: 3,
    name: "UltraBook Pro",
    brand: "CompuTech",
    description: "Lightweight laptop with high-performance processor, stunning display, and premium build quality.",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13.33,
    image: laptopImg,
    category: "Computers",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    brand: "WearTech",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights.",
    price: 249.99,
    originalPrice: 299.99,
    discount: 16.67,
    image: headphonesImg, // Using placeholder for now
    category: "Wearables",
    inStock: false,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    brand: "SoundWave",
    description: "Compact wireless speaker with 360-degree sound, waterproof design, and 12-hour battery life.",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20.0,
    image: smartphoneImg, // Using placeholder for now
    category: "Audio",
    inStock: true,
    rating: 4.4,
    reviews: 312
  },
  {
    id: 6,
    name: "Gaming Controller Pro",
    brand: "GameTech",
    description: "Professional gaming controller with customizable buttons, precision triggers, and wireless connectivity.",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22.22,
    image: laptopImg, // Using placeholder for now
    category: "Gaming",
    inStock: true,
    rating: 4.7,
    reviews: 198
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockApi = {
  // Get all products with optional filtering
  async getProducts(category?: string): Promise<Product[]> {
    await delay(800); // Simulate API delay
    
    if (category) {
      return mockProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    return mockProducts;
  },

  // Get single product by ID
  async getProduct(id: number): Promise<Product | null> {
    await delay(600); // Simulate API delay
    
    const product = mockProducts.find(p => p.id === id);
    return product || null;
  },

  // Get products by search query
  async searchProducts(query: string): Promise<Product[]> {
    await delay(500); // Simulate API delay
    
    const searchTerm = query.toLowerCase();
    return mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  },

  // Get product categories
  async getCategories(): Promise<string[]> {
    await delay(300); // Simulate API delay
    
    const categories = [...new Set(mockProducts.map(p => p.category))];
    return categories;
  }
};