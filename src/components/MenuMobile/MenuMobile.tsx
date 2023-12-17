import './MenuMobile.scss';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

interface MenuMobileProps {
    isOpen: boolean;
    onMenuIconClick: () => void;
}

const MenuMobile = ({ isOpen, onMenuIconClick }: MenuMobileProps) => {
    return (
        <div className="MenuMobile">
            {isOpen ? (
                <MdClose className="menuIcon" size={26} onClick={onMenuIconClick} />
            ) : (
                <FiMenu className="menuIcon" size={26} onClick={onMenuIconClick} />
            )}
            {isOpen && (
                <div className="MenuMobile-content">
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
                    <div className="MenuMobile-btn-container">
                        <button>RECENT EPISODES</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default MenuMobile;
