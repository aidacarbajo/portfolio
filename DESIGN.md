---
name: Aida Carbajo
description: QA engineer and web developer portfolio, built as an aviation pre-flight checklist.
colors:
  cockpit-navy: "#0b2a4a"
  navy-raised: "#133b63"
  navy-deep: "#071d34"
  on-navy: "#f4f6f7"
  on-navy-muted: "#a9bdd1"
  laminate: "#f4f6f7"
  board: "#dfe6ec"
  ink: "#0d1b2a"
  ink-muted: "#3b4b5c"
  rule: "#b9c6d2"
  annunciator-amber: "#ffb000"
  amber-press: "#e89f00"
  amber-ink: "#1a1200"
  checked-green: "#17784f"
  go-lamp: "#2fbf71"
  stop-red: "#c0392b"
  strip-amber: "#ffd27a"
  strip-blue: "#a9d2f5"
  strip-pink: "#f4b9c4"
typography:
  display:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(5rem, min(2rem + 11vw, 19svh), 12.5rem)"
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  challenge:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    letterSpacing: "0.02em"
  lead:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.8vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  small:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
rounded:
  lamp: "2px"
  strip: "8px"
  card: "14px"
  screen: "22px"
  pill: "999px"
spacing:
  margin: "clamp(1rem, 3vw, 3rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(6rem, 11vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.annunciator-amber}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.amber-press}"
    textColor: "{colors.amber-ink}"
  button-primary-big:
    backgroundColor: "{colors.annunciator-amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
    padding: "0 2.25rem"
    height: "4rem"
  checklist-card:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.25rem 1.5rem 1.5rem"
  flight-strip:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.strip}"
    height: "6.5rem"
  logbook-page:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(1.25rem, 3vw, 2.5rem)"
  nav-bar:
    backgroundColor: "{colors.cockpit-navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
---

# Design System: Aida Carbajo

## Overview

**Creative North Star: "The Pre-flight Checklist"**

Nothing launches until every item reads CHECKED. The whole site is one aviation pre-flight check: cockpit navy panels own the opening and the close, laminated cool-white cards carry challenge/response rows joined by dot leaders, amber annunciator lights mark what needs attention and green responses mark what passed. Services sit in air-traffic flight strips on a pale board, proof is entered in a logbook, the portrait sits behind a cabin window whose shade lifts on load, and the page runs its own live check before the visitor is "cleared for launch" by emailing Aida.

The world is procedural and confident, not decorative. Type is condensed caps doing the work a cockpit placard does: short, loud, legible at a glance. Surfaces are flat, matte and printed-feeling; there are no gradients and no glass. Depth comes from navy-on-navy tonality and laminate cards resting on a board, with only soft shadows under the things a hand could pick up.

Motion runs on one clock. A single ease-out curve drives everything from the name rising to the checklist ticking, so the page feels like one instrument being switched on in sequence rather than a collection of effects.

**Key Characteristics:**
- Cockpit navy opens and closes the page; the pale board carries the working middle.
- Every list is a challenge/response row: condensed caps label, dot leader, status word.
- Status has exactly three lamps: amber (armed), green (checked), red (failed).
- One accent, annunciator amber, carries the name's second line, the callsign, the primary action and focus.
- Barlow Condensed for everything that speaks; Barlow for everything that explains.
- One ease-out clock for all motion; controls press to 0.97.

## Colors

A two-temperature system: deep cockpit navy against cool laminate whites, lit by a single annunciator amber and a green that only ever means "passed".

### Primary
- **Annunciator Amber** (`annunciator-amber`): The one accent. The second line of the name, the AC callsign, the "Cleared for launch" heading, every primary button, link underlines on hover, text selection and the focus ring. On light surfaces it never carries text; it carries the button fill and lamp state with dark amber-ink type on top.
- **Amber Press** (`amber-press`): Hover fill for amber buttons on fine pointers.
- **Amber Ink** (`amber-ink`): Text on amber. Never use white on amber.

### Secondary
- **Checked Green** (`checked-green`): The response word ("CHECKED", "PASS") on laminate, the logbook total, the passed summary. Text-weight green, chosen for AA contrast on laminate.
- **Go Lamp** (`go-lamp`): The brighter green of a lit indicator square. Lamp fill only, never text.
- **Stop Red** (`stop-red`): Failed check word, failed lamp, failed summary. Appears only as a result of the live check.

### Tertiary
- **Strip Amber / Strip Blue / Strip Pink** (`strip-amber`, `strip-blue`, `strip-pink`): The colored code cell at the head of each flight strip, the way real strip holders color-code traffic. Only on the code cell, cycled per strip.

### Neutral
- **Cockpit Navy** (`cockpit-navy`): The first viewport, the PackValet panel and the contact close. Also the browser `theme-color`.
- **Navy Raised** (`navy-raised`): Window and video bezels on navy, the rule above the contact rows, scrollbar thumb, navy-button hover.
- **Navy Deep** (`navy-deep`): The "Who I am" panel and the footer; the glass behind the portrait before it loads.
- **On Navy** (`on-navy`): Primary text on any navy.
- **On Navy Muted** (`on-navy-muted`): Role line, intro paragraphs and labels on navy.
- **Laminate** (`laminate`): Every card that is "picked up": the checklist card, flight strips, the logbook page, the check list.
- **Board** (`board`): The page body behind the light sections; the surface laminate rests on.
- **Ink** (`ink`): Text on laminate and board; also the 2px header rule under card and table heads.
- **Ink Muted** (`ink-muted`): Secondary text on light: tools rows, dates, column heads, pending states, dot-leader dots.
- **Rule** (`rule`): 1px row dividers inside cards and strips; the unlit lamp.

### Named Rules
**The Three Lamps Rule.** Status has exactly three colors: amber is armed or waiting, green is checked, red is failed. A green word never appears unless something actually passed.

**The One Accent Rule.** Amber is the only accent. It marks the name, the action and focus; it is never a section background and never body text on light surfaces.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif), self-hosted at 600 and 800.
**Body Font:** Barlow (with system-ui, sans-serif), self-hosted at 400 and 500.

**Character:** A cockpit placard pairing. The condensed face speaks in uppercase like labels on an instrument panel; the humanist body face explains in sentence case at a comfortable reading size.

### Hierarchy
- **Display** (800, the name scale, 0.84): "AIDA CARBAJO" only. Uppercase, two lines, the second in amber. On phones it becomes 24vw.
- **Headline** (800, the h2 scale, 0.92): Section headings, uppercase, balanced, usually capped near 14ch. The contact close goes larger still (up to 10rem, 0.86) in amber.
- **Title** (800, 1.5rem, tracking 0.04em): Card heads, "Cleared for launch", button labels (1.25rem; 1.5rem on the big button), strip names (fluid 1.5 to 2.25rem), and logbook results.
- **Challenge** (600, 1.3rem, tracking 0.02em): The left side of a challenge/response row. Uppercase.
- **Lead** (400, the lead scale, 1.4): The role line and intro paragraphs on navy, capped at 34ch.
- **Body** (400, the body scale, 1.55): Explanatory paragraphs, logbook entries, strip descriptions. Line length capped at 30 to 34ch in intros.
- **Label** (600, 1rem, tracking 0.06 to 0.08em, uppercase): Nav links (1.125rem), table column heads, contact row terms.
- **Small** (400, 0.9375rem): Footer and phone-size logbook dates.

### Named Rules
**The Placard Rule.** Anything that names, labels or answers is Barlow Condensed in uppercase. Anything that explains is Barlow in sentence case. Never set a paragraph in condensed caps.

**The Tabular Numbers Rule.** Dates, counts and results use tabular figures so rolling numbers do not jitter.

## Layout

A 12-column grid with fluid page margins (`spacing.margin`) and gutters (`spacing.gutter`) runs every section; sections are separated by a large fluid vertical rhythm (`spacing.section`). The page alternates surfaces as a flight does: navy cockpit (full-viewport, `100svh`), pale board with flight strips and the logbook, deep-navy "who I am", navy PackValet, board with the live check, navy contact, deep-navy footer.

The first viewport places the name top-left across eight columns, the cabin window across the right four columns spanning all rows, and the laminated checklist card anchored bottom-left across six columns (max 34rem). Intro columns sit at 4 to 5 columns with the working surface (logbook page, check list, carousel) taking the rest; the logbook intro is sticky beside its page.

Responsive behavior: at 64em the intros go full width above their surfaces and the strips fold their tools cell under the name. Below 48em the cockpit becomes a single column (name, card, then window at about 64% width aligned right), secondary nav links hide, buttons in the card and the contact close go full width, the logbook rows restack into a two-line grid, and the check list drops to one column. Safe-area insets are respected at the top of the cockpit and the bottom of the footer.

## Elevation & Depth

Mostly flat. Depth is tonal first: navy-raised bezels on navy, navy-deep panels between navy panels, laminate on board. Shadows exist only under objects that read as physically placed on a surface, and they are soft and low.

### Shadow Vocabulary
- **Laminate lift** (`box-shadow: 0 18px 40px -18px rgba(3, 12, 24, 0.6)`): The checklist card floating over the cockpit navy.
- **Strip rest** (`box-shadow: 0 2px 4px -1px rgba(13, 27, 42, 0.12)`): Flight strips sitting in their holders on the board.

### Named Rules
**The Matte Panel Rule.** No gradients, no glass, no blur. A surface is a flat color; it gets depth from the surface it sits on.

## Shapes

Corners are working corners: modest on laminate (14px for cards, 8px for strips), fully round on buttons (pill), and nearly square on lamps (2px). Borders are rules, not outlines: 1px rule-colored dividers between rows and strip cells, and a 2px ink rule under every card or table head. The one curved silhouette is the cabin window: an elliptical bezel (44% / 30%) around elliptical glass (42% / 28%), echoed by the story video's phone-like bezel (20% / 11%). App screenshots and the app icon use 22px and 22% respectively.

## Components

### Buttons
Annunciator switches: loud, round, pressable.
- **Shape:** Full pill (999px), min-height 3.25rem; the big variant is 4rem.
- **Primary:** Amber fill, amber-ink label in Barlow Condensed 800 uppercase, tracking 0.04em, no wrap.
- **Hover / Focus:** Fill darkens to amber-press on fine pointers only (200ms). Focus is the global 3px amber outline at 3px offset.
- **Active:** Scales to 0.97 over 160ms on the page ease.
- **Big:** The contact close's primary action, 2.25rem side padding and 1.5rem label.

### Challenge / Response Row (signature)
The unit of the whole world. A row of: uppercase condensed challenge, a flexible dot leader (7px-period SVG dots in ink-muted), then the response with its lamp. Rows are divided by 1px rules. In the hero card each row links to its service and the responses tick on load; in the live check each row's state moves pending, armed (amber lamp), then pass (green word and lamp) or fail (red).

### Lamp
A 0.62em square with 2px corners set before a response word. Unlit is rule-colored, armed is amber, passed is go-lamp green, failed is stop red. It scales in from 0 when it lights.

### Checklist Card
- **Corner Style:** 14px.
- **Background:** Laminate on cockpit navy, ink text.
- **Shadow Strategy:** Laminate lift.
- **Border:** A 2px ink rule under the head; 1px rules between rows.
- **Internal Padding:** 1.25rem 1.5rem 1.5rem (1rem 1.1rem 1.25rem on phones).
- **Close:** A "Cleared for launch" line in title type with the primary button beside it.

### Flight Strip
A laminate strip (8px corners, strip-rest shadow, min-height 6.5rem) divided into cells by 1px rules: a colored code cell holding a three-letter code (TST, MAN, WEB, APP) in condensed 800, the service name, what it is, and the tools in uppercase condensed ink-muted. Strips slide in from the right into their holders, staggered 80ms.

### Logbook Page
A laminate page (14px corners) holding a real table: condensed uppercase column heads over a 2px ink rule, dated entries, right-aligned results in large condensed 800 with tabular figures. The footer total is checked green at up to 5.5rem. Numbers roll up like an odometer the first time they scroll into view.

### Cabin Window
The portrait frame: navy-raised elliptical bezel around elliptical glass, image cropped with object-fit. A pale shade with a pull tab covers the glass and lifts on load.

### Navigation
A top bar inside the cockpit: the amber "AC" callsign at left, uppercase condensed links (600, 1.125rem, tracking 0.06em) at right with an amber underline that fades in on hover. On phones only Contact, CV and language remain.

### Motion
One clock. Entrances use the page ease (`cubic-bezier(0.23, 1, 0.32, 1)`); the window shade alone uses the in-out curve (`cubic-bezier(0.77, 0, 0.175, 1)`). The load sequence runs name rise, role fade, shade lift with the portrait settling from 1.08 scale, card in, then responses tick one after another on a 170ms step, ending with the cleared line. Scroll reveals rise 20px once and never replay. All of it sits behind `prefers-reduced-motion: no-preference`, and content is visible without JavaScript.

## Do's and Don'ts

### Do:
- **Do** express any list of things to verify as challenge/response rows with dot leaders and a lamp.
- **Do** keep status to the three lamps: amber armed, green checked, red failed.
- **Do** put laminate on board or on navy; text on laminate is ink.
- **Do** set names, labels, responses and buttons in Barlow Condensed uppercase, and explanations in Barlow sentence case.
- **Do** run every move on the page ease and press controls to 0.97.
- **Do** use tabular figures for dates and numbers.

### Don't:
- **Don't** use gradients, glass or blur on any surface.
- **Don't** use green for anything that did not pass a check.
- **Don't** put white text on amber; amber takes amber-ink.
- **Don't** present services as a row of identical cards; they are flight strips.
- **Don't** fall back to a big-number stats strip; numbers live in the logbook with their entries.
