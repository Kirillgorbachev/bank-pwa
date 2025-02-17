declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

    export default ReactComponent;
}
