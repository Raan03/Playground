import React, { Component } from "react";

// JavaScript source code
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
        errorStack: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error.message, errorStack: error.stack });
    }

    render() {
        if (this.state.hasError)
        {
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <hr />
                    <h2>{this.state.errorMessage}</h2>
                    <code>{this.state.errorStack}</code>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;