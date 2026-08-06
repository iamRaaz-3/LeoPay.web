import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Cta from '../../components/Cta/Cta.jsx';
import GlobalPayoutsHero from '../../components/products/GlobalPayouts/Hero.jsx';
import GlobalPayoutsBenefits from '../../components/products/GlobalPayouts/Benefits.jsx';
import GlobalPayoutsAudience from '../../components/products/GlobalPayouts/Audience.jsx';
import VirtualAccountsHero from '../../components/products/VirtualAccounts/Hero.jsx';
import VirtualAccountsBenefits from '../../components/products/VirtualAccounts/Benefits.jsx';
import VirtualAccountsAudience from '../../components/products/VirtualAccounts/Audience.jsx';
import CrossBorderRemittanceHero from '../../components/products/CrossBorderRemittance/Hero.jsx';
import CrossBorderRemittanceBenefits from '../../components/products/CrossBorderRemittance/Benefits.jsx';
import CrossBorderRemittanceAudience from '../../components/products/CrossBorderRemittance/Audience.jsx';

const PRODUCTS = {
  'global-payouts': { Hero: GlobalPayoutsHero, Benefits: GlobalPayoutsBenefits, Audience: GlobalPayoutsAudience },
  'virtual-accounts': { Hero: VirtualAccountsHero, Benefits: VirtualAccountsBenefits, Audience: VirtualAccountsAudience },
  'cross-border-remittance': { Hero: CrossBorderRemittanceHero, Benefits: CrossBorderRemittanceBenefits, Audience: CrossBorderRemittanceAudience },
};

const ProductPage = () => {
  const { slug } = useParams();
  const product = PRODUCTS[slug];

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const { Hero, Benefits, Audience } = product;

  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Audience />
      <Cta />
      <Footer />
    </>
  );
};

export default ProductPage;
