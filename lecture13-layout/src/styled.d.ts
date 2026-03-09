import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            background: string;
            text: string;
            primary: string;
            muted: string;
        };
    }
}
