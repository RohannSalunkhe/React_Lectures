import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center text-6xl font-bold">The Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
