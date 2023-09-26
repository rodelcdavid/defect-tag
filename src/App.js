import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import theme from "./theme";
import Login from "./pages/Login";
import Barcoded from "./pages/Barcoded";
import NonBarcoded from "./pages/NonBarcoded";
import Printing from "./pages/Printing";
import Reprint from "./pages/Reprint";
import MenuPage from "./pages/MenuPage";
import PrivateRoutes from "./pages/PrivateRoutes";
import { useSelector } from "react-redux";

const { Box, Text, ChakraProvider } = require("@chakra-ui/react");

function App() {
  const { isUserAuthenticated } = useSelector((state) => state.authState);
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<MenuPage />} />
            <Route path="/barcoded" element={<Barcoded />} />
            <Route path="/nonbarcoded" element={<NonBarcoded />} />
            <Route path="/reprint" element={<Reprint />} />
            <Route path="/printing" element={<Printing />} />
          </Route>

          {/* Public Route */}
          <Route
            path="/login"
            element={isUserAuthenticated ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
