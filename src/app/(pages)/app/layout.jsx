import { AppProvider } from "@/app/redux/AppProvider";

export default function Layout({ children }) {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
}
