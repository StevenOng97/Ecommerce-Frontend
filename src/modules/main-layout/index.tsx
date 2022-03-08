import AnimatedPage from '../../components/AnimatedPage';
import Footer from '../landing-page/components/Footer';
import Header from '../landing-page/components/Header';
import './style.scss';

const Layout = ({ children }: any) => {
  return (
    <div className="layout__container">
      <Header cartCount={2} />
      <AnimatedPage>{children}</AnimatedPage>
      <Footer />
    </div>
  );
};

export default Layout;
