# react-coco-icons

React icon components based on the COCO icon set. 263 tree-shakeable SVG icons with TypeScript types.

## Installation

```sh
npm install react-coco-icons
```

`react` (>= 16.8) is a peer dependency.

## Usage

```tsx
import { HomeIcon, SearchIcon } from 'react-coco-icons'

export function Toolbar() {
  return (
    <nav style={{ color: 'rebeccapurple', fontSize: 24 }}>
      <HomeIcon title="Home" />
      <SearchIcon width={32} height={32} color="red" />
    </nav>
  )
}
```

Every icon is exported with an `Icon` suffix (`HomeIcon`, `MapIcon`, `ThirtySecondsIcon`, ...). See `dist/index.d.ts` for the full list.

## Props

Each icon accepts all standard `SVGProps<SVGSVGElement>` plus:

| Prop | Description |
| --- | --- |
| `title` | Accessible title rendered as `<title>` inside the SVG. |
| `titleId` | `id` for the `<title>` element, referenced by `aria-labelledby`. |
| `width` / `height` | Size. Defaults to `1em`, so icons scale with the surrounding `font-size`. |
| `color` | Strokes and fills use `currentColor`, so set `color` (prop or CSS) to recolor. |
| `ref` | Forwarded to the underlying `<svg>` element. |

## Credits and license

The icons are from the COCO icon set. This package only converts them into React components; it does not own them. Check the COCO icons' original license before using them in your project.

The code in this package (build scripts and generated component wrappers) is licensed under the [ISC License](./LICENSE).
