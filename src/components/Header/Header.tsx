import config from '@/utils/config';
import { FiChevronDown } from 'react-icons/fi';
import './Header.scss';
import { motion } from 'framer-motion';
import MenuMobileContainer from '@/containers/MenuMobileContainer/MenuMobileContainer';
import { fadeInDown } from '@/utils/animation';
const Header = () => {
    return (
        <motion.div variants={fadeInDown} initial="hidden" whileInView="show" className="Header">
            <img src={`${config.image_base_url}/assets/images/logo.png`} alt="logo" className="Header-logo" />
            <MenuMobileContainer />
            <div className="MenuDesktop">
                <ul>
                    <li>Episodes</li>
                    <li>About</li>
                    <li>
                        More
                        <div className="icon-container">
                            <FiChevronDown />
                        </div>
                    </li>
                </ul>
                <div className="MenuDesktop-btn-container">
                    <button>RECENT EPISODES</button>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
