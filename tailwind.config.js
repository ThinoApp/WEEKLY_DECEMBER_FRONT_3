/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                '2diff': '1fr 2fr',
            },
            flex: {
                2: '1.4 1.4 0%',
                small: '0.8 0.8 0%',
                xs: '0.5 0.5 0%',
            },
            screens: {
                mobile: '470px',
                xsmobile: '370px',
                xslarge: '900px',
            },
            //Background
            backgroundColor: {
                primary: '#81ADC8',
                secondary: '#EDF3F7',
                tertiary: '#F7EDE8',
                vermillon: '#CD4631',
                davysGray: '#4D4D4D',
            },

            //Border
            borderColor: {
                primary: '#81ADC8',
                secondary: '#EDF3F7',
                tertiary: '#F7EDE8',
                vermillon: '#CD4631',
                davysGray: '#4D4D4D',
            },

            //Font
            textColor: {
                primary: '#81ADC8',
                secondary: '#EDF3F7',
                tertiary: '#F7EDE8',
                vermillon: '#CD4631',
                davysGray: '#4D4D4D',
            },
            fontFamily: {
                montserrat: ['Montserrat Alternates'],
            },

            //Shadow
            dropShadow: {
                btn: '0 3px 6px rgba(0,0,0,0.16)',
                card: '0 6px 24px rgba(0,0,0,0.23)',
            },
        },
    },
    plugins: [],
};
