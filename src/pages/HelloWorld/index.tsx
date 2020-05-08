import React from 'react'

function HelloWorld(props: any) {
    return (
        <h1>Hello, {props.match.params.name}!</h1>
    )
}

export default HelloWorld