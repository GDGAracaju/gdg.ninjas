import {Component, View} from "angular2/angular2";

import {GdgFooter} from "../footer/footer";

@Component({
  selector: "gdg-container"
})
@View({
  templateUrl: "./app/components/container/container.html",
  directives: [GdgFooter]
})
export class GdgContainer{}
