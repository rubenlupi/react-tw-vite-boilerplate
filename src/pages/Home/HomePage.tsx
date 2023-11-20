import useLanguageStore, { Languages } from "../../stores/language-store";
import { MainNavbar } from "../../components/containers/MainNavbar/MainNavbar";
import ProtectedRoute from "../../components/containers/ProtectedRoute/ProtectedRoute";

const Home = () => {
  const { language } = useLanguageStore();
  return (
    <>
      <MainNavbar />
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <div>{language === Languages.english ? "Welcome!" : "¡Bienvenido!"}</div>
    </>
  );
};

export function Component(): JSX.Element {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  );
}
