# Dream 2005 - Mobile Store Website

A modern, responsive mobile store website built with Angular, featuring theme customization, dark mode, and a complete shopping experience.

## Features

- 🏠 **5 Pages**: Home, Products, Product Details, Cart, and Settings
- 🎨 **Theme Customization**: Choose from 6 accent colors (Indigo, Purple, Pink, Blue, Green, Orange)
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Modern Phone Collection**: Browse 15+ premium smartphones from top brands
- 🛒 **Shopping Cart**: Add items, manage quantities, and checkout
- 🔍 **Search & Filter**: Search by name/brand and filter by brand
- 📊 **API Integration**: Connected to JSON Server API with fallback to mock data
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- Angular 17
- TypeScript
- SCSS
- JSON Server (for API)
- RxJS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the JSON Server API (in a separate terminal):
```bash
npm run server
```
This will start the API server on `http://localhost:3000`

3. Start the Angular development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header with theme controls
│   │   ├── footer/          # Site footer
│   │   └── phone-card/      # Reusable phone card component
│   ├── pages/
│   │   ├── home/            # Homepage with featured products
│   │   ├── products/        # Products listing with filters
│   │   ├── product-detail/  # Individual product details
│   │   ├── cart/            # Shopping cart
│   │   └── settings/        # Theme and app settings
│   ├── services/
│   │   ├── phone.service.ts    # Phone data service
│   │   ├── cart.service.ts     # Shopping cart service
│   │   └── theme.service.ts    # Theme management service
│   └── models/
│       └── phone.ts          # Phone interface/model
├── styles.scss              # Global styles and theme variables
└── index.html

db.json                      # JSON Server database
```

## API Endpoints

The application uses JSON Server for the API:

- `GET /phones` - Get all phones
- `GET /phones/:id` - Get a specific phone

If the API server is not running, the app will automatically fall back to mock data.

## Theme Customization

Users can customize the appearance through the Settings page:

1. **Theme**: Toggle between Light and Dark mode
2. **Accent Color**: Choose from 6 color options
3. Settings are saved in localStorage and persist across sessions

## Available Scripts

- `npm start` - Start Angular development server
- `npm run build` - Build for production
- `npm run server` - Start JSON Server API
- `npm test` - Run unit tests

## Features in Detail

### Home Page
- Hero section with call-to-action
- Featured products showcase
- Service highlights (Free Shipping, Secure Payment, etc.)

### Products Page
- Search functionality
- Brand filtering
- Sort by price or name
- Responsive grid layout

### Product Detail Page
- Full product specifications
- Quantity selector
- Add to cart functionality
- Image gallery

### Cart Page
- View all cart items
- Update quantities
- Remove items
- Order summary with tax and shipping
- Checkout functionality

### Settings Page
- Theme toggle (Light/Dark)
- Color picker
- About section
- Version information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Author

Dream 2005 Mobile Store

---

Enjoy shopping at Dream 2005! 📱✨

