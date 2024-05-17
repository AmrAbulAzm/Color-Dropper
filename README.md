# Project Documentation

## Introduction
This project is a color picker tool that allows users to select colors from an image on a 4K * 4K canvas. The application displays the hex code of the selected color in real-time and provides a simple user-friendly interface for interacting with the canvas. Project was built with the intention of displaying some scalable and large-scale applications considerations albeit not needed for an application with this scale.

## Prerequisites
- [Node.js](https://nodejs.org/) (version 20.13.1 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

To manage the Node.js version, use the included `.nvmrc` file:
```bash
nvm use
```

## Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/AmrAbulAzm/Color-Dropper.git
cd Color-Dropper
npm install
```

git@github.com:AmrAbulAzm/Color-Dropper.git

## Running the Project
To start the development server, run:
```bash
npm run dev
```

To build the project for production, run:
```bash
npm run build
```

## Testing
To run the tests, use:
```bash
npm test
```

## Usage
1. Open the application in your browser.
2. Use the toolbar to activate the color dropper.
3. Hover over the image to see the hex code of the color under the cursor.
4. Click to select the color.

## Development
### Code Conventions
- Written in TypeScript for type safety and maintainability.
- Uses React for building UI components.
- Uses `canvas` for image rendering and color capture

## Tools Used
For this project, I opted for the following tools:
- [Vite](https://vitejs.dev/): Chosen to create the project template due to its fast development server and build process.
- [Jest](https://jestjs.io/): Selected for testing due to its simplicity and extensive documentation.
- [React](https://reactjs.org/): Utilized as the main library for building the user interface components.
- [TypeScript](https://www.typescriptlang.org/): Integrated as part of the project requirements to enhance code quality and maintainability.

## Assumptions Made

### Image Canvas
The provided image was assumed to fit within a 4K * 4K canvas, aligning with a technical requirement of the test.

### Color Preview Bubble
A color preview bubble was added to display the hex code when hovering over an area. This feature enhances the user experience by providing real-time feedback on selected colors.

### Fixed Toolbar
The toolbar was designed to remain fixed at the top of the screen for easy access and improved navigation.

### Customized Color Selector
Added SVG elements to the color selector, including a square to indicate the selected pixel and text displaying the hex code.

### Dropper Button Activity Indication
Modified the dropper tool button to turn blue when active.

## Product Requirements
To ensure the product met expectations, the following requirements were confirmed:
- Give users the ability to use the color dropper.
- Color dropper must show hex code in a circle while hovering over an area.
- On hover over a color, the color selector outer circle changes to that color.

## Potential Optimization and Enhancement Considerations
Considerations for further optimizations include debouncing or throttling the function detecting the hex code, though deemed unnecessary based on current performance measured using Chrome dev tools. Additionally, accessibility enhancements and improved CSS styling using techniques like styled-components could be implemented for production. Read me can be extended to include aspects such as licensing, contributing guidelines, deployment and project structure and notes could be handled using JSDocs.
