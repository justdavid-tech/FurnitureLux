// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar.jsx";
// import Hero from "./components/hero.jsx";
// // ... other imports

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         {/* Add your other routes here */}
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);
