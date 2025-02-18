import { AppProvider } from '@/app/redux/AppProvider';
import OrderNavbar from './components/OrderNavbar';

export default function Layout({ children }) {
  return (
    <AppProvider>
      <OrderNavbar />
      {children}
    </AppProvider>
  );
}
