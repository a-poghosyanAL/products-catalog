import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { getProductBySlugQuery, getRelatedProductsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/product'
import { PlusIcon, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await client.fetch(getProductBySlugQuery, { slug: params.slug });

  if (!product) {
    notFound();
  }

  const relatedProducts = await client.fetch(getRelatedProductsQuery, {
    category: product.category,
    productId: product._id,
  });

  return (
    <div className={cn('min-h-screen')}>
      <header className={cn('bg-slate-800/80 backdrop-blur-lg border-b border-white/10')}>
        <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
          <div className={cn('flex items-center py-6')}>
            <Link 
              href="/" 
              className={cn('flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 group')}
            >
              <ArrowLeft className={cn('w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200')} />
              Back to Products
            </Link>
          </div>
        </div>
      </header>

      <main className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12')}>
        <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20')}>
          <div className={cn('aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900')}>
            <Image
              src={urlFor(product.image).width(800).height(800).url()}
              alt={product.image.alt || product.title}
              fill
              className={cn('object-cover')}
            />
          </div>

          <div className={cn('space-y-8')}>
            <div>
              <div className={cn('mb-4')}>
                <span className={cn('inline-block px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30')}>
                  {product.category}
                </span>
              </div>
              <h1 className={cn('text-4xl font-bold text-white mb-4')}>{product.title}</h1>
            </div>

            <div className={cn('flex items-center space-x-6')}>
              <span className={cn('text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent')}>
                ${product.price.toFixed(2)}
              </span>
              <div className={cn('flex items-center space-x-4')}>
                <div className={cn('w-4 h-4 rounded-full shadow-sm', product.availability ? 'bg-green-400' : 'bg-red-400')} />
                <span className={cn('text-lg font-semibold', product.availability ? 'text-green-300' : 'text-red-300')}>
                  {product.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className={cn('bg-slate-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-6')}>
              <h2 className={cn('text-2xl font-bold text-white mb-4')}>Description</h2>
              <p className={cn('text-white/80 leading-relaxed text-lg')}>{product.description}</p>
            </div>

            <div className={cn('pt-6')}>
              <button
                disabled={!product.availability}
                className={cn(
                  'w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 cursor-pointer',
                  product.availability
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                )}
              >
                {product.availability ? (
                  <span className={cn('flex items-center justify-center')}>
                   <PlusIcon className={cn('w-5 h-5 mr-2')} />
                    Add to Cart
                  </span>
                ) : (
                  'Out of Stock'
                )}
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className={cn('text-3xl font-bold text-white mb-12 text-center')}>Related Products</h2>
            <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8')}>
              {relatedProducts.map((relatedProduct: Product) => (
                <ProductCard key={relatedProduct._id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
