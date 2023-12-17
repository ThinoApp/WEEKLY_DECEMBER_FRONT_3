import { PricingItem } from '@/containers/PricingContainer/Pricing.types';
import config from '@/utils/config';
import './Pricing.scss';
import { motion } from 'framer-motion';
import { rotateAndScale, rotateIn, slideRight } from '@/utils/animation';

interface PricingProps {
    listes: PricingItem[];
}

const Pricing = ({ listes }: PricingProps) => {
    return (
        <div className="Pricing">
            <img src={`${config.image_base_url}/assets/images/Scribbleicons-2.svg`} className="pricing-shape-1" />

            <h2>
                <motion.img
                    variants={rotateAndScale('left')}
                    initial={{ ...rotateIn.hidden, x: '-50%', y: '-50%', scaleX: -1 }}
                    whileInView={{ ...rotateIn.show, x: '-50%', y: '-50%', scaleX: -1 }}
                    transition={{ delay: 0.5 }}
                    src={`${config.image_base_url}/assets/images/SparkleIcons.svg`}
                />
                Become our sponsor
            </h2>
            <h3>Get exclusive episodes, merch and more</h3>
            <ul className="pricing-listes">
                <img src={`${config.image_base_url}/assets/images/stariconsFlat.svg`} className="pricing-shape-2" />
                <img src={`${config.image_base_url}/assets/images/SpiralBlog.svg`} className="pricing-shape-3" />

                {listes.map((item) => (
                    <motion.li
                        variants={slideRight}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            delay: item.id * 0.2,
                        }}
                        key={item.id}
                        className={`pricing-item ${item.mostPopular ? 'popular' : ''}`}
                    >
                        <div className="main-content">
                            <div className="heading">
                                <h3>{item.title}</h3>
                                {item.mostPopular && <span>most popular</span>}
                            </div>
                            <p className="description">{item.description}</p>
                            <div>
                                <button>SUBSCRIBE</button>
                                <p>
                                    <span>{item.price}</span>
                                    <br />
                                    /month
                                </p>
                            </div>
                        </div>
                        <div className="included-container">
                            <p>What's included:</p>
                            <ul className="included-liste">
                                {item.included.map((includedItem) => (
                                    <li key={includedItem.id}>{includedItem.value}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};
export default Pricing;
