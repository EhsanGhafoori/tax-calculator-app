import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  // Plant data with at least 6 plants per category and minimum 3 categories
  const plantsArray = [
    // Indoor Plants Category
    { 
      name: 'Monstera Deliciosa', 
      image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400', 
      description: 'Large, glossy leaves with natural holes. Perfect for bright, indirect light.', 
      cost: '$29.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'Snake Plant', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Hardy, low-maintenance plant with tall, sword-like leaves. Great for beginners.', 
      cost: '$19.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'Pothos Golden', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Trailing vine with heart-shaped, variegated leaves. Easy to care for.', 
      cost: '$14.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'ZZ Plant', 
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400', 
      description: 'Drought-tolerant with glossy, dark green leaves. Thrives in low light.', 
      cost: '$24.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'Peace Lily', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Elegant white flowers and dark green leaves. Purifies indoor air.', 
      cost: '$22.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'Rubber Plant', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Large, glossy leaves in deep green. Makes a bold statement.', 
      cost: '$27.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'Fiddle Leaf Fig', 
      image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400', 
      description: 'Popular houseplant with large, violin-shaped leaves. Needs bright light.', 
      cost: '$34.99',
      category: 'Indoor Plants'
    },
    { 
      name: 'Spider Plant', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Easy-care plant with arching leaves and baby plantlets. Great for hanging.', 
      cost: '$12.99',
      category: 'Indoor Plants'
    },
    
    // Succulents Category
    { 
      name: 'Echeveria', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Rosette-shaped succulent with beautiful colors. Perfect for sunny windows.', 
      cost: '$8.99',
      category: 'Succulents'
    },
    { 
      name: 'Aloe Vera', 
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400', 
      description: 'Medicinal plant with thick, fleshy leaves. Easy to grow and maintain.', 
      cost: '$11.99',
      category: 'Succulents'
    },
    { 
      name: 'Jade Plant', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Tree-like succulent with thick, oval leaves. Symbol of good luck.', 
      cost: '$15.99',
      category: 'Succulents'
    },
    { 
      name: 'Hens and Chicks', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Hardy succulent that forms rosettes. Produces offsets (chicks) around mother plant.', 
      cost: '$9.99',
      category: 'Succulents'
    },
    { 
      name: 'String of Pearls', 
      image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400', 
      description: 'Unique trailing succulent with bead-like leaves. Perfect for hanging baskets.', 
      cost: '$16.99',
      category: 'Succulents'
    },
    { 
      name: 'Burro\'s Tail', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Trailing succulent with plump, blue-green leaves. Ideal for hanging planters.', 
      cost: '$13.99',
      category: 'Succulents'
    },
    { 
      name: 'Haworthia', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Small, rosette-forming succulent with striped leaves. Low maintenance.', 
      cost: '$10.99',
      category: 'Succulents'
    },
    { 
      name: 'Lithops', 
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400', 
      description: 'Living stones that mimic pebbles. Unique and fascinating succulent.', 
      cost: '$12.99',
      category: 'Succulents'
    },
    
    // Flowering Plants Category
    { 
      name: 'African Violet', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Compact plant with velvety leaves and colorful flowers. Blooms year-round.', 
      cost: '$18.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Orchid', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Elegant flowering plant with exotic blooms. Requires specific care.', 
      cost: '$32.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Begonia', 
      image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400', 
      description: 'Colorful flowers and attractive foliage. Great for indoor gardens.', 
      cost: '$16.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Geranium', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Bright, cheerful flowers in various colors. Easy to care for.', 
      cost: '$14.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Kalanchoe', 
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400', 
      description: 'Succulent with clusters of small, colorful flowers. Long-lasting blooms.', 
      cost: '$19.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Cyclamen', 
      image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400', 
      description: 'Beautiful flowers with heart-shaped leaves. Blooms in cooler months.', 
      cost: '$21.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Impatiens', 
      image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400', 
      description: 'Colorful, shade-loving plant with abundant blooms. Perfect for brightening spaces.', 
      cost: '$13.99',
      category: 'Flowering Plants'
    },
    { 
      name: 'Fuchsia', 
      image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400', 
      description: 'Hanging plant with unique, pendulous flowers. Attracts hummingbirds.', 
      cost: '$17.99',
      category: 'Flowering Plants'
    },
  ];

  const categories = ['All Plants', 'Indoor Plants', 'Succulents', 'Flowering Plants'];
  const [selectedCategory, setSelectedCategory] = useState('All Plants');

  const filteredPlants = selectedCategory === 'All Plants' 
    ? plantsArray 
    : plantsArray.filter(plant => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Our Plant Collection</h1>
        <p>Discover beautiful plants for your home</p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredPlants.map((plant, index) => {
          const isAdded = addedToCart[plant.name] || cartItems.some(item => item.name === plant.name);
          return (
            <div key={index} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <p className="plant-cost">{plant.cost}</p>
                <button
                  className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded}
                >
                  {isAdded ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
