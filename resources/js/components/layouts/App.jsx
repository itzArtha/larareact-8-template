import React from 'react';
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <Link to={"good"}>Hello</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
