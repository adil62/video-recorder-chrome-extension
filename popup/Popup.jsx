// will be used to add pause,stop,delete time on the page.
import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import SignIn from './SiginIn';

const root = ReactDOM.createRoot(
    document.querySelector("#root")
);

function Popup (props) {
    const isSignedIn = false;

    if (! isSignedIn) {
        return <SignIn />
    }

    return (
        <div>
            This is POPUP
        </div>
    )
}

root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
);
