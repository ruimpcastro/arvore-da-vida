import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SobreNos from "./components/SobreNos/SobreNos";
import Servicos from "./components/Servicos/Servicos";
import Contactos from "./components/Contactos/Contactos";

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
