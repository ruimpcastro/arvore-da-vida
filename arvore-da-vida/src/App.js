import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import SobreNos from "./containers/SobreNos/SobreNos";
import Servicos from "./containers/Servicos/Servicos";
import Contactos from "./containers/Contactos/Contactos";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobrenos" component={SobreNos} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/contactos" component={Contactos} />
    </Switch>
  );
}

export default App;
