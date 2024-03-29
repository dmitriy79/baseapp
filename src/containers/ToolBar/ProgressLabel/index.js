import classnames from 'classnames';
import * as React from 'react';

interface Props {
    progress?: string;
    isPositive?: boolean;
    additional?: string;
    bidUnit?: string;
}

export class ProgressLabel extends React.Component<Props>{
    public render() {
        const {
            progress,
            isPositive,
            additional,
            bidUnit,
        } = this.props;
        const className = classnames({
            'pg-trading-header-progress-label-progress-positive': isPositive,
            'pg-trading-header-progress-label-progress-negative': !isPositive,
        });
        return (
            <div className="pg-trading-header-progress-label">
                <div className={className}>{progress} {bidUnit}</div>
                <div className="pg-trading-header-progress-label-additional">{additional}</div>
            </div>
        );
    }
}


// WEBPACK FOOTER //
// src/drone/src/src/containers/ToolBar/ProgressLabel/index.tsx



// WEBPACK FOOTER //
// ./src/containers/ToolBar/ProgressLabel/index.tsx
