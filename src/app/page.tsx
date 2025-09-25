import { client } from '@/lib/sanity';
import { getAllProductsQuery, getCategoriesQuery } from '@/lib/queries';
import ProductCatalog from '@/components/ProductCatalog';

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    client.fetch(getAllProductsQuery),
    client.fetch(getCategoriesQuery),
  ]);

  return <ProductCatalog initialProducts={products} categories={categories} />;
}