# MiniUI CSS

A **Strategic Minimalist UI** framework - first-user oriented with subtle, mini interfaces designed to be ready to use and plug & play. Inspired by Bootstrap's syntax for class naming. Bootstrap users are welcome. Built with components, SCSS, and Dark Mode support for modern interfaces with minimal configuration.

## Features

- ✨ **Component-based**: Buttons, Cards, Modals, Action Menus, and Utility Classes
- 🎨 **Dark Mode**: Built-in support for dark mode using CSS custom properties
- 🚀 **Modern Stack**: Built with Vite, SCSS, and modern CSS features
- 🎯 **Lightweight**: Minimal CSS footprint with utility-first approach
- 🌙 **Themeable**: Easy customization using SCSS variables and CSS design tokens
- 🔧 **Developer Friendly**: Hot module replacement, fast builds, and great DX
- 📝 **Utility Classes**: Border utilities and text color utilities for rapid development

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
│   │   │   └── _mixins.scss
│   │   ├── components/          # UI Components
│   │   │   ├── btn/            # Buttons (variants, sizes)
│   │   │   │   ├── _btn.scss
│   │   │   │   ├── _btn-primary.scss
│   │   │   │   ├── _btn-secondary.scss
│   │   │   │   ├── _btn-success.scss
│   │   │   │   ├── _btn-warning.scss
│   │   │   │   ├── _btn-danger.scss
│   │   │   │   ├── _btn-info.scss
│   │   │   │   ├── _btn-ghost.scss
│   │   │   │   ├── _btn-action.scss
│   │   │   │   └── _index.scss
│   │   │   ├── card/           # Card components
│   │   │   │   ├── _card.scss
│   │   │   │   ├── _card-header.scss
│   │   │   │   ├── _card-body.scss
│   │   │   │   ├── _card-footer.scss
│   │   │   │   ├── _card-title.scss
│   │   │   │   └── _index.scss
│   │   │   ├── modal/          # Modal components
│   │   │   │   ├── _modal-dialog.scss
│   │   │   │   ├── _modal-overlay.scss
│   │   │   │   └── _index.scss
│   │   │   ├── action-menu/    # Action menu component
│   │   │   │   ├── _action-menu.scss
│   │   │   │   └── _index.scss
│   │   │   └── utilities/      # Utility classes
│   │   │       ├── _borders.scss
│   │   │       ├── _text-colors.scss
│   │   │       └── _index.scss
│   │   ├── themes/            # Light and dark theme
│   │   │   ├── _light.scss
│   │   │   └── _dark.scss
│   │   └── main.scss          # Entry point
│   ├── index.html              # Demo playground
├── pages/                      # Demo pages
│   ├── buttons.html
│   ├── cards.html
│   ├── modals.html
│   ├── action-menu.html
│   └── utilities.html
├── dist/                       # Built assets
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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dist/assets/main.css" />
  </head>
  <body>
    <button class="btn btn-primary">Click me</button>
  </body>
</html>
```

### Demo Pages

Visit the demo pages to see components in action:

- [Buttons](/pages/buttons.html) - Button variants, sizes, and states
- [Cards](/pages/cards.html) - Card components with sections
- [Modals](/pages/modals.html) - Modal dialogs with overlay
- [Action Menu](/pages/action-menu.html) - Action menu component
- [Utilities](/pages/utilities.html) - Border and text color utilities

### Dark Mode

Dark mode is enabled automatically based on system preferences. To manually toggle:

```javascript
// Enable dark mode
document.documentElement.setAttribute('data-theme', 'dark')

// Enable light mode
document.documentElement.setAttribute('data-theme', 'light')
```

## Components

### Buttons

```html
<!-- Color Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>

<!-- Button Ghost -->
<button class="btn btn-ghost">Ghost</button>

<!-- Button Action (for action menus) -->
<button class="btn btn-action">
  <svg>...</svg>
  Edit
</button>

<!-- Button Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Card title</h5>
  </div>
  <div class="card-body">
    <p>Some quick example text.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
  <div class="card-footer">
    <button class="btn btn-ghost">Cancel</button>
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Modals

```html
<div class="modal-overlay" id="modal">
  <div class="modal-dialog">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Modal Title</h5>
      </div>
      <div class="card-body">
        <p>Modal content goes here.</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>

<script>
  function closeModal() {
    document.getElementById('modal').style.display = 'none'
  }
</script>
```

### Action Menu

```html
<div class="card action-menu">
  <button class="btn btn-action">
    <svg>...</svg>
    Edit
  </button>
  <button class="btn btn-action">
    <svg>...</svg>
    Duplicate
  </button>
  <button class="btn btn-action text-danger">
    <svg>...</svg>
    Delete
  </button>
</div>
```

### Utilities

#### Border Utilities

```html
<div class="border">Full border</div>
<div class="border-top">Top border only</div>
<div class="border-bottom">Bottom border only</div>
<div class="border-left">Left border only</div>
<div class="border-right">Right border only</div>
<div class="border-start">Start border (RTL-aware)</div>
<div class="border-end">End border (RTL-aware)</div>
<div class="border border-0">No border</div>
```

#### Text Color Utilities

```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success message</p>
<p class="text-warning">Warning message</p>
<p class="text-danger">Error message</p>
<p class="text-info">Information message</p>
```

## Customization

### SCSS Variables

Customize the framework by modifying variables in `src/scss/abstracts/_variables.scss`:

```scss
$prefix: 'mui' !default;

// Font Weights
$font-weights: (
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
) !default;

// Border Radius
$border-radius: (
  sm: 0.125rem,
  base: 0.25rem,
  md: 0.375rem,
  lg: 0.5rem,
  xl: 0.75rem,
  full: 9999px
) !default;

// Card Border Radius
$card-border-radius: (
  base: 1.75rem,
  lg: 2rem
) !default;

// Transitions
$transitions: (
  base: all 150ms ease-in-out,
  fast: all 100ms ease-in-out,
  slow: all 300ms ease-in-out
) !default;

// Spacing
$spacers: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  5: 1.25rem,
  6: 1.5rem
) !default;
```

### CSS Variables (Design Tokens)

Override CSS variables for runtime customization:

#### Light Mode

```css
:root {
  --mui-bg-color: #ffffff;
  --mui-text-color: #0f1624;
  --mui-bg-elevated: #ffffff;

  --mui-primary: #0f1624;
  --mui-primary-hover: #272729;
  --mui-primary-text: #ffffff;

  --mui-secondary: #f8fafc;
  --mui-secondary-hover: #f1f5f9;
  --mui-secondary-text: #0f1624;

  --mui-success: #86efac;
  --mui-success-hover: #74d98e;
  --mui-success-text: #0f1624;
  --mui-text-success: #22c55e;

  --mui-warning: #fcd34d;
  --mui-warning-hover: #eac03c;
  --mui-warning-text: #0f1624;
  --mui-text-warning: #f59e0b;

  --mui-danger: #fca5a5;
  --mui-danger-hover: #f78787;
  --mui-danger-text: #0f1624;
  --mui-text-danger: #ef4444;

  --mui-info: #7dd3fc;
  --mui-info-hover: #68c1eb;
  --mui-info-text: #0f1624;
  --mui-text-info: #0ea5e9;

  --mui-text-primary: #0f1624;
  --mui-text-secondary: #64748b;

  --mui-border-color: #ececec;

  --mui-radius-base: 0.375rem;
  --mui-radius-sm: 0.125rem;
  --mui-radius-lg: 0.5rem;
}
```

#### Dark Mode

```css
[data-theme='dark'] {
  --mui-bg-color: #13171f;
  --mui-text-color: #f8fafc;
  --mui-bg-elevated: #374151;

  --mui-primary: #f8fafc;
  --mui-primary-hover: #e2e8f0;
  --mui-primary-text: #111827;

  --mui-secondary: #1e293b;
  --mui-secondary-hover: #334155;
  --mui-secondary-text: #f8fafc;

  --mui-success: #5ad382;
  --mui-success-hover: #7adfa1;
  --mui-success-text: #111827;
  --mui-text-success: #86efac;

  --mui-warning: #e5b338;
  --mui-warning-hover: #ecc760;
  --mui-warning-text: #111827;
  --mui-text-warning: #fcd34d;

  --mui-danger: #ef6b6b;
  --mui-danger-hover: #f59090;
  --mui-danger-text: #111827;
  --mui-text-danger: #fca5a5;

  --mui-info: #4bb8e9;
  --mui-info-hover: #73c9ee;
  --mui-info-text: #111827;
  --mui-text-info: #7dd3fc;

  --mui-text-primary: #f8fafc;
  --mui-text-secondary: #94a3b8;

  --mui-border-color: #374151;
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
