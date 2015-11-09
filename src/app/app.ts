import {bootstrap} from "angular2/angular2";
import {Component, View} from "angular2/angular2";

import {GdgHeader} from "./components/header/header";

@Component({
    selector: "gdg-app"
})
@View({
  templateUrl: "./app/app.html",
  directives: [GdgHeader]
})
class GdgApp {
  siteName: string;

  constructor() {
    this.siteName = "GDG Aracaju";
  }
}

bootstrap(GdgApp);
