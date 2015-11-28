var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var models_1 = require("../commons/models");
var GdgDescriptionCard = (function () {
    function GdgDescriptionCard() {
        this.model = new DescriptionModel("Título", "Descrição", new models_1.LinkModel("Leia mais", "#"), [new models_1.MenuItemModel("Leia mais", "#")]);
    }
    GdgDescriptionCard = __decorate([
        angular2_1.Component({
            selector: "description-card"
        }),
        angular2_1.View({
            templateUrl: "./app/components/description-card/description-card.html",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], GdgDescriptionCard);
    return GdgDescriptionCard;
})();
exports.GdgDescriptionCard = GdgDescriptionCard;
var DescriptionModel = (function () {
    function DescriptionModel(title, descriptionText, link, menu) {
        this.title = title,
            this.descriptionText = descriptionText,
            this.link = link,
            this.menu = menu;
    }
    return DescriptionModel;
})();
