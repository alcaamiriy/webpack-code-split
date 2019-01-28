import React from "react";
import Hello from "./Hello";


export default class Home extends React.Component {
    state = {
        slugifiedText: "",
        h4Ref: React.createRef()
    };
    OnTextChange = (e) => {
        const text = e.target.value;
        
    }
    render() {
        return (
            <div>
                <h1>
                    Home Component  -
                    <Hello color={"lightblue"}  />
                </h1>
                <form>
                    <input type="text" onChange={this.OnTextChange} />
                    <h4 ref={this.state.h4Ref}></h4>
                </form>

            </div>
        )
    }
}
