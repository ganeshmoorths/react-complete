import React from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react'

let state = observable({
    hasError: false,
    error: {},
    info: {},
})

@observer
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = state
    }

    componentDidCatch(error, info) {
        console.log('ERROR DETECTED!', error, info);
        // state = {
        //     hasError: true,
        //     error: error,
        //     info: info,
        // }
        state.hasError = true
        state.error = error
        state.info = info
        // this.setState({
        //     hasError: true,
        //     error,
        //     info,
        // })
    }

    render() {
        const { error, info } = state
        if(this.state.hasError) {
            return (
                <div className="error-component">
                    <h1>Error in your component!!</h1>
                    <h2>{error.message}</h2>
                    <h3>{info.componentStack}</h3>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary
export { ErrorBoundary }