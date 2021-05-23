import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Ambulance from './components/Ambulance';
import Firefiters from './components/Firefiters';
import Form from './components/Form'
import HelpMe from './components/HelpMe';
import Police from './components/Police';

function App() {

  const [ state, setState ] = useState({
    name: '',
    password:'',
  })

  const getParams = (name, password) => {
    setState({ name, password });
  }

  return (
    <div>
      <Switch>

        <Route
          exact
          path="/"
          component={() => <Form getParams={getParams} />}
        />

        {/* <Route exact path="/Ambulance" component={()=><Ambulance  />} />
        <Route exact path="/Police" component={Police} />
        <Route exact path="/Firefiters" component={Firefiters} /> */}

        <Route exact path={`${state.name}`} component={HelpMe} />

      </Switch>

      {/* <pre>APP: {JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
}

export default App;
