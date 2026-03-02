import { Providers } from "./providers/providers";
import { AppRouter } from "./routes/routes";

export function App() {
  return (
    <>
      <Providers>
        <AppRouter />
      </Providers>
    </>
  );
}
