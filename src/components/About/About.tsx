import config from '@/utils/config';
import './About.scss';
import { motion } from 'framer-motion';
import { fadeInDown, rotateIn, slideUp, zoomIn } from '@/utils/animation';
const About = () => {
    return (
        <div className="About">
            <img src={`${config.image_base_url}/assets/images/Scribbleicons-2.svg`} className="About-shape-3" />

            <motion.h2 variants={slideUp} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
                Talk. Listen. Get inspired by every minute of it.
            </motion.h2>
            <div className="About-illustration">
                <div>
                    <motion.img
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.5 }}
                        src={`${config.image_base_url}/assets/images/Illustration 01.svg`}
                        alt="illustration-1 icon"
                    />
                    <motion.p variants={slideUp} initial="hidden" whileInView="show" transition={{ duration: 0.6 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
                    </motion.p>
                </div>
                <div>
                    <motion.img
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        transition={{ duration: 0.7 }}
                        src={`${config.image_base_url}/assets/images/Illustration 02.svg`}
                        alt="illustration-2 icon"
                    />
                    <motion.p variants={slideUp} initial="hidden" whileInView="show" transition={{ duration: 0.6 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
                    </motion.p>
                </div>
            </div>
            <div className="About-content">
                <motion.img
                    variants={zoomIn}
                    initial={{
                        ...zoomIn.hidden,
                        x: '-50%',
                        y: '-50%',
                    }}
                    whileInView="show"
                    transition={{ delay: 0.3 }}
                    src={`${config.image_base_url}/assets/images/AboutCircle.png`}
                    alt="About circle"
                    className="About-shape-1"
                />
                <motion.img
                    variants={zoomIn}
                    initial={{
                        ...zoomIn.hidden,
                        x: '33%',
                        y: '-50%',
                    }}
                    whileInView="show"
                    src={`${config.image_base_url}/assets/images/stariconsFlat.svg`}
                    alt="About circle"
                    className="About-shape-2"
                />
                <motion.h2
                    className="origin-top"
                    variants={rotateIn}
                    initial="hidden"
                    whileInView="show"
                    transition={{ delay: 0.5 }}
                >
                    “
                </motion.h2>
                <motion.h3 variants={fadeInDown} initial="hidden" whileInView="show" transition={{ delay: 0.2 }}>
                    One of the best daily podcasts that covers every topic on Spotify.
                </motion.h3>
                <div>
                    <img src={`${config.image_base_url}/assets/images/avatar.png`} alt="avatar image" />
                    <p>John Smith,</p>
                    <img
                        src={`${config.image_base_url}/assets/images/spotify-green-icon.png`}
                        alt="spotify green icon"
                    />
                    <p>Social Community Manager</p>
                </div>
            </div>
        </div>
    );
};
export default About;
