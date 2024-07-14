import AppRoutes from "./Routes";
import AuthProvider from "./Contexts/users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <div className="w-screen h-screen">
        <AppRoutes></AppRoutes>
      </div>
    </AuthProvider>
  );
}

export default App;
