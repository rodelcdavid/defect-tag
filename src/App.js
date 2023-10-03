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
import NotFound from "./pages/NotFound";
import DeleteData from "./pages/DeleteData";
import MessageConfirmDialog from "./components/dialogs/MessageConfirmDialog";

const { Box, Text, ChakraProvider } = require("@chakra-ui/react");

function App() {
  const { isUserAuthenticated } = useSelector((state) => state.authState);
  const { dialogs } = useSelector((state) => state.dialogState);
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
            <Route path="/delete" element={<DeleteData />} />
            <Route path="/printing" element={<Printing />} />
          </Route>

          {/* Public Route */}
          <Route
            path="/login"
            element={isUserAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {dialogs.messageConfirmDialog.isOpen && <MessageConfirmDialog />}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
