# Mukesh Patel - Portfolio

A modern, interactive portfolio website showcasing a Full Stack Java Developer & Software Engineer with premium UI/UX design and animated components.

## ✨ Features

- **🎬 Cinematic Opening**: Immersive loading experience with animated intro
- **🌟 Hero Section**: Dynamic introduction with gradient text and call-to-action buttons
- **💼 Skills Section**: Categorized skill showcase with interactive cards
- **📊 LeetCode & GitHub Stats**: Live integration of coding practice and open-source contributions
  - Real-time LeetCode problem-solving statistics
  - GitHub contribution graph and activity metrics
  - Premium popup effects with color-matched neon glows
  - Mobile-first responsive design with touch interactions
  - GPU-accelerated animations (scale 1.06 + neon shadows)
- **🚀 Projects Section**: Portfolio of key projects (ATM Simulator, Airline Management System, Quiz Application)
- **💬 AI Assistant**: Interactive chatbot for quick information
- **📧 Contact Form**: Beautiful contact section with availability status
- **🎨 Theme System**: Multiple themes (Dark, Light, Cosmic, Aurora) with smooth transitions
- **🎭 3D Background**: Living background with particle effects and aurora animations

## 🎨 Design Highlights

- **Modern Purple/Violet Gradient Theme**: Premium color palette with violet (#8b5cf6), purple (#a855f7), and fuchsia (#d946ef)
- **Glass-morphism Effects**: Frosted glass panels with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Premium Hover Effects**: 
  - 1.06x scale with GPU-accelerated transforms
  - Color-matched neon glow shadows (purple/emerald/gold)
  - Cubic-bezier easing for smooth motion
  - Subtle glow and elevation with floating effect
  - Mobile touch support with whileTap animations
  - No layout shift on interaction
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Touch-Optimized**: 44px minimum tap targets, whileTap interactions, no blue tap highlights
- **Performance Optimized**: Lighthouse 90+ score ready with `will-change` optimizations and reduced motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/henasivenom/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

- **CinematicOpening**: Full-screen animated intro sequence
- **LivingBackground**: Dynamic particle system with aurora effects
- **ThreeDReality**: 3D background layer with depth
- **HeroSection**: Main landing section with animated content
- **SkillsSection**: Interactive skills grid with categories
- **LeetCodeStats**: Real-time coding statistics integration with premium popup effects
  - Interactive cards with color-matched neon glows
  - Projects card: Purple/violet neon glow
  - Commits card: Emerald/cyan neon glow
  - Experience card: Yellow/orange gold glow
  - Mobile-optimized with clamp() typography and touch support
- **ProjectsSection**: Portfolio showcase with hover effects
- **ContactSection**: Form with status indicators
- **AiPresence**: Chatbot assistant with conversational UI
- **NewNavbar**: Sticky navigation with active section tracking
- **ThemeContext**: Global theme management system

## 🌐 Live Stats Integration

### LeetCode
- Live problem-solving statistics
- Submission heatmap (last 52 weeks)
- Difficulty breakdown (Easy/Medium/Hard)
- Profile link integration

### GitHub
- Contribution graph with custom purple theme
- Repository and activity links
- Language distribution stats
- Streak tracking

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: { ... }, // Main theme colors
  accent: { ... },  // Accent colors
}
```

### Content
- Update personal information in component files
- Modify skills in `SkillsSection.tsx`
- Add projects in `ProjectsSection.tsx`
- Change LeetCode/GitHub usernames in `LeetCodeStats.tsx`

### Theme
Toggle between themes using the theme switcher in the navbar:
- Dark (default)
- Light
- Cosmic
- Aurora

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ⚡ Performance Features

- GPU-accelerated animations with `will-change: transform`
- Optimized image loading with lazy loading and async decoding
- Code splitting with Next.js
- Minimal bundle size
- Smooth 0.4s transitions with custom cubic-bezier easing
- Debounced scroll handlers
- Mobile-first responsive design with clamp() typography
- Touch-optimized interactions (44px minimum tap targets)
- Reduced motion support for accessibility
- No layout shift (transform-based animations only)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **Portfolio**: [Live Demo](https://your-portfolio-url.vercel.app)
- **GitHub**: [@henasivenom](https://github.com/henasivenom)
- **LeetCode**: [@henasi_venom](https://leetcode.com/u/henasi_venom/)
- **Email**: amukeshpatel222@gmail.com

---

Made with 💜 by Mukesh Patel
