import config from '@/utils/config';
import './CTA.scss';
import { motion } from 'framer-motion';
import { slideRight, slideUp } from '@/utils/animation';
const Cta = () => {
    return (
        <div className="Cta">
            <img
                src={`${config.image_base_url}/assets/images/Scribbleicons-2-red.svg`}
                alt="Scribble red"
                className="cta-shape-2"
            />
            <div className="Cta-left">
                <motion.img
                    variants={slideUp}
                    initial="hidden"
                    whileInView="show"
                    transition={{ delay: 0.3 }}
                    src={`${config.image_base_url}/assets/images/Home.png`}
                    alt="Play icon"
                />
                <img src={`${config.image_base_url}/assets/images/Sparkle.svg`} alt="Sparkle icon" className="small" />
                <img src={`${config.image_base_url}/assets/images/Sparkle.svg`} alt="Sparkle icon" className="big" />
            </div>
            <div className="Cta-right">
                <motion.img
                    variants={slideUp}
                    initial="hidden"
                    whileInView="show"
                    transition={{ delay: 0.5 }}
                    src={`${config.image_base_url}/assets/images/play.png`}
                    alt="Play icon"
                />
                <img src={`${config.image_base_url}/assets/images/gribouille.svg`} alt="Gribouille" />
            </div>
            <p className="beta-title">BETA</p>
            <motion.h2 variants={slideRight} initial="hidden" whileInView="show">
                Available now Pod of Cast App
            </motion.h2>
            <h3>We just launched our podcast app!</h3>
            <button>
                <img
                    src={`${config.image_base_url}/assets/images/SparkleIcons.svg`}
                    alt="Shape illustration"
                    className="cta-shape-1"
                />
                DOWNLOAD NOW
            </button>
            <p className="description">Content also available on:</p>
            <div className="Cta-social">
                <img
                    src={`${config.image_base_url}/assets/images/google_podcast_black.svg`}
                    alt="google podcast icon"
                />
                <img src={`${config.image_base_url}/assets/images/spotify_black.svg`} alt="spotify icon" />
                <img src={`${config.image_base_url}/assets/images/youtube_black.svg`} alt="Youtube icon" />
            </div>
        </div>
    );
};
export default Cta;
