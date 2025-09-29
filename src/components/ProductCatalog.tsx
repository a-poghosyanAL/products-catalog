'use client'

import { useState, useTransition } from 'react'
import { Search, ArrowUpDown } from 'lucide-react'
import { Product, ProductFilters } from '@/types/product'
import ProductCard from './ProductCard'
import FilterPanel from './FilterPanel'
import { SearchInput, Select } from '@/components/ui'

interface ProductCatalogProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ProductCatalog({ initialProducts, categories }: ProductCatalogProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    sortBy: 'title-asc',
  });
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = async (newFilters: Partial<ProductFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    startTransition(async () => {
      const params = new URLSearchParams();
      if (updatedFilters.search) params.set('search', updatedFilters.search);
      if (updatedFilters.category) params.set('category', updatedFilters.category);
      if (updatedFilters.minPrice > 0) params.set('minPrice', updatedFilters.minPrice.toString());
      if (updatedFilters.maxPrice < 10000) params.set('maxPrice', updatedFilters.maxPrice.toString());
      if (updatedFilters.sortBy) params.set('sortBy', updatedFilters.sortBy);

      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      setProducts(data.products);
    });
  };

  return (
    <div className='min-h-screen'>
      <header className='bg-slate-800/80 backdrop-blur-lg border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-8 flex-wrap'>
            <div>
              <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>Product Catalog</h1>
              <p className='text-white/60 mt-2'>Discover amazing products</p>
            </div>
            <div className='flex items-center space-x-4'>
              <SearchInput
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => handleFilterChange({ search: e.target.value })}
                onClear={() => handleFilterChange({ search: '' })}
                showClearButton={!!filters.search}
              />
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          <aside className='lg:w-80 flex-shrink-0'>
            <FilterPanel
              categories={categories}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </aside>

          <div className='flex-1'>
            <div className='flex justify-between items-center mb-8'>
              <div className='flex items-center space-x-4'>
                <p className='text-white/70 text-lg'>
                  Showing <span className='text-white font-semibold'>{products.length}</span> products
                </p>
                {isPending && (
                  <div className='flex items-center space-x-2 text-blue-400'>
                    <div className='animate-spin rounded-full h-4 w-4 border-2 border-blue-400/30 border-t-blue-400'></div>
                    <span className='text-sm'>Loading...</span>
                  </div>
                )}
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-5 h-5 flex items-center justify-center'>
                  <ArrowUpDown className='h-5 w-5 text-white/40' />
                </div>
                <Select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange({ sortBy: e.target.value as ProductFilters['sortBy'] })}
                  className='w-48'
                >
                  <option value="title-asc" className='bg-slate-700 text-white'>Name A-Z</option>
                  <option value="title-desc" className='bg-slate-700 text-white'>Name Z-A</option>
                  <option value="price-asc" className='bg-slate-700 text-white'>Price Low to High</option>
                  <option value="price-desc" className='bg-slate-700 text-white'>Price High to Low</option>
                </Select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className='text-center py-20'>
                <div className='glass rounded-2xl p-12 max-w-md mx-auto'>
                  <div className='icon-container mx-auto mb-6 w-16 h-16'>
                    <Search className='w-16 h-16 text-white/30' />
                  </div>
                  <p className='text-white/60 text-lg font-medium'>No products found matching your criteria.</p>
                  <p className='text-white/40 text-sm mt-2'>Try adjusting your filters or search terms.</p>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
