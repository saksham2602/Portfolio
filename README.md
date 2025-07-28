# Saksham Bhatia - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a professional aurora effect animation and smooth interactions.

## ✨ Features

- **Professional Aurora Effect**: Custom silver and white aurora animation for the name
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes
- **Interactive Components**: Magnetic buttons, hover effects, and smooth transitions
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing

## 🎨 Key Components

- **Hero Section**: Animated name with aurora effect
- **About Section**: Professional background and skills
- **Projects**: Showcase of work with interactive cards
- **Contact**: Professional contact form
- **Navigation**: Smooth scrolling navigation
- **Theme Toggle**: Dark/light mode switcher

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/saksham2602/Portfolio.git
cd Portfolio
```

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for production
```bash
npm run build
```

## 🎯 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section with aurora effect
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Contact.tsx     # Contact form
│   │   └── ui/             # Reusable UI components
│   ├── styles/
│   │   └── globals.css     # Global styles and animations
│   └── App.tsx             # Main app component
├── public/                 # Static assets
├── index.html              # HTML template
└── package.json            # Dependencies and scripts
```

## 🌟 Special Features

### Aurora Effect Animation
The hero section features a custom aurora effect that creates a flowing silver and white gradient animation on the name "Saksham Bhatia". This effect:
- Uses CSS keyframes for smooth animation
- Implements a breathing effect with brightness/contrast changes
- Flows seamlessly without visible restart points
- Maintains professional appearance

### Professional Animations
- Staggered entrance animations for all sections
- Smooth hover effects and transitions
- Magnetic button interactions
- Responsive design with proper breakpoints

## 🎨 Customization

### Colors and Themes
The project uses CSS custom properties for easy theming:
- Primary colors can be modified in `src/styles/globals.css`
- Aurora effect colors are in the `.aurora-silver-white-text` class
- Dark/light mode variables are defined in the CSS root

### Animations
- Animation timing can be adjusted in component variants
- Aurora effect speed can be modified in the CSS keyframes
- Stagger delays can be customized in container variants

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure custom domain if needed

### Vercel/Netlify
- Connect your GitHub repository
- Set build command: `npm run build`
- Set output directory: `dist`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub**: [@saksham2602](https://github.com/saksham2602)
- **LinkedIn**: [Saksham Bhatia](https://www.linkedin.com/in/saksham-bhatia-932aba25a/)
- **Email**: bhatiasaksham26@gmail.com

---

Built with ❤️ by Saksham Bhatia 