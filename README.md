# e-plantShopping

## Project Overview

**e-plantShopping** is a dynamic e-commerce web application built with React and Redux, designed for an online plant shop called Paradise Nursery. The application allows users to browse a wide variety of houseplants, view detailed information including images, names, descriptions, and prices, add plants to a shopping cart, and manage cart items with interactive features.

## Features

- **Landing Page**: Beautiful landing page with company branding, background image, and a "Get Started" button
- **Product Browsing**: Browse plants organized by categories (at least 3 categories with 6+ plants each)
- **Shopping Cart**: Add, remove, and update quantities of plants in the cart
- **Dynamic Cart Icon**: Real-time cart count display in the navigation bar
- **Responsive Design**: Modern, user-friendly interface with smooth interactions

## Technology Stack

- **React**: Frontend framework
- **Redux Toolkit**: State management for shopping cart
- **React Router**: Navigation between pages
- **Vite**: Build tool and development server
- **CSS3**: Styling and responsive design

## Project Structure

```
e-plantShopping/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── store/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EhsanGhafoori/e-plantShopping.git
```

2. Navigate to the project directory:
```bash
cd e-plantShopping
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. For production build:
```bash
npm run build
```

6. For preview:
```bash
npm run preview
```

## Deployment

This application can be deployed to GitHub Pages, Netlify, Vercel, or any static hosting service.

### GitHub Pages Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Your live URL will be: `https://YOUR_USERNAME.github.io/e-plantShopping/`

## Key Components

### App.jsx
Landing page component featuring the Paradise Nursery brand, background image, company welcome message, and a "Get Started" button that navigates to the product listing page.

### ProductList.jsx
Product listing page displaying plants organized by categories. Each plant shows a thumbnail, name, description, and price with an "Add to Cart" button that disables after adding.

### CartItem.jsx
Shopping cart page showing all cart items with quantity controls, delete functionality, total calculations, and checkout button.

### CartSlice.jsx
Redux slice managing cart state with three reducer functions:
- `addItem()`: Adds a product to the cart
- `removeItem()`: Removes a product from the cart
- `updateQuantity()`: Updates the quantity of a cart item

## License

This project is created for educational purposes as part of a course assignment.
