import React, { useState } from 'react';

// Product Component: Renders a single product card
function Product({ name, price, description, imageUrl }) {
  return (
    // Product card styling using Tailwind CSS
    <div className="product-card bg-white rounded-lg shadow-md p-4 m-2 flex flex-col items-center text-center w-60 transform transition duration-300 hover:scale-105">
      {/* Product image with fallback */}
      <img
        src={imageUrl}
        alt={name}
        className="w-36 h-36 object-cover rounded-md mb-3"
        // Fallback placeholder image if the primary image fails to load
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; // Prevent infinite loop if placeholder also fails
          target.src=`https://placehold.co/150x150/f0f0f0/999999?text=Image+Not+Found`;
        }}
      />
      {/* Product name */}
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      {/* Product description */}
      <p className="text-sm text-gray-600 mb-2 flex-grow">{description}</p>
      {/* Product price */}
      <p className="text-base font-bold text-pink-500 mb-3">${price.toFixed(2)}</p>
      {/* Add to Cart button */}
      <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-200">
        Add to Cart
      </button>
    </div>
  );
}

// Main App Component
function App() {
  // State holding the list of beauty products
  const [products] = useState([
    {
      id: 1,
      name: 'Glow Serum',
      price: 45.00,
      description: 'Hydrating serum for a radiant complexion.',
      imageUrl: 'https://placehold.co/150x150/E8D5C4/3E363F?text=Serum',
    },
    {
      id: 2,
      name: 'Velvet Lipstick',
      price: 22.50,
      description: 'Rich, long-lasting matte lipstick.',
      imageUrl: 'https://placehold.co/150x150/D8BFD8/3E363F?text=Lipstick',
    },
    {
      id: 3,
      name: 'Rosewater Toner',
      price: 18.00,
      description: 'Refreshing toner to balance skin pH.',
      imageUrl: 'https://placehold.co/150x150/FFC0CB/3E363F?text=Toner',
    },
    {
      id: 4,
      name: 'Charcoal Mask',
      price: 30.00,
      description: 'Detoxifying mask for clear pores.',
      imageUrl: 'https://placehold.co/150x150/A9A9A9/3E363F?text=Mask',
    },
    {
      id: 5,
      name: 'Lash Boost Mascara',
      price: 25.00,
      description: 'Volumizing mascara for fuller lashes.',
      imageUrl: 'https://placehold.co/150x150/B0E0E6/3E363F?text=Mascara',
    },
    {
      id: 6,
      name: 'Hydrating Moisturizer',
      price: 55.00,
      description: 'Lightweight daily moisturizer for all skin types.',
      imageUrl: 'https://placehold.co/150x150/ADD8E6/3E363F?text=Moisturizer',
    },
    {
      id: 7,
      name: 'Shimmer Eyeshadow Palette',
      price: 38.00,
      description: 'Palette with 12 versatile shimmer shades.',
      imageUrl: 'https://placehold.co/150x150/FFDAB9/3E363F?text=Eyeshadow',
    },
    {
      id: 8,
      name: 'Cuticle Oil Pen',
      price: 15.00,
      description: 'Nourishing oil for healthy nails and cuticles.',
      imageUrl: 'https://placehold.co/150x150/FAFAD2/3E363F?text=Cuticle+Oil',
    },
  ]);

  return (
    // Main container with Tailwind styling for font and background
    <div className="app font-sans bg-gray-50 min-h-screen p-8">
      {/* Centered store title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Glamour Essentials Boutique
      </h1>
      {/* Product grid container: uses flexbox for layout and centers items */}
      <div className="product-list flex flex-wrap justify-center gap-4">
        {/* Map through the products array and render a Product component for each */}
        {products.map((product) => (
          <Product
            key={product.id} // Use unique id for key
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;