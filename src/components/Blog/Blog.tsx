import config from '@/utils/config';
import './Blog.scss';
import { motion } from 'framer-motion';
import { fadeInTopLeft, rotateAndScale } from '@/utils/animation';
const Blog = () => {
    return (
        <div className="Blog">
            <img src={`${config.image_base_url}/assets/images/Scribbleicons-2.svg`} className="blog-shape-3" />

            <motion.h2
                variants={fadeInTopLeft}
                initial="hidden"
                whileInView="show"
                transition={{
                    delay: 0.3,
                }}
            >
                Article and News
            </motion.h2>
            <h3>News, tips, tricks and more</h3>
            <ul>
                <motion.img
                    initial={{ ...rotateAndScale('right').hidden, x: '-50%', y: '-50%' }}
                    whileInView={rotateAndScale('right').show}
                    src={`${config.image_base_url}/assets/images/Staricons.svg`}
                    alt="Blog-shape-1"
                    className="blog-shape-1"
                />
                <img
                    src={`${config.image_base_url}/assets/images/Scribbleicons-1.svg`}
                    alt="Blog-shape-2"
                    className="blog-shape-2"
                />
                <li>
                    <img src={`${config.image_base_url}/assets/images/img.png`} alt="Blog image 1" />
                    <div>
                        <p className="subtitle">PODCAST</p>
                        <h3>Setup your own podcast</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                            laboris...
                        </p>
                        <hr />
                        <div className="bottom-container">
                            <div className="keywords-container">
                                <button>business</button>
                                <button>startup</button>
                            </div>
                            <p>Sep 14, 2021</p>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={`${config.image_base_url}/assets/images/img-1.png`} alt="Blog image 1" />
                    <div>
                        <p>TIPS & TRICK</p>
                        <h3 className="subtitle">Doodle artwork 101</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco
                            laboris...
                        </p>
                        <hr />
                        <div className="bottom-container">
                            <div className="keywords-container">
                                <button>art</button>
                                <button>creative</button>
                                <button>tips and trick</button>
                            </div>
                            <p>Sep 12, 2021</p>
                        </div>
                    </div>
                </li>
            </ul>
            <button>BROWSE ALL</button>
        </div>
    );
};
export default Blog;
