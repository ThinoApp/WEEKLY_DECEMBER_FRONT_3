import { useState } from 'react';
import MenuMobile from '@/components/MenuMobile/MenuMobile';
const MenuMobileContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <MenuMobile isOpen={isOpen} onMenuIconClick={handleMenuItemClick} />
        </>
    );
};
export default MenuMobileContainer;
