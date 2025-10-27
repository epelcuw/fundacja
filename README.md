# StudioT 3D Background Animation

This project is a React application that features a 3D background animation that responds to scrolling between sections. The animation is designed to create an engaging visual experience similar to the reference site.

## Project Structure

```
studiot-3d-bg
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── main.jsx            # Entry point for the React application
│   ├── App.jsx             # Main App component
│   ├── App.css             # Styles for the App component
│   ├── components           # Contains reusable components
│   │   ├── Header.jsx      # Navigation or title component
│   │   ├── Section.jsx     # Individual section component
│   │   └── ScrollContainer.jsx # Manages scroll behavior
│   ├── scenes              # Contains scene management components
│   │   ├── BackgroundScene.jsx # Renders the 3D background
│   │   └── SceneManager.jsx # Manages different scenes
│   ├── three               # Custom hooks for 3D functionality
│   │   ├── useScrollSync.js # Synchronizes scroll position with animations
│   │   └── useGLTFLoader.js # Loads GLTF models
│   ├── assets              # Contains 3D models and shaders
│   │   ├── models
│   │   │   └── corn.glb    # 3D model asset
│   │   ├── env
│   │   │   └── studio.hdr  # HDR environment map
│   │   └── shaders
│   │       ├── vertex.glsl # Vertex shader code
│   │       └── fragment.glsl # Fragment shader code
│   ├── hooks               # Custom hooks for application logic
│   │   └── useSectionObserver.js # Observes section visibility
│   ├── utils               # Utility functions
│   │   └── lerp.js         # Linear interpolation function
│   └── styles              # CSS styles
│       └── globals.css     # Global styles for the application
├── .gitignore              # Files to be ignored by version control
├── package.json            # npm configuration file
├── vite.config.js          # Vite configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd studiot-3d-bg
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port specified in your terminal) to view the application.

## Usage

- Scroll through the sections to see the 3D background animation respond dynamically.
- The application utilizes GLTF models and shaders to create a visually appealing experience.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.