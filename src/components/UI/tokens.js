const tokens = {
  colors: {
    primary: '#668a4e',

    primaryLight1: '#95ae85',
    primaryLight2: '#c5d3bc',
    primaryWhite: '#f4f7f3',

    primaryDark1: '#465f36',
    primaryDark2: '#27341e',
    primaryBlack: '#070a05',

    white: '#fff',
    darkGrey: '#4a4a51',
    mediumGrey: '#87878f',
    lightGrey: '#bdbdca',
    whiteGrey: '#f3f3f5',

    error: '#8e0a0a',
    success: '#0f6621',
    warning: '#f6b165',
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
    fontSize: '1.5rem',
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
