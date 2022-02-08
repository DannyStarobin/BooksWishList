import React from "react";
import { Switch, Route } from 'react-router'
import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookApp } from "./pages/book-app.jsx";

import routes from "./routes.js";

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <BookApp />
                </main>
                {/* <AppFooter/> */}
            </div>
        )
    }
}