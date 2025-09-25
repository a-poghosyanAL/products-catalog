
export const getAllProductsQuery = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    category,
    price,
    availability,
    slug
  }
`;

export const getProductBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    description,
    image,
    category,
    price,
    availability,
    slug
  }
`;

export const getRelatedProductsQuery = `
  *[_type == "product" && category == $category && _id != $productId] | order(_createdAt desc) [0...4] {
    _id,
    title,
    description,
    image,
    category,
    price,
    availability,
    slug
  }
`;

export const getCategoriesQuery = `
  array::unique(*[_type == "product"].category)
`;

export const searchProductsQuery = `
  *[_type == "product" && 
    (title match $searchTerm || description match $searchTerm) &&
    category match $category &&
    price >= $minPrice &&
    price <= $maxPrice
  ] | order($sortField $sortOrder) {
    _id,
    title,
    description,
    image,
    category,
    price,
    availability,
    slug
  }
`;
