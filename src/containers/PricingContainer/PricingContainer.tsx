import Pricing from '@/components/Pricing/Pricing';
import { pricing } from './Pricing.utils.json';

const PricingContainer = () => {
    return (
        <>
            <Pricing listes={pricing} />
        </>
    );
};
export default PricingContainer;
