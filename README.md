# MiniUI CSS

A minimalist CSS framework based on components with SCSS and Dark Mode support. Bootstrap-like approach for modern interfaces with minimal configuration.

## Features

- ✨ **Component-based**: Ready-to-use components like buttons, forms, cards, alerts, modals
- 🎨 **Dark Mode**: Built-in support for dark mode using CSS custom properties
- 📐 **Grid System**: 12-column responsive grid system
- 🚀 **Modern Stack**: Built with Vite, SCSS, and modern CSS features
- 🎯 **Lightweight**: Minimal CSS footprint with utility-first approach
- 🌙 **Themeable**: Easy customization using SCSS variables and design tokens
- 🔧 **Developer Friendly**: Hot module replacement, fast builds, and great DX

## Installation

```bash
npm install
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint SCSS files
npm run lint:style

# Fix linting issues
npm run lint:style:fix

# Format SCSS files
npm run format
```

## Project Structure

```
miniuicss/
├── src/
│   ├── scss/
│   │   ├── abstracts/           # Variables, functions, mixins
│   │   │   ├── _variables.scss
│   │   │   ├── _functions.scss
│   │   │   └── _mixins.scss
│   │   ├── themes/               # Light and dark theme
│   │   │   ├── _light.scss
│   │   │   └── _dark.scss
│   │   ├── layout/              # Grid and container
│   │   │   └── _grid.scss
│   │   └── main.scss           # Entry point
│   └── index.html              # Demo playground
├── dist/                      # Built assets
├── package.json
├── vite.config.js
├── postcss.config.js
└── README.md
```

## Usage

### Using in HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/assets/main.css">
</head>
<body>
  <button class="btn btn-primary">Click me</button>
</body>
</html>
```

### Dark Mode

Dark mode is enabled automatically based on system preferences. To manually toggle:

```javascript
// Enable dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Enable light mode
document.documentElement.setAttribute('data-theme', 'light');
```

## Components

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>

<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Forms

```html
<div class="form-group">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="name@example.com">
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1">
  <label class="form-check-label" for="check1">Check me out</label>
</div>

<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer">
    2 days ago
  </div>
</div>
```

### Alerts

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
```

### Grid System

```html
<div class="container">
  <div class="row">
    <div class="col-6">Half width</div>
    <div class="col-6">Half width</div>
  </div>
  <div class="row">
    <div class="col-md-4">Responsive</div>
    <div class="col-md-4">Responsive</div>
    <div class="col-md-4">Responsive</div>
  </div>
</div>
```

## Customization

### Design Tokens

Customize the framework by modifying SCSS variables in `src/scss/abstracts/_variables.scss`:

```scss
$prefix: 'mui' !default;

// Colors
$colors: (
  primary: (
    500: #3b82f6,
    // ...
  ),
  // ...
) !default;

// Spacing
$spacers: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  // ...
) !default;

// Border Radius
$border-radius: (
  base: 0.25rem,
  lg: 0.5rem,
  // ...
) !default;
```

### CSS Variables

Override CSS variables for runtime customization:

```css
:root {
  --mui-primary: #custom-color;
  --mui-bg-color: #custom-bg;
  --mui-border-radius: 8px;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
