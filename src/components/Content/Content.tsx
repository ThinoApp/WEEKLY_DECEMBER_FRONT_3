import { Episode } from '@/containers/ContentContainer/Content.types';
import config from '@/utils/config';
import './Content.scss';
import { motion } from 'framer-motion';
import { slideUp } from '@/utils/animation';
interface ContentProps {
    episodes: Episode[];
}
const Content = ({ episodes }: ContentProps) => {
    let stepByThree = true;
    let pivot = 0;
    return (
        <div className="Content">
            <img src={`${config.image_base_url}/assets/images/Scribbleicons-2.svg`} className="content-shape-2" />

            <h2>Recent Episodes</h2>
            <h3>Available on your favorite platform</h3>
            <ul className="episodes-listes">
                <img
                    src={`${config.image_base_url}/assets/images/SparkleIcons.svg`}
                    alt="Shape illustration"
                    className="content-shape-1"
                />
                {episodes.map((item, index) => {
                    let current = pivot;
                    if (index === current) {
                        pivot += stepByThree ? 3 : 1;
                        stepByThree = !stepByThree;
                    }

                    console.log(`${index === current ? 'withShadow' : ''}`);

                    return (
                        <motion.li
                            variants={slideUp}
                            initial="hidden"
                            whileInView="show"
                            key={item.id}
                            className={`${index === current ? 'withShadow' : ''}`}
                        >
                            <div className="episodes-item-image">
                                <img src={`${config.image_base_url}${item.url}`} alt="episode image" />
                                <div className="episodes-item-content">
                                    <p>Ep. {item.id}</p>
                                    <h3>{item.title}</h3>
                                    <hr color="black" />
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="episodes-bottom">
                                <div className="keywords-container">
                                    {item.keywords.map((keywordItem, index) => (
                                        <button key={index}>{keywordItem}</button>
                                    ))}
                                </div>
                                <p className="hosted-by">
                                    hosted by:{' '}
                                    <img src={`${config.image_base_url}/assets/images/host.png`} alt="host avatar" />
                                </p>
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
            <button>BROWSE ALL EPISODES</button>
        </div>
    );
};
export default Content;
