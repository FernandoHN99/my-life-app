---
name: react-design-patterns-browser-optimization
description: Modern React component architecture and browser rendering optimization. Use when building complex UI interactions, implementing reusable component patterns, optimizing client-side rendering performance, or handling JavaScript-heavy SPAs with proper loading states and resource management.
---

# React Design Patterns & Browser Optimization

Component architecture and rendering optimization for scalable React applications.

## When to Apply

- Building complex UI with reusable component patterns
- Optimizing JavaScript-heavy SPAs and client-side rendering
- Managing loading states and network-dependent content
- Implementing performance-critical user interactions

## Critical Rules

**Component Export Consistency**: Always use `export default` for single components

```javascript
// WRONG - named export for single component
export { Button };

// RIGHT - default export for components
export default Button;
```

**Network Idle for SPAs**: Use `networkidle2` for JavaScript-heavy applications

```javascript
// WRONG - default domcontentloaded may miss dynamic content
gotoOptions: { waitUntil: "load" }

// RIGHT - wait for network activity to stabilize
gotoOptions: { waitUntil: "networkidle2" }
```

**Resource Blocking for Performance**: Block unnecessary resources in production

```javascript
// WRONG - loading all resources
{ url: "https://app.com" }

// RIGHT - block images and non-critical CSS
{
  url: "https://app.com",
  rejectResourceTypes: ["image"],
  rejectRequestPattern: ["/^.*\\.(css)$/"]
}
```

## Key Patterns

### Component Module Organization

```javascript
// Button.js - Single responsibility
import React from 'react';

const Button = ({ variant, children, ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

### Composition Over Inheritance

```javascript
// DangerButton.js - Compose existing components
import React from 'react';
import Button from './Button';

const DangerButton = (props) => {
  return <Button variant="danger" {...props} />;
};

export default DangerButton;
```

### SPA Loading Optimization

```javascript
// For React SPAs with dynamic content
const renderConfig = {
  url: "https://my-spa.com",
  gotoOptions: {
    waitUntil: "networkidle2",
    timeout: 30000
  },
  waitForSelector: ".main-content-loaded"
};
```

### Performance Resource Control

```javascript
// Block non-critical resources for faster rendering
const optimizedConfig = {
  url: "https://heavy-app.com",
  rejectResourceTypes: ["image", "font"],
  rejectRequestPattern: ["/analytics/", "/tracking/"],
  gotoOptions: {
    waitUntil: "networkidle0"
  }
};
```

### Viewport Configuration

```javascript
// Custom viewport for component testing
{
  viewport: {
    width: 1200,
    height: 800,
    deviceScaleFactor: 1
  },
  setJavaScriptEnabled: true
}
```

## Common Mistakes

- **Missing network idle**: Using default `domcontentloaded` for SPAs causes incomplete rendering
- **Over-bundling resources**: Not blocking unnecessary images/fonts in performance-critical scenarios  
- **Inconsistent exports**: Mixing named and default exports breaks import expectations
- **Timeout too short**: 30s default may be insufficient for complex JavaScript applications