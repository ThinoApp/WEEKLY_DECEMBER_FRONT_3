import Banner from '@/components/Banner/Banner';
import { covers, supportedList } from './Banner.utils.json';
const BannerContainer = () => {
    return (
        <>
            <Banner covers={covers} supportedList={supportedList} />
        </>
    );
};
export default BannerContainer;
