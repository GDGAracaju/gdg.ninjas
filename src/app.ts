// TODO: Apenas para testar se o angular2 está rodando, irá mudar muita coisa

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
  template: `<h1>Hello {{ name }}</h1>`
})
class App {
  name: string;

  constructor() {
    this.name = "World";
  }
}

bootstrap(App);
