import Features from '@/components/Features/Features';
import { features } from './Features.utils.json';

const FeaturesContainer = () => {
    return (
        <>
            <Features listes={features} />
        </>
    );
};
export default FeaturesContainer;
