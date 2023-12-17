import { Feature } from '@/containers/FeaturesContainer/Features.types';
import config from '@/utils/config';
import './Features.scss';
import { motion } from 'framer-motion';
import { fadeInTopLeft, flipX, zoomIn } from '@/utils/animation';
interface FeaturesProps {
    listes: Feature[];
}

const Features = ({ listes }: FeaturesProps) => {
    return (
        <div className="Features">
            <img src={`${config.image_base_url}/assets/images/Scribbleicons-2.svg`} className="About-shape-3" />

            <motion.h2 variants={fadeInTopLeft} initial="hidden" whileInView="show" transition={{ delay: 0.3 }}>
                Membership benefits
            </motion.h2>
            <h3>Become our sponsor and get all benefits</h3>
            <ul className="Features-liste">
                {listes.map((item) => (
                    <motion.div
                        variants={zoomIn}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            delay: item.id * 0.2,
                        }}
                        key={item.id}
                    >
                        <img src={`${config.image_base_url}${item.url}`} alt="features icon" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </ul>
            <motion.button variants={flipX} initial="hidden" whileInView="show" transition={{ duration: 0.7 }}>
                SEE PRICING
            </motion.button>
        </div>
    );
};
export default Features;
