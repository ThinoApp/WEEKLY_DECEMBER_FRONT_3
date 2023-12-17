export const fadeInDown = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export const fadeInTopLeft = {
    hidden: {
        opacity: 0,
        x: -100,
        y: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
    },
};

export const rotateAndScale = (direction) => ({
    hidden: {
        scale: 0,

        rotate: direction === 'left' ? '360deg' : '-360deg',
    },
    show: {
        scale: 1,

        rotate: '0deg',
    },
});

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
};
export const zoomIn = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
    },
};

export const slideRight = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
    },
};

export const slideUp = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export const slideLeft = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
    },
};

export const rotateIn = {
    hidden: {
        rotate: '45deg',
    },
    show: {
        rotate: '0deg',
    },
};
export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const scaleXLeft = {
    hidden: {
        scaleX: 0,
        opacity: 0,
    },
    show: {
        scaleX: 1,
        opacity: 1,
    },
};

export const flipX = {
    hidden: {
        rotateX: '180deg',
        opacity: 0,
    },
    show: {
        rotateX: '0deg',
        opacity: 1,
    },
};
