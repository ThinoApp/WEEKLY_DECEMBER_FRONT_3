import { Testimonial } from '@/containers/TestimonialsContainer/Testimonials.types';
import config from '@/utils/config';
import './Testimonials.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { rotateIn, zoomIn } from '@/utils/animation';
interface TestimonialsProps {
    liste: Testimonial[];
    onBtnClick: (direction: string) => void;
    visibleItem: number;
}

const Testimonials = forwardRef<HTMLDivElement, TestimonialsProps>(({ liste, onBtnClick, visibleItem }, ref) => {
    return (
        <div className="Testimonials">
            <motion.h2
                variants={zoomIn}
                initial="hidden"
                whileInView="show"
                // viewport={{ amount: 0.5, once: false }}
            >
                What our listeners say
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ amount: 0.25, once: false }}
                    src={`${config.image_base_url}/assets/images/Sparkle.svg`}
                    className="testimonial-shape-1"
                />
            </motion.h2>
            <h3>Their experience throughout every platform</h3>
            <div className="Testimonials-liste" ref={ref}>
                {liste.map((item, index) => (
                    <div
                        key={item.id}
                        id={`Testimonial-${item.id}`}
                        className={`Testimonials-item ${visibleItem === index ? 'active' : ''} ${
                            visibleItem === -1 && index === 0 ? 'active' : ''
                        }`}
                    >
                        <motion.h2 variants={rotateIn} initial="hidden" whileHover="show">
                            “
                        </motion.h2>
                        <p>{item.description}</p>
                        <div>
                            <img src={`${config.image_base_url}${item.avatar}`} alt="avatar image" />
                            <p>{item.name},</p>
                            <img src={`${config.image_base_url}${item.platform.icon}`} alt="Platform icon" />
                            <p>{item.platform.label}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="btn-navigation">
                <motion.button
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="show"
                    transition={{ delay: 0.2 }}
                    onClick={() => onBtnClick('left')}
                    className={`${visibleItem === 0 && 'pointer-events-none disable-btn'}`}
                >
                    <FiChevronLeft size={34} className="icon" />
                </motion.button>
                <motion.button
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="show"
                    transition={{ delay: 0.3 }}
                    onClick={() => onBtnClick('right')}
                    className={`${visibleItem === liste.length - 1 && 'pointer-events-none disable-btn'}`}
                >
                    <FiChevronRight size={35} className="icon" />
                </motion.button>
            </div>
        </div>
    );
});
export default Testimonials;
