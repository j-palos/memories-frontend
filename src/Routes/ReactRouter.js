import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header} from "../Components/Layouts";
import {
    AboutContainer,
    DateContainer,
    LandingPage,
    MemoriesContainer,
    NewDateContainer
} from "../Components/Presentation/";
import {Container} from 'reactstrap';

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <Switch>
                <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={AboutContainer}/>
                    <Route exact path={"/dates"} component={DateContainer}/>
                    <Route exact path={"/memories"} component={MemoriesContainer}/>
                        <Route exact path={'/create'} component={NewDateContainer}/>
                    </Switch>
                </Container>
                {/*<Footer />*/}
            </React.Fragment>
        );
    }
}


export default ReactRouter;