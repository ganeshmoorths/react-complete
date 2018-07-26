import React from 'react'
import axios from 'axios'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const appState = observable({
    articles: [],
    message: 'Hello!',
    timer: 0,
})

@observer
class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = state
    // }
    static defaultProps = {
        articles: []
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d40a29aab6d04941ac90045f7221316f')
        .then(response => {
            console.log('news response', response)
            appState.articles = response.data.articles
        })
        setInterval(() => {
            appState.timer += 1;
        }, 1000);
    }
    render() {
        const { message, articles, timer } = appState
        // const { articles } = this.props
        const articlesDOM = articles.map((item, key) => <p className={key}>{JSON.stringify(item)}</p>)
        return (
            <div>
                <h1>{message}</h1>
                <h1>{timer}</h1>
                <h2>{articlesDOM}</h2>
            </div>
        )
    }
}

function makeHigherOrderComponent(TargetComponent) {
    return class DataConnectorComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                articles: []
            }
        }
        componentDidMount() {
            axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d40a29aab6d04941ac90045f7221316f')
            .then(response => {
                console.log('news response', response)
                this.setState({
                    articles: response.data.articles
                })
            })
        }

        render() {
            console.log('asdfasdf')
            return(
                <TargetComponent articles={this.state.articles}/>
            )
        }
    }
}

// const AppComponent = makeHigherOrderComponent(App)

export default App;
export { App as App }