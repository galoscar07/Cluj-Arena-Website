import React from "react";
import './App.scss';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import ConferinteSiEvenimente from "./Pages/ConferinteSiEvenimente/ConferinteSiEvenimente";
import SalaVip from "./Pages/SalaVip/SalaVip";
import SalaMultifunctionala from "./Pages/SalaMultifunctionala/SalaMultifunctionala";
import SalaConferinte from "./Pages/SalaConferinte/SalaConferinte";
import ShopSiRestaurant from "./Pages/ShopSiRestaurant/ShopSiRestaurant";
import SportSiRecuperare from "./Pages/SportSiRecuperare/SportSiRecuperare";
import GalerieFotoVideo from "./Pages/GalerieFotoVideo/GalerieFotoVideo";
import Contact from "./Pages/Contact/Contact";
import Servicii from "./Pages/Servicii/Servicii";
import Tarife from "./Pages/Tarife/Tarife";
import Sectorizare from "./Pages/Sectorizare/Sectorizare";
import Istoric from "./Pages/Istoric/Istoric";
import Parcare from "./Pages/Parcare/Parcare";
import Orar from "./Pages/Orar/Orar";
import NotFoundPage from "./Pages/404/404";
import Stiri from "./Pages/Stiri/Stiri";
import ObiectiveTuristice from "./Pages/ObiectiveTuristice/ObiectiveTuristice";

function App() {
  return (
      <Router>
        <Route component={Header} />
        <Switch>
            <Route exact path={'/'} component={Homepage} />
            {/* ---- ARENA ---- */}
            <Route exact path={'/servicii'} component={Servicii} />
            <Route exact path={'/tarife'} component={Tarife} />
            <Route exact path={'/sectorizare'} component={Sectorizare} />
            <Route exact path={'/istoric'} component={Istoric} />
            <Route exact path={'/parcare'} component={Parcare} />
            <Route exact path={'/orar'} component={Orar} />
            <Route exact path={'/stiri'} component={Stiri} />
            <Route exact path={'/obiective-turistice'} component={ObiectiveTuristice} />

            {/* ---- Conferinte si Evenimente */}
            <Route exact path={'/conferinte-si-evenimente'} component={ConferinteSiEvenimente} />
            <Route exact path={'/sala-vip'} component={SalaVip} />
            <Route exact path={'/sala-multifunctionala'} component={SalaMultifunctionala} />
            <Route exact path={'/sala-conferinte'} component={SalaConferinte} />

            <Route exact path={'/sport-si-recuperare'} component={SportSiRecuperare} />
            <Route exact path={'/shop-si-restaurant'} component={ShopSiRestaurant} />
            <Route exact path={'/galerie'} component={GalerieFotoVideo} />
            <Route exact path={'/contact'} component={Contact} />

            <Route component={NotFoundPage} />

        </Switch>
        <Route component={Footer} />
      </Router>
  );
}

export default App;
