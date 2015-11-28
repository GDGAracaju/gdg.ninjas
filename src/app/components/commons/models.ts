export class LinkModel {
  title: String;
  href: String;

  constructor(title: String, href: String){
    this.title = title;
    this.href = href;
  }
}

export class MenuItemModel {
  label: String;
  href: String;

  constructor(label: String, href: String){
    this.label = label;
    this.href = href;
  }
}

export class DetailItemModel{
  title: String;
  text: String;
  link: LinkModel;

  constructor(
    title: String,
    text: String,
    link: LinkModel
  ){
    this.title = title;
    this.text = text;
    this.link = link;
  }
}
