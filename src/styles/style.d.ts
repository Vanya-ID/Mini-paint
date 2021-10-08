import 'styled-components';
import {theme} from "./thme";

type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
    }
}