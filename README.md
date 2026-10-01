# PlacePicker

A small React and TypeScript app for building a personal collection of places you would like to visit. Available places are sorted by distance from your current location, and your picks are saved in the browser.

## Features

- List of available places with images, sorted by distance from the user
- Pick a place to add it to your personal collection
- Remove a place through a confirmation dialog
- The removal is confirmed automatically after 3 seconds, with a progress bar showing the time left
- Selected places are saved in local storage and restored on the next visit
- Duplicate places cannot be added

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS

## React Concepts Used

- `useEffect` for reading the user location and for managing timers with cleanup
- `useCallback` to keep the confirm handler stable so the timer effect does not restart on every render
- `useRef` for remembering which place is about to be removed
- `useState` with functional updates
- Portals and the native HTML dialog element for the confirmation modal
- Conditional rendering of the modal content, so the timer starts fresh every time the dialog opens
- Browser APIs: Geolocation and Local Storage
- Typed props, state, refs and shared types

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_place_picker.git`
2. Go to the project folder with `cd react_place_picker`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173. Allow access to your location in the browser to see the sorted list of places.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally

## Project Structure

- `public/` static files
- `src/`
  - `assets/` logo and place images
  - `components/`
    - `Places.tsx` list of places for both sections
    - `Modal.tsx` dialog rendered through a portal
    - `DeleteConfirmation.tsx` confirmation content with the auto-confirm timer
    - `ProgressBar.tsx` progress bar for the remaining time
  - `App.tsx` root component that holds the application state
  - `data.ts` available places
  - `loc.ts` distance calculation and sorting by distance
  - `types.ts` shared types
  - `main.tsx` application entry point
  - `index.css` global styles
- `index.html` HTML template, including the `modal` container for the dialog

## Limitations

If access to the location is denied or unavailable, the list of available places stays empty with the sorting message, because the error case is not handled yet.
