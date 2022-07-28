import './intro.css'
import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="intro">
                <h1 className="logo-header-intro">
                    <span className="logo-intro">Bem </span>
                    <span className="logo-intro">vindos.</span>
                </h1>
            </div>
        )
    }

    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "../../script/intro.ts";
        script.async = true;
    
        document.body.appendChild(script);
    }
}
