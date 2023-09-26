import { RouterProvider, createBrowserRouter } from "react-router-dom";
import theme from "./theme";
import Login from "./pages/Login";
import Barcoded from "./pages/Barcoded";
import NonBarcoded from "./pages/NonBarcoded";
import Printing from "./pages/Printing";
import Reprint from "./pages/Reprint";
import MenuPage from "./pages/MenuPage";

const { Box, Text, ChakraProvider } = require("@chakra-ui/react");

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
  },
    {
      path: "/menu",
      element: <MenuPage />,
    },
    {
      path: "/barcoded",
      element: <Barcoded />,
    },
    {
      path: "/nonbarcoded",
      element: <NonBarcoded />,
    },
    {
      path: "/reprint",
      element: <Reprint />,
    },
    {
      path: "/printing",
      element: <Printing />,
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
