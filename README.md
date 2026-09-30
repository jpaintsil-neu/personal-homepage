# Personal Homepage

A responsive personal homepage created for **CS 5610: Web Development** at Northeastern University.

The Personal Homepage presents my background, professional journey, personal interests, transition into Information Technology and Computer Science, and selected technical projects through a modern, interactive, and accessible front-end website.

- URL: [Live Site](https://jpaintsil-neu.github.io/personal-homepage/)

## Author

**John Paintsil**

- GitHub: [jpaintsil-neu](https://github.com/jpaintsil-neu)
- Course Page: [CS 5610 — Web Development](https://johnguerra.co/classes/webDevelopment_online_fall_2026/)

## Project Objective

The goal of this project is to design and build a meaningful personal homepage using semantic HTML, modern CSS, and vanilla JavaScript.

Rather than creating a traditional résumé-style website, The Personal Index organizes personal and professional information into distinct sections that visitors can explore.

The project also demonstrates:

- Responsive web design
- Semantic HTML5
- CSS Grid and Flexbox
- ES6 JavaScript modules
- Original JavaScript interactions
- Accessible navigation and controls
- W3C-compliant HTML
- ESLint and Prettier integration
- Git and GitHub workflow

## Pages

The website contains three primary pages:

### Home — `index.html`

The homepage introduces my personal and professional background and includes an interactive **Interest Spotlight**.

Visitors can explore:

- Running
- Music
- Reading
- Movies + TV
- Travel
- Technology

Selecting an interest dynamically changes the spotlight content and supporting media.

The Travel category includes an additional destination selector for:

- Tokyo, Japan
- Casablanca, Morocco
- Santiago, Chile

### Projects — `projects.html`

The Projects page focuses on the connection between my professional background and developing technical skills.

It includes:

- Turning Learning Into Practice
- From Audit to Technology
- Foundation — What I Bring
- Growth — What I'm Building
- Systems Thinking
- Expanded project descriptions

Featured projects include:

- SecretTrace
- Airbnb Listings
- HTML, CSS & JavaScript Self-Assessment

### AI Page — `ai.html`

The required AI-generated page is titled **Connections in the Personal Index**.

It explores five connections based on information already presented throughout the website:

1. Audit → Cybersecurity
2. Risk → Software Development
3. Running → Persistence
4. Reading → Perspective
5. Curiosity → Building

The page also contains a transparency section explaining how generative AI was used.

## Original JavaScript Functionality

The project contains original JavaScript implemented with ES6 modules.

### Interest Spotlight

Visitors can select an interest and dynamically update:

- Main spotlight image
- Title
- Description
- Selected-button state
- Supporting media

### Travel Destination Selector

When Travel is selected, visitors can choose among Tokyo, Casablanca, and Santiago.

The destination content updates dynamically while maintaining accessible button state through `aria-pressed`.

### Responsive Navigation

A JavaScript-controlled menu provides navigation on smaller screens using accessible state attributes including `aria-expanded` and `aria-controls`.

## Technologies

- HTML5
- CSS3
- JavaScript ES6+
- ES6 Modules
- CSS Grid
- Flexbox
- Git
- GitHub
- GitHub Pages
- Node.js / npm
- ESLint
- Prettier

## Project Structure

```text
personal-homepage/
├── index.html
├── projects.html
├── ai.html
├── README.md
├── LICENSE
├── package.json
├── css/
│   └── main.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── interest-spotlight.js
├── images/
│   ├── ai/
│   ├── icons/
│   ├── interests/
│   │   └── media/
│   ├── profile/
│   ├── projects/
│   └── screenshots/
│       ├── personal-homepage/
│       │   └── homepage.png
│       └── w3-validator/
│           ├── index-html.png
│           ├── projects-html.png
│           └── ai-html.png
└── docs/
    ├── ai-prompts.md
    ├── design.md
    └── mockups/
```

## Design Documentation

The complete design documentation is available in:

```text
docs/design.md
```

It includes:

- Project description
- Design goals
- Target audience
- User personas
- User stories
- Information architecture
- Responsive-design strategy
- Accessibility strategy
- Desktop and mobile wireframes
- Projects page mockup
- AI page mockup
- Design evolution

## Installation and Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/jpaintsil-neu/personal-homepage.git
```

### 2. Navigate to the Project

```bash
cd personal-homepage
```

### 3. Install Development Dependencies

```bash
npm install
```

### 4. Open the Website

Because the project is a static front-end website, `index.html` can be opened directly in a browser.

A local development server such as VS Code Live Server may also be used.

## Code Quality

### Run ESLint

```bash
npm run lint
```

### Automatically Fix Supported ESLint Issues

```bash
npm run lint:fix
```

### Format Files with Prettier

```bash
npm run format
```

### Verify Prettier Formatting

```bash
npm run format:check
```

## Validation

The final HTML pages were checked using the W3C Nu HTML Checker.

Validated pages:

- `index.html` — 0 errors, 0 warnings — [View W3C validation screenshot](./images/screenshots/w3-validator/index-html.png)
- `projects.html` — 0 errors, 0 warnings — [View W3C validation screenshot](./images/screenshots/w3-validator/projects-html.png)
- `ai.html` — 0 errors, 0 warnings — [View W3C validation screenshot](./images/screenshots/w3-validator/ai-html.png)

The project also passes:

- ESLint
- Prettier formatting checks

## Accessibility

Accessibility considerations include:

- Semantic HTML5
- Skip-to-content navigation
- Keyboard-accessible controls
- Visible focus states
- Alternative text for meaningful images
- Empty `alt` values for decorative images
- Appropriate heading structure
- `aria-expanded`
- `aria-controls`
- `aria-pressed`
- Responsive layouts
- Standard HTML buttons for interactive controls

## Peer Code Review

As part of the Project 1 peer-review requirement, I reviewed **Dins Patel's Personal Homepage** and submitted an accessibility improvement through GitHub's fork-and-pull-request workflow.

- **Reviewed Repository:** [Dinspatel25/project-1-my-homepage](https://github.com/Dinspatel25/project-1-my-homepage)
- **Reviewed Live Site:** [Dins Patel — Personal Homepage](https://dinspatel25.github.io/project-1-my-homepage/)
- **Pull Request:** [#2 — Improve mobile menu accessibility with ARIA state updates](https://github.com/Dinspatel25/project-1-my-homepage/pull/2)

### Review Contribution

The review focused on improving the accessibility of the responsive mobile navigation without changing the site's visual design or layout.

The pull request:

- Added `aria-expanded` to communicate whether the mobile navigation is open or closed
- Added `aria-controls` to associate each menu button with the navigation links
- Updated JavaScript so the ARIA state changes when the menu is opened or closed
- Updated the accessible menu label between **Open navigation menu** and **Close navigation menu**
- Reset the accessibility state when a navigation link is selected
- Verified the change with ESLint and Git diff checks before submission

## Screenshot

### Homepage

![The Personal Index homepage](./images/screenshots/personal-homepage/homepage.png)

The screenshot above shows the current homepage implementation of **The Personal Index**.

## Presentation and Demo Video

The final Project 1 presentation and narrated demonstration are available here:

- **PowerPoint Presentation:** [John Paintsil — Personal Homepage](https://docs.google.com/presentation/d/1We2CNRAQTMShrE5W3-Aw0KLsz0AMLt6B/edit?usp=drivesdk)
- **Google Slides Presentation:** [John Paintsil — Personal Homepage](https://docs.google.com/presentation/d/1LoFysUmaRWNKRHLY6jnE0tekepu4R69AboIgirU-Z68/edit?usp=drivesdk)
- **Bluesky:** [@jpaintsil.bsky.social](https://bsky.app/profile/jpaintsil.bsky.social)
- **Narrated Demo Video:** [Watch the published Bluesky post](https://bsky.app/profile/jpaintsil.bsky.social/post/3mwmhjzuhqk2s)

## Generative AI Disclosure

Generative AI was used during portions of the planning, design, development,
debugging, validation, documentation, and creation of the required AI-generated
page for this project.

### Tool and Model

- **Tool:** ChatGPT
- **Model:** GPT-5.6 Sol
- **Provider:** OpenAI

### How Generative AI Was Used

ChatGPT was used as an iterative development assistant for tasks including:

- Reviewing the Project 1 requirements and rubric
- Organizing page structure and information architecture
- Reviewing HTML, CSS, and JavaScript
- Suggesting accessibility and responsive-design improvements
- Debugging JavaScript and CSS issues
- Reviewing semantic HTML and accessibility
- Assisting with Prettier, ESLint, and W3C validation
- Developing the required AI-generated page
- Refining design documentation and wireframes
- Assisting with README documentation

AI-generated suggestions were reviewed, modified, tested, and validated before
being incorporated into the final project.

### AI-Generated Page

The `ai.html` page was intentionally developed with generative AI to satisfy the
Project 1 requirement for a third AI-generated page.

The page explores five connections based only on information already provided
elsewhere in the project:

1. Audit → Cybersecurity
2. Risk → Software Development
3. Running → Persistence
4. Reading → Perspective
5. Curiosity → Building

The page clearly identifies itself as AI-generated and includes an additional
transparency section describing how the content was created and reviewed.

### AI Page Prompt Log and Chat Screenshots

The prompts used to create and refine the required AI-generated page, together with screenshots from the ChatGPT conversation, are documented here:

[`docs/ai-prompts.md`](./docs/ai-prompts.md)

## License

This project is licensed under the **MIT License**.

See [`LICENSE`](./LICENSE) for details.
