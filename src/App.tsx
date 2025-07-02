import { useEffect, useState } from "react";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Loading from "./components/Loading";

function App() {
  const [screen, setScreen] = useState<"welcome" | "loading" | "dashboard">("welcome");

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setScreen("loading");

      const loadingTimer = setTimeout(() => {
        setScreen("dashboard");
      }, 2000);

      return () => clearTimeout(loadingTimer);
    }, 2000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  return (
    <>
      {screen === "welcome" && <Welcome />}
      {screen === "loading" && <Loading />}
      {screen === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;
