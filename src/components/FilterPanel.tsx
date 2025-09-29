import { Filter, DollarSign, X, Tag } from 'lucide-react'
import { ProductFilters } from '@/types/product'
import { Button, Input, Select } from '@/components/ui'

interface FilterPanelProps {
  categories: string[]
  filters: ProductFilters
  onFilterChange: (filters: Partial<ProductFilters>) => void
}

export default function FilterPanel({ categories, filters, onFilterChange }: FilterPanelProps) {
  return (
    <div className='bg-slate-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-8'>
      <h2 className='text-2xl font-bold text-white mb-8 flex items-center'>
        <div className='w-6 h-6 mr-3 flex items-center justify-center'>
          <Filter className='w-6 h-6 text-blue-400' />
        </div>
        Filters
      </h2>
      
      <div className='space-y-8'>
        <div>
          <div className='flex items-center gap-2 mb-4 text-xs font-semibold text-blue-300 uppercase tracking-wider'>
            <div className='w-4 h-4 flex items-center justify-center'>
              <Tag className='w-4 h-4' />
            </div>
            Category
          </div>
          <Select
            value={filters.category}
            onChange={(e) => onFilterChange({ category: e.target.value })}
          >
            <option value="" className='bg-slate-700 text-white'>All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category} className='bg-slate-700 text-white'>
                {category}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <div className='flex items-center gap-2 mb-4 text-xs font-semibold text-blue-300 uppercase tracking-wider'>
            <div className='w-4 h-4 flex items-center justify-center'>
              <DollarSign className='w-4 h-4' />
            </div>
            Price Range
          </div>
          <div className='space-y-4'>
            <div>
              <label className='block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider'>Min Price</label>
              <Input
                type="number"
                value={filters.minPrice}
                onChange={(e) => onFilterChange({ minPrice: Number(e.target.value) })}
                min="0"
                placeholder="0"
              />
            </div>
            <div>
              <label className='block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider'>Max Price</label>
              <Input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => onFilterChange({ maxPrice: Number(e.target.value) })}
                min="0"
                placeholder="10000"
              />
            </div>
          </div>
        </div>

        <Button
          onClick={() => onFilterChange({
            search: '',
            category: '',
            minPrice: 0,
            maxPrice: 10000,
            sortBy: 'title-asc'
          })}
          className='w-full flex items-center justify-center gap-2'
        >
          <X className='w-4 h-4' />
          Clear Filters
        </Button>
      </div>
    </div>
  )
}
