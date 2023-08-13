import colors from 'windicss/colors'

export default {
  safelist: 'bg-secondary-darker',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#F2FDF9',
        100: '#E6FCF3',
        200: '#BFF6E0',
        300: '#99F1CD',
        400: '#4DE7A8',
        DEFAULT: '#00DC82',
        600: '#00C675',
        700: '#00844E',
        800: '#00633B',
        900: '#004227'
      },
      'secondary-surface': '#E5F9FF',
      'secondary-lightest': '#B7E1ED',
      'secondary-lighter': '#95CDDE',
      'secondary-light': '#71A2B0',
      secondary: '#497A87',
      'secondary-dark': '#255461',
      'secondary-darker': '#003543',
      'secondary-darkest': '#012A35',
      'secondary-black': '#001E26',
      tertiary: '#B2CCCC', // cloud
      'cloud-surface': '#E6F0F0',
      'cloud-lightest': '#D1E2E2',
      'cloud-lighter': '#B2CCCC',
      'cloud-light': '#92ADAD',
      cloud: '#688282',
      'cloud-dark': '#566B6B',
      'cloud-darker': '#334040',
      'cloud-darkest': '#273131',
      'cloud-black': '#1A2121',
      black: '#000',
      white: '#fff',
      blue: colors.lightBlue,
      green: {
        // 50: "#eefdf2",
        50: '#d0fcde',
        100: '#b0fccb',
        200: '#8cfab7',
        300: '#64f4a3',
        400: '#37e990',
        500: '#00d77d',
        600: '#00bb6a',
        700: '#009956',
        800: '#047342',
        900: '#134d2e'
        // 950: "#132a1c",
      },
      red: colors.red,
      rose: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      gray: colors.gray,
      purple: colors.purple,
      sky: {
        surface: '#E5F9FF',
        lightest: '#B7E1ED',
        lighter: '#95CDDE',
        light: '#71A2B0',
        DEFAULT: '#497A87',
        dark: '#255461',
        darker: '#003543',
        darkest: '#012A35',
        black: '#001E26'
      },
      mint: {
        surface: '#E7FEFD',
        lightest: '#C5EEEC',
        lighter: '#A8DDDB',
        light: '#7EB1B0',
        DEFAULT: '#558887',
        dark: '#2E6160',
        darker: '#003C3C',
        darkest: '#012E2F',
        black: '#002021'
      },
      indigo: {
        lighter: '#80B1E3',
        light: '#408BD6',
        DEFAULT: '#0064C8',
        dark: '#0055AA',
        darker: '#00468C'
      }
    },
    extend: {
      fontFamily: {
        sans: 'IS Regular',
        serif: 'IS Light',
        mono: 'IS Medium'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  shortcuts: {
    'app-button-primary-color': 'text-black bg-primary-500 hover:bg-primary-400 focus:ring-primary-600',
    'app-button-secondary-color': 'bg-gray-500 bg-opacity-10 hover:bg-opacity-20',
    'nuxt-text-highlight': 'py-2 px-4 rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10',
    'nuxt-text-highlight-hover': 'nuxt-text-highlight dark:hover:bg-opacity-9 light:hover:bg-gray-50',
    'text-display-6': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem'
    },
    'text-display-6': { fontSize: '1.688rem', lineHeight: '2.025rem' },
    'text-display-5': { fontSize: '2.025rem', lineHeight: '2.25rem' },
    'text-display-4': { fontSize: '2.7rem', lineHeight: '2.7rem' },
    'text-display-3': { fontSize: '3.375rem', lineHeight: '3.375rem' },
    'text-display-2': { fontSize: '4.05rem', lineHeight: '4.05rem' },
    'text-display-1': { fontSize: '5.4rem', lineHeight: '5.4rem' },
    'text-body-xs': { fontSize: '0.675rem', lineHeight: '0.9rem' },
    'text-body-sm': { fontSize: '0.788rem', lineHeight: '1.125rem' },
    'text-body-base': { fontSize: '0.9rem', lineHeight: '1.35rem' },
    'text-body-lg': { fontSize: '1.012rem', lineHeight: '1.575rem' },
    'text-body-xl': { fontSize: '1.125rem', lineHeight: '1.575rem' },
    'text-body-2xl': { fontSize: '1.35rem', lineHeight: '1.8rem' }
  }
}
