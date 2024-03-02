import { RouterProvider } from "react-router-dom";
import router from "./ui/routes/RouteBuilder";

function App() {
  return (
    // Render router object using route provider
    <RouterProvider
      router={router}
    />
  );
}

export default App;
