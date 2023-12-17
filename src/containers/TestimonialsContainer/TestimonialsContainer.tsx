import Testimonials from '@/components/Testimonials/Testimonials';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from './Testimonials.utils.json';
const TestimonialsContainer = () => {
    const [visibleItem, setVisibleItem] = useState(-1);
    const testimonial_container = useRef<HTMLDivElement>(null);

    const handleBtnClick = (value: string) => {
        if (value === 'left') {
            if (visibleItem > 0) setVisibleItem((prev) => prev - 1);
        } else {
            if (visibleItem == -1) {
                setVisibleItem(1);
            } else if (visibleItem < testimonials.length - 1) setVisibleItem((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (testimonial_container.current) {
            const item = testimonial_container.current.children[visibleItem];
            if (item) {
                item.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }
    }, [visibleItem]);

    return (
        <>
            <Testimonials
                visibleItem={visibleItem}
                liste={testimonials}
                onBtnClick={handleBtnClick}
                ref={testimonial_container}
            />
        </>
    );
};
export default TestimonialsContainer;
