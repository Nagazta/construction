# SolidForm Construction Website

A modern, professional website for SolidForm Construction - a Cebu-based construction company specializing in reliable, high-quality construction solutions for residential and commercial projects.

## Features

- Modern, responsive design
- Professional construction-themed color palette
- 5 pages: Home, About Us, Services, Past Projects, Contact Us
- Contact form with EmailJS integration
- Static site built with React + Vite
- Ready for Netlify deployment

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **EmailJS** - Email functionality (no backend required)
- **CSS** - Styling (no CSS framework dependencies)
- **Google Fonts** - Poppins (headings) and Inter (body text)

## Color Palette

- **Primary Colors:**
  - Charcoal Gray: `#2B2B2B`
  - Concrete Gray: `#6B7280`

- **Accent Colors:**
  - Construction Yellow: `#F4B400`
  - Steel Blue: `#1F3A5F`

- **Background:**
  - Off-white: `#F8F9FA`
  - Pure White: `#FFFFFF`

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd construction
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Then edit `.env` and add your EmailJS credentials (see EmailJS Configuration section below)

4. Run the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## EmailJS Configuration

The contact form uses EmailJS to send emails without a backend. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)

2. Create an Email Service:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your Service ID

3. Create an Email Template:
   - Go to Email Templates
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{phone}}` - sender's phone
     - `{{message}}` - message content
   - Note your Template ID

4. Get your Public Key:
   - Go to Account > API Keys
   - Copy your Public Key

5. Update the environment variables:
   - Open `.env` file in the root directory
   - Replace the placeholder values:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - **Important:** Never commit the `.env` file to git (it's already in `.gitignore`)

## Building for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Build the project
```bash
npm run build
```

3. Deploy
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. Build the project locally
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

### Option 3: Connect Git Repository

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to Netlify
3. Click "Add new site" > "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Project Structure

```
construction/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx         # Main app component
│   ├── App.css
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Company Information

1. **Company Name/Branding:**
   - Update in `src/components/Navbar.jsx`
   - Update in `src/components/Footer.jsx`
   - Update page titles in `index.html`

2. **Contact Information:**
   - Update in `src/pages/Contact.jsx`
   - Update in `src/components/Footer.jsx`

3. **Services:**
   - Modify the services array in `src/pages/Services.jsx`

4. **Projects:**
   - Update the projects array in `src/pages/Projects.jsx`

### Add Images

Replace the placeholder image divs with actual images:

1. Add your images to `src/assets/images/`
2. Import them in the relevant component
3. Replace the placeholder `<div>` with `<img>` tags

Example:
```javascript
import projectImage from '../assets/images/project1.jpg';

// Replace this:
<div className="project-image-placeholder">
  <span>Project Image</span>
</div>

// With this:
<img src={projectImage} alt="Project description" />
```

## License

This project is licensed for use by SolidForm Construction.

## Support

For questions or support, contact: info@solidform.com
