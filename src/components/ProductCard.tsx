import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import { urlFor } from '@/lib/sanity'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug.current}`} className='group'>
      <div className='bg-slate-800 border border-slate-700 rounded-xl transition-all duration-300 overflow-hidden h-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500'>
        <div className='aspect-square relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900'>
          <Image
            src={urlFor(product.image).width(400).height(400).url()}
            alt={product.image.alt || product.title}
            fill
            className='object-cover transition-all duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          {!product.availability && (
            <div className='absolute inset-0 bg-black/70 flex items-center justify-center'>
              <span className='text-white font-semibold text-lg'>Out of Stock</span>
            </div>
          )}
        </div>
        <div className='p-6'>
          <div className='mb-3'>
            <span className='inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30'>
              {product.category}
            </span>
          </div>
          <h3 className='font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-200'>
            {product.title}
          </h3>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center'>
              <span className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex w-full items-center space-x-3'>
                <div className={cn('w-3 h-3 rounded-full shadow-sm', product.availability ? 'bg-green-400' : 'bg-red-400')} />
                <span className={cn('text-sm font-semibold', product.availability ? 'text-green-300' : 'text-red-300')}>
                  {product.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
