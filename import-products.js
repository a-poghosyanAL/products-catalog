const { createClient } = require('@sanity/client');
const fs = require('fs');

// Create Sanity client
const client = createClient({
  projectId: '3d32qi3l',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  // Add token if you need to create documents
  // token: process.env.SANITY_API_TOKEN,
});

// Read the products data
const productsData = JSON.parse(fs.readFileSync('./products-data.json', 'utf8'));

async function importProducts() {
  console.log('Starting product import...');
  
  try {
    // Import each product
    for (const product of productsData) {
      console.log(`Importing: ${product.title}`);
      
      const result = await client.create(product);
      console.log(`✅ Created product: ${result._id}`);
    }
    
    console.log('🎉 All products imported successfully!');
  } catch (error) {
    console.error('❌ Error importing products:', error);
  }
}

// Run the import
importProducts();





