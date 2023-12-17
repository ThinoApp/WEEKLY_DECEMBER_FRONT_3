import { Cover } from '@/containers/BannerContainer/Banner.props';
import HeaderContainer from '@/containers/HeaderContainer/HeaderContainer';
import config from '@/utils/config';
import './Banner.scss';
import { motion } from 'framer-motion';
import { slideUp, zoomIn } from '@/utils/animation';

interface BannerProps {
    covers: Cover[];
    supportedList: string[];
}
const Banner = ({ covers, supportedList }: BannerProps) => {
    return (
        <div className="Banner">
            <HeaderContainer />
            <motion.img
                variants={zoomIn}
                initial={{ ...zoomIn.hidden, y: '-50%' }}
                whileInView="show"
                transition={{
                    delay: 0.2,
                }}
                src={`${config.image_base_url}/assets/images/HeroShapeSwirl.svg`}
                className="banner-shape-1"
            />
            <motion.img
                variants={zoomIn}
                initial={{ ...zoomIn.hidden, y: '-50%' }}
                whileInView="show"
                transition={{
                    delay: 0.3,
                }}
                src={`${config.image_base_url}/assets/images/Star.png`}
                className="banner-shape-2"
            />
            <motion.img src={`${config.image_base_url}/assets/images/Scribbleicons-2.svg`} className="banner-shape-3" />
            <div className="Banner-content">
                <h1>
                    Your Daily <br />
                    <span>Podcast</span>
                </h1>
                <p>We cover all kinds of categories and a weekly special guest.</p>
                <button>SUBSCRIBE</button>
            </div>
            <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2, once: false }}
                transition={{
                    delay: 0.3,
                }}
                className="Banner-cover"
            >
                {covers.map((item) => (
                    <div className="cover-item" key={item.id}>
                        <img src={`${config.image_base_url}${item.img}`} alt="cover image" />
                        <h2>{item.title}</h2>
                        <ul className="cover-icons">
                            <motion.img
                                initial={{ rotate: '360deg' }}
                                whileInView={{ rotate: '0deg' }}
                                transition={{ delay: 0.5 }}
                                src={`${config.image_base_url}/assets/images/google podcast.png`}
                                alt="google podcast"
                            />
                            <motion.img
                                initial={{ rotate: '360deg' }}
                                whileInView={{ rotate: '0deg' }}
                                transition={{ delay: 0.6 }}
                                src={`${config.image_base_url}/assets/images/spotify.png`}
                                alt="Spotify"
                            />
                            <motion.img
                                initial={{ rotate: '360deg' }}
                                whileInView={{ rotate: '0deg' }}
                                src={`${config.image_base_url}/assets/images/youtube.png`}
                                alt="Youtube"
                            />
                        </ul>
                    </div>
                ))}
            </motion.div>

            <div className="Banner-supportedBy">
                <p>Supported by :</p>
                <div>
                    {supportedList.map((item, index) => (
                        <motion.img
                            variants={slideUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ amount: 0.2, once: false }}
                            transition={{
                                delay: index * 0.2,
                            }}
                            src={`${config.image_base_url}${item}`}
                            alt="supportedBy"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Banner;
