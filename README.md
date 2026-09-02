# 🏢 HRNet - Wealth Health

Modernized internal employee management web application for Wealth Health.

## 🎯 Project Overview

This project is a complete refactoring of the legacy HRNet application. The original application was built using jQuery, which led to high technical debt, performance bottlenecks, and UI bugs.

This modernized version migrates the entire application to **React**, implementing a functional and modular architecture. Heavy and blocking jQuery plugins have been replaced with optimized React components to ensure maximum performance and a perfect Lighthouse score.

### ✨ Key Features

- **Custom React Library**: Integration of an isolated, custom-built NPM data table package (`react-hrnet-table-gandrica`) to replace the legacy jQuery DataTables plugin.
- **Global State Management**: Implementation of Redux Toolkit to securely manage the global state of the employee list.
- **Optimized Forms**: Utilization of `react-hook-form` combined with native HTML5 inputs to ensure fast rendering and maximum accessibility.
- **Unit Testing**: Robust testing suite utilizing Vitest and React Testing Library.

## 🛠️ Technology Stack

- **Framework**: React (v18+)
- **Build Tool**: Vite
- **State Management**: Redux Toolkit & React-Redux
- **Forms**: React Hook Form
- **Testing**: Vitest, JSDOM, React Testing Library
- **Custom Dependencies**: `react-hrnet-table-gandrica`

## ⚙️ Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm (Node Package Manager)

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gandrica/OC-P14-HRNet.git
   cd hrnet-app
   ```
2. Install the dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

The application will be available at http://localhost:5173/.

🧪 Running Tests
The application includes unit tests ensuring the reliability of the Redux state logic and UI components.
To run the test suite in watch mode:

```
npm run test
```

📈 Performance & Lighthouse
Performance optimization is a core objective of this refactoring. To view the application in its optimized production state and run Lighthouse audits:

Build the application:

```
npm run build
```

Preview the production build:

```
npm run preview
```

Note: Always run Lighthouse audits on the preview server in an Incognito window to avoid extension interference.

👨‍💻 Author
Gabriel / Gandrica
Developed as part of the Front-End Developer Path at OpenClassrooms.
