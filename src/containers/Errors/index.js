import * as React from 'react';

class ErrorWrapper extends React.Component {
    public componentDidCatch(error, info) {
        // tslint:disable-next-line
        console.error(error);
    }

    public render() {
        return this.props.children;
    }
}

export {
    ErrorWrapper,
};


// WEBPACK FOOTER //
// src/drone/src/src/containers/Errors/index.tsx



// WEBPACK FOOTER //
// ./src/containers/Errors/index.tsx
