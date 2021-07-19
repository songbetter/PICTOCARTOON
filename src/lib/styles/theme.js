const deviceSizes = {
  mobile: '414px',
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  pc: `only screen and (min-width: ${deviceSizes.mobile})`,
};

const colors = {
  main: '#ff5252',
  sub: '#ffebee',
};

export const theme = {
  device,
  colors,
  deviceSizes,
};
