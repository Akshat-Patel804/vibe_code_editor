# 🎵 VibeCode Editor

A modern, intelligent cloud-based code editor with real-time execution capabilities, advanced project management, and AI-powered features. VibeCode Editor combines the power of Monaco Editor with WebContainer technology to provide a seamless coding experience directly in your browser.

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=nextjs)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Database Schema](#database-schema)
- [Supported Languages & Templates](#supported-languages--templates)
- [Architecture Highlights](#architecture-highlights)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

VibeCode Editor is a full-featured cloud-based IDE designed to enable developers to:
- Write, edit, and run code directly from the browser
- Manage multiple coding projects with an intuitive dashboard
- Execute code in isolated WebContainer environments
- Collaborate and bookmark favorite projects
- Switch between different project templates seamlessly
- Leverage AI-powered code suggestions and completions

This project demonstrates proficiency in:
- Building scalable full-stack applications
- Implementing complex state management
- OAuth authentication integration
- Real-time file operations and code execution
- Database design with Prisma ORM
- Modern UI/UX patterns with Tailwind CSS and Shadcn components

## ✨ Key Features

### 🔐 Authentication & Authorization
- **OAuth Integration**: Seamless sign-in with GitHub and Google
- **User Roles**: ADMIN, USER, and PREMIUM_USER roles with role-based access control
- **Session Management**: Secure NextAuth v5 implementation with MongoDB persistence
- **User Profiles**: Avatar support and personalized user data

### 💻 Advanced Code Editor
- **Monaco Editor Integration**: Professional code editor with syntax highlighting for 40+ languages
- **Real-time Editing**: Live code updates with auto-save capabilities
- **Multi-language Support**: JavaScript, TypeScript, Python, Java, C++, Go, Rust, and more
- **Theme Support**: Light and dark mode with theme persistence

### 🚀 Code Execution
- **WebContainer API**: Execute Node.js projects directly in the browser sandbox
- **Terminal Integration**: xterm-based terminal for running commands and scripts
- **Live Preview**: Real-time rendering of web applications
- **Isolated Environment**: Secure execution sandbox preventing external access

### 📁 Project Management
- **CRUD Operations**: Create, read, update, and delete coding projects
- **Project Duplication**: Clone existing projects with all files intact
- **Smart Search & Filter**: Quickly find projects by name or tags
- **Project Metadata**: Title, description, creation date, and modification tracking

### 🌟 Bookmarking System
- **Star/Bookmark Projects**: Mark favorite projects for quick access
- **Persistent Bookmarks**: Stored in database with user associations
- **Quick Navigation**: Dedicated section for starred projects

### 📦 Multiple Project Templates
- **React**: Modern React with hooks and TypeScript
- **Next.js**: Full-stack Next.js applications
- **Vue**: Vue 3 with composition API
- **Express**: Backend Express.js servers
- **Hono**: Lightweight web framework
- **Angular**: Enterprise-grade Angular framework

### 🤖 AI Features (Extensible)
- **Code Completion API**: Backend route for AI-powered suggestions
- **Smart Suggestions**: Context-aware code recommendations
- **Hook System**: `useAIsuggestion` hook for client-side integration

### 🎨 Rich UI Components
- **Shadcn/ui Library**: 40+ pre-built, customizable components
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Dark Mode**: Native dark mode support with theme switching
- **Accessibility**: WCAG compliant components with proper ARIA attributes

### 📊 Dashboard
- **Project Overview**: Tabular view of all user projects
- **Quick Actions**: Edit, delete, and duplicate projects inline
- **Empty State**: Helpful guidance when no projects exist
- **Repository Integration**: Add projects from GitHub repositories

## 🛠 Tech Stack

### Frontend
- **Next.js 16.2.9** - React meta-framework with server components
- **React 19.2.4** - UI library with concurrent rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Monaco Editor** - Professional code editor
- **Zustand** - Lightweight state management
- **React Query** - Server state management (via fetch patterns)

### Backend
- **Next.js API Routes** - Serverless API functions
- **Prisma ORM** - Database abstraction and migrations
- **MongoDB** - NoSQL database (with Prisma Accelerate support)
- **NextAuth v5** - Authentication solution

### DevTools & Libraries
- **ESLint** - Code linting
- **Tailwind CSS PostCSS** - CSS processing
- **React Compiler** - Babel plugin for component optimization
- **xterm** - Terminal emulation in the browser
- **WebContainer API** - Browser-based code execution
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Recharts** - Data visualization

## 📁 Project Structure

```
VibeCode Editor/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication layout group
│   │   └── auth/sign-in/        # Sign-in page
│   ├── (root)/                  # Public layout group
│   │   └── page.tsx             # Landing page
│   ├── api/                     # API routes
│   │   ├── auth/[...nextauth]/  # NextAuth configuration
│   │   ├── code-completion/     # AI code completion endpoint
│   │   └── template/[id]/       # Template retrieval endpoint
│   ├── dashboard/               # User dashboard
│   │   └── page.tsx             # Projects overview
│   └── playground/              # Code editor workspace
│       └── [id]/                # Project editor view
│
├── components/                   # Reusable React components
│   ├── ui/                      # Shadcn/ui components (40+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── sidebar.tsx
│   │   └── ...
│   └── providers/               # Context providers
│       └── theme-providers.tsx  # Next-themes integration
│
├── modules/                      # Feature modules
│   ├── auth/                    # Authentication module
│   │   ├── actions/             # Server actions
│   │   ├── components/          # Auth UI components
│   │   ├── hooks/               # Auth hooks
│   │   └── types.ts             # Type definitions
│   ├── dashboard/               # Dashboard module
│   │   ├── actions/             # CRUD operations
│   │   ├── components/          # Dashboard UI
│   │   └── types.ts
│   ├── playground/              # Code editor module
│   │   ├── actions/             # File operations
│   │   ├── components/          # Editor UI
│   │   ├── hooks/               # Editor hooks
│   │   └── lib/                 # Utilities
│   ├── webcontainers/           # WebContainer integration
│   │   ├── components/
│   │   └── hooks/
│   └── test/                    # Testing utilities
│
├── lib/                         # Utility functions
│   ├── db.ts                   # Database utilities
│   ├── template.ts             # Template management
│   └── utils.ts                # General utilities
│
├── hooks/                       # Global custom hooks
│   └── use-mobile.ts           # Mobile detection hook
│
├── prisma/                      # Database schema
│   └── schema.prisma           # Prisma data model
│
├── public/                      # Static assets
├── generated/                   # Generated Prisma client
├── auth.config.ts              # NextAuth provider config
├── auth.ts                      # NextAuth main config
├── middleware.ts               # Next.js middleware
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS config
└── package.json                # Dependencies
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 18.17+ or 20+
- **npm** or **yarn** package manager
- **MongoDB** database (local or Atlas)
- GitHub and Google OAuth credentials

### Step 1: Clone & Install

```bash
git clone https://github.com/yourusername/vibecode-editor.git
cd vibecode-editor

npm install
# or
yarn install
```

### Step 2: Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/vibecode?retryWrites=true&w=majority"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-minimum-32-chars"

# OAuth - GitHub
AUTH_GITHUB_ID="your-github-oauth-id"
AUTH_GITHUB_SECRET="your-github-oauth-secret"

# OAuth - Google
AUTH_GOOGLE_ID="your-google-oauth-id"
AUTH_GOOGLE_SECRET="your-google-oauth-secret"

# Optional: Prisma Accelerate (for edge function queries)
PRISMA_ACCELERATE_URL="https://accelerate.prisma.io/..."
```

### Step 3: Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# (Optional) Seed the database
npx prisma db seed
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | MongoDB connection string | `mongodb+srv://...` |
| `NEXTAUTH_URL` | Application URL for NextAuth | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret key for JWT signing | Min 32 characters |
| `AUTH_GITHUB_ID` | GitHub OAuth App ID | From GitHub Developer Settings |
| `AUTH_GITHUB_SECRET` | GitHub OAuth App Secret | From GitHub Developer Settings |
| `AUTH_GOOGLE_ID` | Google OAuth Client ID | From Google Cloud Console |
| `AUTH_GOOGLE_SECRET` | Google OAuth Client Secret | From Google Cloud Console |

### Obtaining OAuth Credentials

**GitHub:**
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`

**Google:**
1. Go to Google Cloud Console
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

## 📖 Usage

### Landing Page
- Visit the home page to see the VibeCode Editor introduction
- Click "Get Started" button to access the dashboard (requires login)

### Authentication
- Click sign-in button in the top navigation
- Choose GitHub or Google OAuth
- Authorize and return to the dashboard

### Dashboard
- **View Projects**: See all your coding projects in a table
- **Create Project**: Click "New Project" to create from templates
- **Add from Repo**: Import projects from GitHub repositories
- **Edit Project**: Update project title and description
- **Delete Project**: Remove projects (with confirmation)
- **Duplicate Project**: Clone a project with all files
- **Star Project**: Bookmark favorite projects for quick access

### Code Editor
- Navigate to any project from the dashboard
- **File Explorer**: Browse and manage project files
- **Code Editor**: Edit files with syntax highlighting
- **Terminal**: Execute commands and run scripts
- **Live Preview**: See rendered output in real-time
- **AI Suggestions**: Get code completions (when enabled)

## 🔌 API Routes

### Authentication
- `POST /api/auth/signin` - Initiate sign-in
- `POST /api/auth/callback/[provider]` - OAuth callback
- `GET /api/auth/session` - Get current session

### Code Completion
- `POST /api/code-completion` - Get AI code suggestions
  ```json
  {
    "code": "const sum = ",
    "language": "javascript"
  }
  ```

### Templates
- `GET /api/template/[id]` - Fetch template by ID
- Returns pre-configured project template with starter files

## 📊 Database Schema

### User Model
```prisma
model User {
  id                String    @id @default(cuid())
  name              String?
  email             String    @unique
  image             String?
  role              UserRole  @default(USER)  // ADMIN, USER, PREMIUM_USER
  accounts          Account[]
  myPlayground      Playground[]
  starredPlayground StarMark[]
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}
```

### Playground Model (Projects)
```prisma
model Playground {
  id             String    @id @default(cuid())
  title          String
  description    String?
  template       Templates @default(REACT)
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  userId         String
  user           User      @relation(fields: [userId], references: [id])
  starMarks      StarMark[]
  templateFiles  TemplateFile[]
}
```

### StarMark Model (Bookmarks)
```prisma
model StarMark {
  id           String    @id @default(cuid())
  userId       String
  playgroundId String
  isMarked     Boolean
  user         User      @relation(fields: [userId], references: [id])
  playground   Playground @relation(fields: [playgroundId], references: [id])
}
```

### Account Model (OAuth)
```prisma
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String  // github, google
  providerAccountId String
  refreshToken      String?
  accessToken       String?
  expiresAt         Int?
  user              User    @relation(fields: [userId], references: [id])
}
```

## 🌐 Supported Languages & Templates

### Project Templates
- **React** - React with hooks and TypeScript
- **Next.js** - Full-stack Next.js applications
- **Vue** - Vue 3 with Composition API
- **Express** - Backend API server
- **Hono** - Lightweight web framework
- **Angular** - Enterprise Angular applications

### Supported Languages (40+)
JavaScript, TypeScript, JSX, TSX, Python, Java, C, C++, C#, PHP, Ruby, Go, Rust, Shell, SQL, HTML, CSS, SCSS, Less, JSON, XML, YAML, Markdown, Dockerfile, and more.

## 🏗 Architecture Highlights

### Modular Architecture
- Feature-based modules for maintainability
- Separation of concerns (actions, components, hooks)
- Reusable utility functions and custom hooks

### Server-Side Rendering
- Next.js App Router with server components
- Reduced JavaScript bundle size
- Improved SEO and performance

### Authentication Flow
```
User Login → OAuth Provider → NextAuth Callback
          ↓
    Prisma Adapter
          ↓
    MongoDB Storage
          ↓
    JWT Session Token
```

### State Management
- **Server State**: Prisma + MongoDB for persistence
- **Client State**: React hooks + Zustand for UI state
- **Form State**: React hook patterns for forms

### WebContainer Integration
- Sandboxed code execution environment
- Node.js runtime in browser
- Isolated file system per project

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code (if configured)
npm run format
```

### Key Development Patterns

**Server Actions** (modules/*/actions/index.ts)
- Secure backend operations from client
- Database mutations and queries
- Authentication checks

**Custom Hooks** (modules/*/hooks/)
- `useFileExplorer` - File tree management
- `usePlayground` - Editor state management
- `useAIsuggestion` - AI feature integration
- `useWebContainer` - WebContainer lifecycle

**API Routes** (app/api/)
- RESTful endpoints for external integrations
- NextAuth configuration
- Template and code completion services

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm start
```

### Deployment Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel login
vercel
```

**Docker**
Create a `Dockerfile` for containerized deployment.

**Traditional Hosting**
- Build: `npm run build`
- Start: `npm start`
- Ensure environment variables are configured

### Performance Optimizations
- ✅ Next.js React Compiler enabled
- ✅ Image optimization with next/image
- ✅ Code splitting with dynamic imports
- ✅ CSS optimization with Tailwind
- ✅ Prisma Accelerate for edge functions

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎓 What I Learned Building This

- **Full-Stack Development**: Building production-grade web applications
- **OAuth Integration**: Implementing secure authentication with multiple providers
- **Database Design**: Normalization and relationship modeling with Prisma
- **Real-Time Features**: Implementing live code editing and execution
- **WebContainer Technology**: Sandboxed code execution in browsers
- **TypeScript**: Advanced type safety and generics
- **Component Architecture**: Building scalable, reusable UI systems
- **Performance Optimization**: Next.js best practices and optimization techniques

## 📞 Contact & Links

- **GitHub**: [yourusername](https://github.com/yourusername)
- **LinkedIn**: [yourprofile](https://linkedin.com/in/yourprofile)
- **Portfolio**: [yourportfolio.com](https://yourportfolio.com)
- **Email**: your.email@example.com

---

**Made with ❤️ by [Your Name]**
