var LinkModel = (function () {
    function LinkModel(title, href) {
        this.title = title;
        this.href = href;
    }
    return LinkModel;
})();
exports.LinkModel = LinkModel;
var MenuItemModel = (function () {
    function MenuItemModel(label, href) {
        this.label = label;
        this.href = href;
    }
    return MenuItemModel;
})();
exports.MenuItemModel = MenuItemModel;
var DetailItemModel = (function () {
    function DetailItemModel(title, text, link) {
        this.title = title;
        this.text = text;
        this.link = link;
    }
    return DetailItemModel;
})();
exports.DetailItemModel = DetailItemModel;
