import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes/router";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="uno-game-theme">
      <div className="bg-pattern bg-center bg-no-repeat bg-cover">
        <div className="bg-black/20">
          <Router />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
