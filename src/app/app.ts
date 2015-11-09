import {bootstrap} from "angular2/angular2";
import {Component, View} from "angular2/angular2";

import {GdgHeader} from "./components/header/header";
import {GdgContainer} from "./components/container/container";

@Component({
    selector: "gdg-app"
})
@View({
  templateUrl: "./app/app.html",
  directives: [GdgHeader, GdgContainer]
})
class GdgApp {
  siteName: string;

  constructor() {
    this.siteName = "GDG Aracaju";
  }
}

bootstrap(GdgApp);
