// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      navigation: string;
      font: string;
      primary: string;
      background: string;
    };
  }
}
