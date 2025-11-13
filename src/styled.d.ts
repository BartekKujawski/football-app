import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            textPrimary: string;
            textHoverPrimary: string;
            background: string;
            contentBackground: string;
            textBackground: string;
        };
    }
}
