# Gendewo Archery — Design Direction

## Three stylistic approaches

### Theme Name: Range Journal
Very light, editorial sports direction pairing sky blue, warm white, charcoal, and a signature lime accent. It treats the club like a field journal: decisive headlines, documentary photography, and compact factual labels.

Probability: 0.07

### Theme Name: Night Draw
A dark, cinematic club identity with sharp lime markers, quiet motion, and tactical range graphics. The mood is focused and nocturnal without leaning into sci-fi.

Probability: 0.04

### Theme Name: Sunlit Discipline
A warm, naturalist direction using clay, grass, and paper tones with imperfect edges and a slower, more tactile rhythm. It emphasizes craft, calm, and the outdoors.

Probability: 0.08

## Chosen approach: Range Journal

### Design Movement
Contemporary sports editorial with Swiss-informed grid discipline and the directness of a field notebook. It borrows the high-contrast display type, asymmetrical image crops, and utility labels of premium outdoor campaigns.

### Core Principles
1. **Tension and release:** layouts use diagonals, arrows, oversized display type, and cropped imagery to express the physical act of drawing a bow.
2. **Proof over hype:** every section is grounded in concrete program details, years active, locations, coach roles, and training cadence.
3. **Air + anchor:** pale sky space creates breathing room, while charcoal panels and lime markers anchor attention.
4. **Editorial utility:** labels, indices, coordinates, and microcopy feel like useful field notes rather than decoration.

### Color Philosophy
The pale blue of a highland morning is the emotional base: open, calm, and local to Wonosobo. Charcoal is the discipline and contrast of the range. Lime is reserved for moments of action—an arrow tip, a live state, a booking CTA—so it feels earned and unmistakable. Warm off-white keeps the interface from feeling sterile.

### Layout Paradigm
A responsive editorial canvas: asymmetric two-column introductions, hero type floating over an image field, split content cards, and sections that switch between full-bleed charcoal and open paper. Avoid a single centered column; let text and image balance each other from different edges.

### Signature Elements
- Circular arrow controls with a lime center on primary buttons.
- Small outlined index discs and uppercase field labels.
- A repeating diagonal arrow-line motif used as a quiet background texture.

### Interaction Philosophy
Interactions should feel like a clean draw: quick, directional, and intentional. Buttons compress slightly, links gain a lime underline or marker, and cards shift through color rather than heavy shadows. Mobile navigation opens as a full-height range log rather than a tiny dropdown.

### Animation
Use short 180–260ms ease-out transitions for controls. Images lift by a few pixels and sharpen on hover. Section reveals fade and translate no more than 12px, staggered by 40ms. Do not animate layout dimensions. Honor `prefers-reduced-motion` for all nonessential motion.

### Typography System
Display: **Anton** in uppercase for headlines, numbers, and strong section statements. Body: **Inter** for navigation, descriptions, buttons, and data labels. Headlines use tight leading around 0.9; body copy stays between 1.55 and 1.75 for field-note readability. Use uppercase micro-labels with slight tracking.

### Brand Essence
Gendewo Archery is the Wonosobo range for people who want to train with purpose, compete with composure, and grow together. Personality: **focused, open, grounded**.

### Brand Voice
Headlines are short and physical. CTAs are direct invitations, not generic conversion language. Microcopy names the next action or the proof behind it.

Example headline: “Tarik napas. Tarik busur.”

Example CTA: “Lihat jadwal latihan →”

### Wordmark & Logo
Use a custom symbol composed of an abstract arrowhead intersecting a curved bow arc. Pair the mark with a compact uppercase wordmark in Anton with slight letter spacing; never use the brand name as an unstyled default font.

### Signature Brand Color
**Range Lime — #C6F24C.** Use it as the singular action color against charcoal and pale sky; it should be recognizable even when the rest of the palette is muted.

## File-level reminder
All page, component, and style files should reinforce the Range Journal system: editorial asymmetry, sky / charcoal / lime contrast, Anton + Inter typography, documentary photography, and directional micro-interactions. Ask: “Does this choice reinforce or dilute our design philosophy?”
