/*
  Třída pro jednu knihu v knihovně.

  Vlastnosti:
  - author: autor knihy
  - title: název khiny
  - year: rok vydání
  - image: obrázek knihy
  - isRead: boolean (true/false) zda máme knihu přečtenou

  Metody:
  - read(): označí knihu jako přečtenou
*/
export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

	renderHTML(current) {
		let profil = document.querySelector('#booklist');
		let status = ``;
		if (this.isRead === true) {
			status = `<div class="book__badge book__badge--read">Přečteno</div>`;
		} else if (current) {
			status = `<div class="book__badge book__badge--current">Právě čtu</div>`;
		}
		profil.innerHTML += `
			<div class="book">
			<div class="book__image">
				<img src="images/${this.image}" alt="Obálka ${this.title}">
			</div>
			<div class="book__info">
				<h3 class="book__title">${this.title}</h3>
				<p class="book__meta">${this.author}, ${this.year}</p>
			</div>
			${status}
		</div>
		`;
	}
}