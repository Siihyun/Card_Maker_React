import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      makerBlack: string;
      makerWhite: string;
      makerLightGrey: string;
      makerLightPink: string;
      makerGrey: string;
      makerGreen: string;
      makerPink: string;
      makerShadow: string;
      makerColorful: string;
      makerWheat: string;
    };
    sizes: {
      mediaQuery: string;
    };
  }
}
