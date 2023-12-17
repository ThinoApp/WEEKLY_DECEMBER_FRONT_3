import config from '@/utils/config';
import { supportedList } from '@/containers/BannerContainer/Banner.utils.json';
import './Footer.scss';
import { motion } from 'framer-motion';
import { slideUp } from '@/utils/animation';
const Footer = () => {
    return (
        <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            className="Footer"
            transition={{ delay: 0.3 }}
        >
            <div className="Footer-top">
                <div className="Footer-logo">
                    <div>
                        <img src={`${config.image_base_url}/assets/images/logo.png`} className="logo" />
                        <p>©2021.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul>
                        <li>
                            <img src={`${config.image_base_url}/assets/images/twitter.svg`} alt="twitter" />
                        </li>
                        <li>
                            <img src={`${config.image_base_url}/assets/images/instagram.svg`} alt="instagram" />
                        </li>
                        <li>
                            <img src={`${config.image_base_url}/assets/images/tiktok.svg`} alt="tiktok" />
                        </li>
                    </ul>
                </div>
                <div className="Footer-link">
                    <div className="row">
                        <p>About</p>
                        <p className="highlight">Testimonials</p>
                        <p>Features</p>
                    </div>
                    <div className="row">
                        <p className="highlight">Episodes</p>
                        <p>Pricing</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="platform-link">
                    <div>
                        <p>Listen to episodes on your fav platform:</p>
                        <div className="icon-container">
                            {supportedList.map((item, index) => (
                                <img src={`${config.image_base_url}${item}`} alt="supportedBy" key={index} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>App available on:</p>
                        <div className="icon-container mobile">
                            <img src={`${config.image_base_url}/assets/images/app_store.svg`} alt="app_store" />
                            <img src={`${config.image_base_url}/assets/images/google_play.svg`} alt="app_store" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-bottom">
                <p>
                    ©2023. All Rights Reserved. <span>Pod of Cast</span>
                </p>
                <p>Terms . Privacy</p>
            </div>
        </motion.div>
    );
};
export default Footer;
