import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { App } from './App'
import { hot } from 'react-hot-loader'

class WrapperComponent extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        )
    }
}

export default hot(module)(WrapperComponent)