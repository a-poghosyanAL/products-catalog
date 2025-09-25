import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const minPrice = Number(searchParams.get('minPrice')) || 0;
  const maxPrice = Number(searchParams.get('maxPrice')) || 10000;
  const sortBy = searchParams.get('sortBy') || 'title-asc';

  let query = '*[_type == "product"';
  const params: Record<string, string | number> = {};

  if (search) {
    query += ' && (title match $search || description match $search)';
    params.search = `*${search}*`;
  }

  if (category) {
    query += ' && category == $category';
    params.category = category;
  }

  if (minPrice > 0) {
    query += ' && price >= $minPrice';
    params.minPrice = minPrice;
  }

  if (maxPrice < 10000) {
    query += ' && price <= $maxPrice';
    params.maxPrice = maxPrice;
  }

  query += ']';

  switch (sortBy) {
    case 'price-asc':
      query += ' | order(price asc)';
      break;
    case 'price-desc':
      query += ' | order(price desc)';
      break;
    case 'title-asc':
      query += ' | order(title asc)';
      break;
    case 'title-desc':
      query += ' | order(title desc)';
      break;
    default:
      query += ' | order(_createdAt desc)';
  }

  query += ` {
    _id,
    title,
    description,
    image,
    category,
    price,
    availability,
    slug
  }`;

  try {
    const products = await client.fetch(query, params);

    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}

