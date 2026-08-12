import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Cta from '../../components/Cta/Cta.jsx';
import GlobalPayoutsHero from '../../components/products/GlobalPayouts/Hero/Hero.jsx';
import GlobalPayoutsBenefits from '../../components/products/GlobalPayouts/Benefits/Benefits.jsx';
import GlobalPayoutsAudience from '../../components/products/GlobalPayouts/Audience/Audience.jsx';
import VirtualAccountsHero from '../../components/products/VirtualAccounts/Hero/Hero.jsx';
import VirtualAccountsBenefits from '../../components/products/VirtualAccounts/Benefits/Benefits.jsx';
import VirtualAccountsAudience from '../../components/products/VirtualAccounts/Audience/Audience.jsx';
import CrossBorderRemittanceHero from '../../components/products/CrossBorderRemittance/Hero/Hero.jsx';
import CrossBorderRemittanceBenefits from '../../components/products/CrossBorderRemittance/Benefits/Benefits.jsx';
import CrossBorderRemittanceAudience from '../../components/products/CrossBorderRemittance/Audience/Audience.jsx';
import TreasuryHero from '../../components/products/Treasury/Hero/Hero.jsx';
import TreasuryBenefits from '../../components/products/Treasury/Benefits/Benefits.jsx';
import TreasuryAudience from '../../components/products/Treasury/Audience/Audience.jsx';
import PoboCoboHero from '../../components/products/PoboCobo/Hero/Hero.jsx';
import PoboCoboBenefits from '../../components/products/PoboCobo/Benefits/Benefits.jsx';
import PoboCoboAudience from '../../components/products/PoboCobo/Audience/Audience.jsx';

const PRODUCTS = {
  'global-payouts': { Hero: GlobalPayoutsHero, Benefits: GlobalPayoutsBenefits, Audience: GlobalPayoutsAudience },
  'virtual-accounts': { Hero: VirtualAccountsHero, Benefits: VirtualAccountsBenefits, Audience: VirtualAccountsAudience },
  'cross-border-remittance': { Hero: CrossBorderRemittanceHero, Benefits: CrossBorderRemittanceBenefits, Audience: CrossBorderRemittanceAudience },
  'pobo-cobo': { Hero: PoboCoboHero, Benefits: PoboCoboBenefits, Audience: PoboCoboAudience },
  'treasury-liquidity': { Hero: TreasuryHero, Benefits: TreasuryBenefits, Audience: TreasuryAudience },
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
