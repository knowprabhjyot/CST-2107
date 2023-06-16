import React, { Component } from 'react'
import RandomJokeContext from '../context/RandomJoke'

export default class RandomJoke extends Component {
    render() {
        return (
            <RandomJokeContext.Consumer>
                {
                    (randomJoke) => (
                        <>
                            <div>{randomJoke.type}</div>
                            <div>{randomJoke.setup}</div>
                            <div>{randomJoke.punchline}</div>
                        </>
                    )
                }

            </RandomJokeContext.Consumer>
        )
    }
}
