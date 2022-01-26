const tokens = {
  colors: {
    primary: '#4e36b6',

    primaryLight1: '#8776cd',
    primaryLight2: '#bfb7e5',
    primaryWhite: '#f8f7fc',

    primaryDark1: '#35257c',
    primaryDark2: '#1c1342',
    primaryBlack: '#030207',

    white: '#fff',
    darkGrey: '#111',
    mediumGrey: '#7c7c7d',
    lightGrey: '#eee',

    error: '#ad2b0e',
    success: '#0e8f4a',
    warning: '#ffc04d',
  },

  fontSize: {
    100: 100,
    300: 300,
    400: 400,
    700: 700,
    900: 900,
  },
};

export const fonts = {
  h1: {
    fontSize: '3rem',
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[100],
  },

  h2: {
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[700],
  },

  h3: {
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[900],
  },

  display: {
    fontSize: '3rem',
    letterSpacing: '-0.7px',
    fontWeight: tokens.fontSize[700],
  },

  regular8: {
    fontWeight: tokens.fontSize[400],
    fontSize: '8px',
    letterSpacing: 0,
  },

  regular10: {
    fontWeight: tokens.fontSize[400],
    fontSize: '10px',
    letterSpacing: 0,
  },

  regular12: {
    fontWeight: tokens.fontSize[400],
    fontSize: '12px',
  },

  regular14: {
    fontWeight: tokens.fontSize[400],
    fontSize: '14px',
  },

  regular16: {
    fontWeight: tokens.fontSize[400],
    fontSize: '16px',
  },

  regular18: {
    fontWeight: tokens.fontSize[400],
    fontSize: '18px',
  },

  medium8: {
    fontWeight: tokens.fontSize[700],
    fontSize: '8px',
  },

  medium10: {
    fontWeight: tokens.fontSize[700],
    fontSize: '10px',
  },

  medium12: {
    fontWeight: tokens.fontSize[700],
    fontSize: '12px',
  },

  medium14: {
    fontWeight: tokens.fontSize[700],
    fontSize: '14px',
  },

  medium16: {
    fontWeight: tokens.fontSize[700],
    fontSize: '16px',
  },

  black10: {
    fontWeight: tokens.fontSize[900],
    fontSize: '10px',
  },

  black12: {
    fontWeight: tokens.fontSize[900],
    fontSize: '12px',
  },

  black14: {
    fontWeight: tokens.fontSize[900],
    fontSize: '14px',
  },

  black18: {
    fontWeight: tokens.fontSize[900],
    fontSize: '18px',
  },

  light14: {
    fontWeight: tokens.fontSize[100],
    fontSize: '14px',
  },

  light16: {
    fontWeight: tokens.fontSize[100],
    fontSize: '16px',
  },

  light18: {
    fontWeight: tokens.fontSize[100],
    fontSize: '18px',
  },
};

export default tokens;
