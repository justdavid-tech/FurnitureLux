# 🛋️ LuxFurnish - Premium Furniture E-Commerce Platform

<div align="center">

![LuxFurnish Banner](https://img.shields.io/badge/LuxFurnish-Premium_Furniture-8B4513?style=for-the-badge&logo=react&logoColor=white)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A sophisticated React.js-based furniture e-commerce platform with elegant design and seamless user interactions**

[Live Demo](https://luxfurnitures.vercel.app/) • [Documentation](#-features) • [Installation](#-installation)

</div>

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Components](#-components)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

##  Overview

**LuxFurnish** is a cutting-edge, responsive e-commerce platform specializing in luxury furniture collections. Built with modern web technologies, it delivers an exceptional shopping experience with intuitive navigation, stunning product showcases, and direct designer communication.

###  Why LuxFurnish?

- ** Premium Design**: Elegant, modern UI with smooth animations and transitions
- ** Fully Responsive**: Seamless experience across all devices (mobile, tablet, desktop)
- ** Lightning Fast**: Optimized performance with React.js and efficient state management
- ** Smart Shopping**: Advanced filtering, sorting, and pagination for easy product discovery
- ** Direct Communication**: Integrated WhatsApp for instant designer consultation
- ** Detailed Views**: Comprehensive product modals with image galleries and specifications
- ** Accessible**: WCAG compliant with keyboard navigation support

---

##  Features

###  Core Features

#### **Product Catalog Management**
- ✅ Multi-category product organization (Living Room, Dining, Bedroom)
- ✅ Dynamic product grid with responsive layouts (1-3 columns)
- ✅ Real-time search functionality across all products
- ✅ Advanced filtering (stock status, collection type, category)
- ✅ Multiple sorting options (price, rating, newest)
- ✅ Intelligent pagination with page indicators

#### **Product Display**
- ✅ High-quality product images with hover effects
- ✅ Star rating system (supports half-stars)
- ✅ Stock availability indicators (In Stock/Out of Stock)
- ✅ Collection badges (New/Classic Collection)
- ✅ Detailed product descriptions with rich text
- ✅ Material specifications and dimensions
- ✅ "What's Included" itemized lists

#### **Interactive Modal System**
- ✅ Full-screen product detail modals (85vh responsive)
- ✅ Image gallery with thumbnail navigation
- ✅ Smooth image transitions and zoom effects
- ✅ Mobile-optimized scrolling and layouts
- ✅ Keyboard navigation support (ESC to close)

#### **Shopping Cart**
- ✅ Add/remove products with quantity control
- ✅ Real-time cart total calculations
- ✅ Persistent cart state during session
- ✅ Checkout preview modal
- ✅ Clear cart functionality
- ✅ Individual item removal

#### **Communication**
- ✅ WhatsApp integration for instant designer contact
- ✅ Pre-filled product inquiry messages
- ✅ Direct order placement via WhatsApp
- ✅ Contact designer from product cards and modals

###  UI/UX Features

- ✅ Smooth page transitions and animations
- ✅ Hover effects on cards and buttons
- ✅ Loading states and user feedback
- ✅ Consistent color scheme and typography
- ✅ Accessibility-friendly contrast ratios
- ✅ Touch-friendly mobile interactions
- ✅ Intuitive navigation patterns

---

##  Tech Stack

### **Frontend Framework**
- **React.js 18.x** - Modern UI library with hooks
- **React Router** - Client-side routing and navigation

### **Styling & Design**
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **Custom CSS** - Enhanced animations and transitions
- **Lucide React** - Beautiful, consistent icon library

### **State Management**
- **React Hooks** - useState, useMemo for efficient state handling
- **Context API Ready** - Scalable for global state management

### **Development Tools**
- **Vite** - Lightning-fast build tool
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

### **Deployment**
- **Vercel** - Optimized hosting with automatic CI/CD

---

## Installation

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step-by-Step Setup

1. **Clone the Repository**
```bash
   git clone https://github.com/justdavid-tech/luxfurnish.git
```

2. **Install Dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Configure Environment**
   
   Create a `.env` file in the root directory:
```env
   VITE_WHATSAPP_PHONE=2348100000000
   VITE_API_URL=your_api_url_here
```

4. **Configure Tailwind CSS**
   
   Update `tailwind.config.js` with your brand colors:
```javascript
   module.exports = {
     theme: {
       extend: {
         colors: {
           brand: '#8B4513',        // Your primary color
           'brand-hover': '#A0522D' // Hover state color
         }
       }
     }
   }
```

5. **Start Development Server**
```bash
   npm run dev
   # or
   yarn dev
```

6. **Open in Browser**
   
   Navigate to `http://localhost:5173`

### Production Build
```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist/` folder.

---

##  Usage

### Basic Implementation

#### 1. **Home Page Showcase**

Add the `Map` component to your home page:
```jsx
import Map from './components/map';

function Home() {
  return (
    <div>
      <Hero />
      <Map />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
```

#### 2. **Full Category Page**

Implement the full dining page with all features:
```jsx
import Dining from './pages/Dining';

// In your router
<Route path="/dining" element={<Dining />} />
```

#### 3. **Customize WhatsApp Integration**

Update the phone number in `DiningShowcase.jsx`:
```javascript
const openWhatsApp = (product) => {
  const phone = "2348100000000"; // Replace with your number
  const msg = encodeURIComponent(
    `Hello! I'm interested in the ${product.name} (₦${product.price.toLocaleString()}). Please I want details.`
  );
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
};
```

### Adding New Products

Add products to the `diningProducts` array:
```javascript
{
  id: 11,
  name: "Your Product Name",
  price: 1500000,
  rating: 4.7,
  stock: true,
  type: "new", // or "classic"
  category: "Dining",
  material: "Material Description",
  description: "Detailed product description...",
  includes: ["Item 1", "Item 2", "Item 3"],
  images: [
    "/asset/images/product1.jpg",
    "/asset/images/product2.jpg",
    "/asset/images/product3.jpg"
  ]
}
```

---

## 🧩 Components

### **Dining Component**

A simplified showcase component for the home page.

**Features:**
- Displays 6 featured products
- Product modal with image gallery
- WhatsApp integration
- "View All" link to full catalog

**Usage:**
```jsx
<Dining />
```

---

### **Dining Component (Full Page)**

Complete product catalog with advanced features.

**Features:**
- Search functionality
- Price range filtering (slider)
- Sort options (price, rating)
- Stock filtering
- Collection type filtering
- Pagination (customizable items per page)
- Shopping cart
- Checkout modal

**Usage:**
```jsx
<Route path="/dining" element={<Dining />} />
```

**Filter Options:**
- **Search**: Text-based product name search
- **Price Range**: Adjustable max price slider (₦0 - ₦3,000,000)
- **Sort By**: Default, Low→High, High→Low, Rating
- **Stock**: All, In Stock, Out of Stock
- **Collection**: All, New Collection, Classic Collection

---

### **FeaturedProducts Component**

Highlights 3 premium products on the home page.

**Features:**
- Animated card hover effects
- Full-screen product modals
- Star rating display
- Responsive grid layout

**Usage:**
```jsx
<FeaturedProducts />
```

---

## 🎨 Customization

### **Color Scheme**

Update your brand colors in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#YOUR_PRIMARY_COLOR',
        'brand-hover': '#YOUR_HOVER_COLOR',
        'brand-light': '#YOUR_LIGHT_COLOR'
      }
    }
  }
}
```

Apply in components:
```jsx
className="bg-brand hover:bg-brand-hover text-white"
```

---

### **Typography**

Customize fonts in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    }
  }
}
```

---

### **Pagination Settings**

Adjust items per page in `Dining.jsx`:
```javascript
const itemsPerPage = 6; // Change to show more/less per page
```

---

### **Product Card Layout**

Modify grid columns in any component:
```jsx
{/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

### **Modal Dimensions**

Adjust modal size in components:
```jsx
<div className="bg-white w-full h-full md:h-[85vh] max-w-6xl">
  {/* Change h-[85vh] and max-w-6xl as needed */}
</div>
```

---

##  Performance Optimization

### **Image Optimization**
- Use WebP format for 30% smaller file sizes
- Implement lazy loading for below-the-fold images
- Compress images to <200KB each

### **Code Splitting**
```javascript
const Dining = lazy(() => import('./pages/Dining'));
```

### **Memoization**
```javascript
const filteredProducts = useMemo(() => {
  // Expensive filtering logic
}, [dependencies]);
```

---

##  Testing

### Run Tests
```bash
npm run test
```

### Test Coverage
```bash
npm run test:coverage
```

---

## 🚢 Deployment

### **Deploy to Vercel**

1. **Install Vercel CLI**
```bash
   npm i -g vercel
```

2. **Deploy**
```bash
   vercel
```

3. **Production Deployment**
```bash
   vercel --prod
```

### **Deploy to Netlify**

1. **Build the Project**
```bash
   npm run build
```

2. **Deploy `dist/` Folder**
```bash
   netlify deploy --prod --dir=dist
```

---

##  Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch**
```bash
   git checkout -b feature/AmazingFeature
```
3. **Commit your changes**
```bash
   git commit -m 'Add some AmazingFeature'
```
4. **Push to the branch**
```bash
   git push origin feature/AmazingFeature
```
5. **Open a Pull Request**

### Code Style Guidelines
- Use functional components with hooks
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Maintain responsive design patterns

---

---

##  Author

**JustDavid_Tech** - Full Stack Developer & Content Creator

###  Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-justdavid--tech-181717?style=for-the-badge&logo=github)](https://github.com/justdavid-tech)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-JustDavid_Tech-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/justdavid-tech-851941239)
[![YouTube](https://img.shields.io/badge/YouTube-JustDavid_Tech-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/channel/UClcQRMDz5p8t97NkcqhMhCA)
[![Twitter](https://img.shields.io/badge/Twitter-@justdavid__tech-1DA1F2?style=for-the-badge&logo=twitter)](https://x.com/justdavid_tech?s=09)
[![Instagram](https://img.shields.io/badge/Instagram-@justdavid__tech-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/justdavid_tech/profilecard/?igsh=dDR0OHBidjlvY25s)
[![TikTok](https://img.shields.io/badge/TikTok-@justdavid__tech-000000?style=for-the-badge&logo=tiktok)](https://www.tiktok.com/@justdavid_tech?is_from_webapp=1&sender_device=pc)
[![Facebook](https://img.shields.io/badge/Facebook-JustDavid_Tech-1877F2?style=for-the-badge&logo=facebook)](https://www.facebook.com/profile.php?id=100086701681128)
[![Threads](https://img.shields.io/badge/Threads-@justdavid__tech-000000?style=for-the-badge&logo=threads)](https://www.threads.com/@justdavid_tech)

</div>

**Portfolio:** [luxfurnitures.vercel.app](https://luxfurnitures.vercel.app/)

---

##  Acknowledgments

- [React.js](https://reactjs.org/) - The amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library
- [Vercel](https://vercel.com/) - For seamless deployment
- All contributors and supporters

---

##  Contact & Support

- **Email**: justdavid-tech@gmail.com
- **WhatsApp**: +234 903 997 7439

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

</div>