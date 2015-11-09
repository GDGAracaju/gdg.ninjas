import {bootstrap} from "angular2/angular2";
import {Component, View} from "angular2/angular2";

@Component({
    selector: "gdg-app"
})
@View({
  templateUrl: "./app/app.html"
})
class GdgApp {
  siteName: string;

  constructor() {
    this.siteName = "GDG Aracaju";
  }
}

bootstrap(GdgApp);
