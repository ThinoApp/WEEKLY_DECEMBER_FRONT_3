import Content from '@/components/Content/Content';
import { episodes } from './Content.utils.json';

const ContentContainer = () => {
    return (
        <>
            <Content episodes={episodes} />
        </>
    );
};
export default ContentContainer;
