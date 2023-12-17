import './App.scss';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import BannerContainer from './containers/BannerContainer/BannerContainer';
import ContentContainer from './containers/ContentContainer/ContentContainer';
import FeaturesContainer from './containers/FeaturesContainer/FeaturesContainer';
import PricingContainer from './containers/PricingContainer/PricingContainer';
import TestimonialsContainer from './containers/TestimonialsContainer/TestimonialsContainer';

function App() {
    return (
        <div className="App">
            <BannerContainer />
            <About />
            <TestimonialsContainer />
            <FeaturesContainer />
            <ContentContainer />
            <PricingContainer />
            <Blog />
            <Cta />
            <Footer />
        </div>
    );
}

export default App;
