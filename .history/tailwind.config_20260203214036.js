/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        accent: {
          red: { DEFAULT: '#FF3B30', dark: '#FF453A' },
          orange: { DEFAULT: '#FF9500', dark: '#FF9F0A' },
          yellow: { DEFAULT: '#FFCC00', dark: '#FFD60A' },
          green: { DEFAULT: '#28CD41', dark: '#32D74B' },
          mint: { DEFAULT: '#00C7BE', dark: '#66D4CF' },
          teal: { DEFAULT: '#59ADC4', dark: '#6AC4DC' },
          cyan: { DEFAULT: '#55BEF0', dark: '#5AC8F5' },
          blue: { DEFAULT: '#007AFF', dark: '#0A84FF' },
          indigo: { DEFAULT: '#5856D6', dark: '#5E5CE6' },
          purple: { DEFAULT: '#AF52DE', dark: '#BF5AF2' },
          pink: { DEFAULT: '#FF2D55', dark: '#FF375F' },
          gray: { DEFAULT: '#8E8E93', dark: '#98989D' },
          brown: { DEFAULT: '#A2845E', dark: '#AC8E68' },
          vibrant: {
            red: { DEFAULT: '#F53126', dark: '#FF4F44' },
            orange: { DEFAULT: '#F58B00', dark: '#FFA914' },
            yellow: { DEFAULT: '#F5C200', dark: '#FFE014' },
            green: { DEFAULT: '#1EC337', dark: '#3CE155' },
            mint: { DEFAULT: '#00BDB4', dark: '#6CE0DB' },
            teal: { DEFAULT: '#2EA7BD', dark: '#44D4FA' },
            cyan: { DEFAULT: '#41AFDC', dark: '#5ACDFA' },
            blue: { DEFAULT: '#0070F5', dark: '#148EFF' },
            indigo: { DEFAULT: '#5452CC', dark: '#6361F2' },
            purple: { DEFAULT: '#9F4BC9', dark: '#CC65FF' },
            pink: { DEFAULT: '#F5234B', dark: '#FF4169' },
            brown: { DEFAULT: '#987A54', dark: '#B69872' },
            gray: { DEFAULT: '#848489', dark: '#A2A2A7' },
          },
        },
        fill: {
          primary: { DEFAULT: '#000000', dark: '#FFFFFF' },
          secondary: { DEFAULT: '#000000', dark: '#FFFFFF' }, // Nota: En tu CSS eran iguales, podrías ajustarlos
          vibrant: {
            primary: { DEFAULT: '#D9D9D9', dark: '#242424' },
            secondary: { DEFAULT: '#E6E6E6', dark: '#141414' },
            tertiary: { DEFAULT: '#F2F2F2', dark: '#0D0D0D' },
          },
        },
        material: {
          sidebar: { DEFAULT: '#EAEAEA', dark: '#000000' },
          titlebar: { DEFAULT: '#EAEAEA', dark: '#3C3C3C' },
          selection: { DEFAULT: '#CC142D', dark: '#FF2D55' },
          menu: { DEFAULT: '#282828', dark: '#F6F6F6' },
        },
      },
      fontSize: {
        'mac-title-large': '26px',
        'mac-title-1': '22px',
        'mac-title-2': '17px',
        'mac-title-3': '15px',
        'mac-headline': '13px',
        'mac-body': '13px',
        'mac-callout': '12px',
        'mac-subheadline': '11px',
        'mac-footnote': '10px',
      },
      boxShadow: {
        'mac-primary':
          '0px 0px 3px rgba(0, 0, 0, 0.55), 0px 36px 100px rgba(0, 0, 0, 0.4)',
        'mac-secondary':
          '0px 0px 3px rgba(0, 0, 0, 0.55), 0px 8px 40px rgba(0, 0, 0, 0.25)',
        'mac-card': '0px 1px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
