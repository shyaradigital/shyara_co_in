# UI Component Library

## Design System

### Colors

- **Primary:** `#111111` (Almost black)
- **Accent:** `#6C47FF` (Shyara Purple)
- **Background:** `#F9FAFB` (Light gray)
- **Muted Grey:** `#9CA3AF`

### Typography

- **Display Font:** Playfair Display (headings)
- **Body Font:** Inter (body text)
- **Fluid Typography:** All text uses `clamp()` for responsive sizing

### Spacing

- Container max-width: `1280px`
- Padding adjusts per breakpoint
- Cards stack under `768px`

### Animations

- Hover effects: `translateY(-4px)` with subtle shadow
- Fade-up on scroll
- Transition duration: `< 200ms`

---

## Components

### Button

**Variants:**
- `default` - Primary button (black background)
- `accent` - Accent button (purple background)
- `outline` - Outlined button
- `ghost` - Ghost button
- `link` - Link-style button

**Sizes:**
- `default` - Standard size
- `sm` - Small
- `lg` - Large
- `icon` - Icon-only

**Usage:**
```tsx
<Button variant="accent" size="lg">Click me</Button>
```

---

### Card

Elevated card component with header, content, and footer sections.

**Usage:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

---

### Input

Text input field with validation states.

**Usage:**
```tsx
<Input type="email" placeholder="Enter email" />
```

---

### Textarea

Multi-line text input.

**Usage:**
```tsx
<Textarea placeholder="Enter message" rows={6} />
```

---

### Label

Form label component.

**Usage:**
```tsx
<Label htmlFor="email">Email</Label>
```

---

### Navigation

Responsive navigation component with:
- Desktop horizontal menu
- Mobile hamburger menu
- Active state highlighting

---

### Footer

Site footer with:
- Company information
- Navigation links
- Contact information
- Copyright notice

---

## Sections

### HeroSection

Full-width hero section with:
- Large heading
- Subtext
- Call-to-action buttons

### AboutSection

Content section for about information.

### DivisionsSection

Grid of division/service cards.

### WhyChooseUsSection

Three-column pillar layout.

### CTASection

Call-to-action section with accent background.

### ServicesSection

Service cards grid with features list.

---

## Responsive Breakpoints

- **Mobile:** `< 768px` - Single column, stacked layout
- **Tablet:** `768px - 1024px` - Two columns
- **Desktop:** `> 1024px` - Three columns, full layout

---

## Accessibility

- All interactive elements are keyboard accessible
- ARIA labels where appropriate
- Semantic HTML structure
- Sufficient color contrast ratios

