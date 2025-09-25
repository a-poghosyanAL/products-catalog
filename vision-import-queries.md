# Sanity Vision Import Queries

## How to Import Products Using Vision Tool

1. **Open Sanity Studio** at `http://localhost:3333`
2. **Click on "Vision"** in the left sidebar
3. **Use these queries to import products:**

### Import Single Product
```groq
*[_type == "product" && title == "Sony WH-1000XM4 Wireless Noise Canceling Headphones"][0]
```

### Import All Products (if you want to check what's already there)
```groq
*[_type == "product"] | order(_createdAt desc)
```

### Create Product Mutation (use this in Vision)
```groq
{
  "mutations": [
    {
      "create": {
        "_type": "product",
        "title": "Sony WH-1000XM4 Wireless Noise Canceling Headphones",
        "description": "Premium over-ear headphones with industry-leading noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for music lovers and frequent travelers.",
        "category": "Electronics",
        "price": 349.99,
        "availability": true,
        "slug": {
          "current": "sony-wh-1000xm4-wireless-headphones"
        }
      }
    }
  ]
}
```

## Alternative: Use Sanity CLI Import

Run this command in your terminal:
```bash
npx sanity dataset import products-data.json production --replace
```





