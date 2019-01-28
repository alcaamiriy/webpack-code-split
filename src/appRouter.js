import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import loadable from "react-loadable";
import Loading from "./components/Loading";
// import Contact from "./components/Contact";


const HomePromise = () => import(/* webpackChunkName: "HomePageChunk" */ "./components/Home");
const AboutPromise = () => import(/* webpackChunkName: "AboutPageChunk" */ "./components/About");
const ContactPromise = () => import(/* webpackChunkName: "ContactPageChunk" */ "./components/Contact");

const About = loadable({
    loader: AboutPromise,
    loading: Loading,
    delay: 5000
});
const Contact = loadable({
    loader: ContactPromise,
    loading: Loading,
    delay: 5000
});
const Home = loadable({
    loader: HomePromise,
    loading: Loading,
    delay: 5000
});

export default () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/contact" component={Contact} />
            </Switch>
        </div>
    </Router>
)


