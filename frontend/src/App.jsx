
// Import Route and Routes from the React router library
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
                
function App() {
    return (
        <Routes>
            {/* Use Home component for the root path */}
            <Route index element={<HomePage />} />
            <Route path="/addProduct" element={<AddProductPage />} />
            <Route path="/update/:id" element={<UpdateProductPage />} />
        </Routes>
    );
}
                
export default App;