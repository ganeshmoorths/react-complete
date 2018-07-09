import React , { Component } from 'react'
import { hot } from "react-hot-loader";

class App extends React.Component {
    // static defaultProps = {
    //     showNewNote: true,
    // }

    constructor() {
        super()
        this.state = {
            showNewNote: true
        }
    }

    handleNewNoteClick() {
        console.log('Create new note..')
    }

    render() {
        return (
            <div className="new-note" onClick={this.handleNewNoteClick}>+  Take a note...</div>
        )
    }
}

export default hot(module)(App)
export { App }