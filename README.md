# Portfolio Project

A modern, responsive portfolio website built with React, Chakra UI, Formik, and Yup.

## Features

- **Header**: Social media links and smooth navigation with scroll-based hide/show animation
- **Landing Section**: Avatar, greeting, and bio introduction
- **Projects Section**: Grid display of featured projects with cards
- **Contact Me Section**: Form with validation using Formik and Yup
- **Responsive Design**: Mobile-friendly layout using Chakra UI

## Technology Stack

- **React**: Frontend framework
- **Chakra UI**: Component library for styling
- **Formik**: Form management
- **Yup**: Form validation schema
- **FontAwesome**: Icons
- **Vite**: Build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
# or
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## Project Structure

```
portfolio-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── LandingSection.js
│   │   ├── ProjectsSection.js
│   │   ├── Card.js
│   │   ├── ContactMeSection.js
│   │   └── Footer.js
│   ├── context/
│   │   └── alertContext.jsx
│   ├── hooks/
│   │   └── useSubmit.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Key Components

### Header.js
- Social media links (GitHub, LinkedIn, Twitter)
- Internal navigation links (Projects, Contact Me)
- Scroll-based hide/show animation

### LandingSection.js
- Avatar image
- Greeting and bio text

### ProjectsSection.js
- Grid layout of project cards
- 4 featured projects

### Card.js
- Project card with image, title, description
- "See More" link with arrow icon

### ContactMeSection.js
- Contact form with validation
- Name, email, enquiry type, and message fields
- Success/error alerts
- Form reset on successful submission

## License

This project is created for educational purposes.
