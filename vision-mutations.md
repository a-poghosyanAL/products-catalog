# Sanity Vision Tool Mutations

## How to Add Products Using Vision Tool:

1. **Open Sanity Studio** → **Vision** tab
2. **Paste these mutations** one by one:

### Product 1: Wireless Bluetooth Headphones
```groq
*[_type == "product" && slug.current == "wireless-bluetooth-headphones"][0] || {
  _type: "product",
  title: "Wireless Bluetooth Headphones",
  description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals.",
  category: "Electronics",
  price: 199.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "wireless-bluetooth-headphones"
  }
}
```

### Product 2: Smart Fitness Watch
```groq
*[_type == "product" && slug.current == "smart-fitness-watch"][0] || {
  _type: "product",
  title: "Smart Fitness Watch",
  description: "Advanced fitness tracking watch with heart rate monitoring, GPS, water resistance, and 7-day battery life. Track your workouts and health metrics.",
  category: "Electronics",
  price: 299.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "smart-fitness-watch"
  }
}
```

### Product 3: Organic Cotton T-Shirt
```groq
*[_type == "product" && slug.current == "organic-cotton-t-shirt"][0] || {
  _type: "product",
  title: "Organic Cotton T-Shirt",
  description: "Comfortable and sustainable organic cotton t-shirt. Soft, breathable, and perfect for everyday wear. Available in multiple colors.",
  category: "Clothing",
  price: 29.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "organic-cotton-t-shirt"
  }
}
```

### Product 4: Stainless Steel Water Bottle
```groq
*[_type == "product" && slug.current == "stainless-steel-water-bottle"][0] || {
  _type: "product",
  title: "Stainless Steel Water Bottle",
  description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
  category: "Home & Kitchen",
  price: 24.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "stainless-steel-water-bottle"
  }
}
```

### Product 5: Wireless Phone Charger
```groq
*[_type == "product" && slug.current == "wireless-phone-charger"][0] || {
  _type: "product",
  title: "Wireless Phone Charger",
  description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and safety protection.",
  category: "Electronics",
  price: 39.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "wireless-phone-charger"
  }
}
```

### Product 6: Premium Coffee Beans
```groq
*[_type == "product" && slug.current == "premium-coffee-beans"][0] || {
  _type: "product",
  title: "Premium Coffee Beans",
  description: "Single-origin coffee beans from Ethiopia. Medium roast with notes of citrus and chocolate. Perfect for coffee enthusiasts.",
  category: "Food & Beverage",
  price: 18.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "premium-coffee-beans"
  }
}
```

### Product 7: Yoga Mat Premium
```groq
*[_type == "product" && slug.current == "yoga-mat-premium"][0] || {
  _type: "product",
  title: "Yoga Mat Premium",
  description: "Non-slip yoga mat made from eco-friendly materials. Extra thick for comfort and support during yoga and fitness activities.",
  category: "Sports & Fitness",
  price: 49.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "yoga-mat-premium"
  }
}
```

### Product 8: LED Desk Lamp (Out of Stock)
```groq
*[_type == "product" && slug.current == "led-desk-lamp"][0] || {
  _type: "product",
  title: "LED Desk Lamp",
  description: "Adjustable LED desk lamp with multiple brightness levels and color temperatures. USB charging port and touch control panel.",
  category: "Home & Kitchen",
  price: 79.99,
  availability: false,
  slug: {
    _type: "slug",
    current: "led-desk-lamp"
  }
}
```

### Product 9: Leather Wallet
```groq
*[_type == "product" && slug.current == "leather-wallet"][0] || {
  _type: "product",
  title: "Leather Wallet",
  description: "Handcrafted genuine leather wallet with RFID blocking technology. Multiple card slots and cash compartments. Classic design.",
  category: "Accessories",
  price: 89.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "leather-wallet"
  }
}
```

### Product 10: Bluetooth Speaker
```groq
*[_type == "product" && slug.current == "bluetooth-speaker"][0] || {
  _type: "product",
  title: "Bluetooth Speaker",
  description: "Portable Bluetooth speaker with 360-degree sound and 12-hour battery life. Waterproof design perfect for outdoor adventures.",
  category: "Electronics",
  price: 129.99,
  availability: true,
  slug: {
    _type: "slug",
    current: "bluetooth-speaker"
  }
}
```

## Instructions:
1. Copy each query above
2. Paste into Vision tool
3. Click "Execute"
4. Repeat for all 10 products

This will create the products if they don't exist, or return the existing ones if they do.



