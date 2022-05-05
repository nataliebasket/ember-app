import Service from '@ember/service';
import ENV from 'flexberry-ember/config/environment';
import { A } from '@ember/array';

export default Service.extend({
  init () {
     this._super(...arguments);
     this.set('speakers', A());
     this.set('books', A());
  },

  async getSpeakers(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }
    let response = await fetch(`${ENV.backendURL}/speakers${queryParams}`);
    let speakers = await response.json();
    this.get('speakers').clear();
    this.get('speakers').pushObjects(speakers);
    return this.get('speakers');
  },

  // async getSpeakers() {
  //   let response = await fetch(`${ENV.backendURL}/speakers`);
  //   let speakers = await response.json();
  //   this.get('speakers').clear();
  //   this.get('speakers').pushObjects(speakers);
  //   return this.get('speakers');
  // },

  async getBooks() {
    let response = await fetch(`${ENV.backendURL}/books`);
    let books = await response.json();
    this.get('books').clear();
    this.get('books').pushObjects(books);
    return this.get('books');
  },

  getSpeaker(id) {
    // return fetch(`${ENV.backendURL}/speakers/${id}`)
    // .then((response) => response.json());
    return this.get('speakers').find((speaker) => speaker.id === parseInt(id));
  },

  getBook(id) {
    // return fetch(`${ENV.backendURL}/books/${id}`)
    // .then((response) => response.json());
    return this.get('books').find((book) => book.id === parseInt(id));
  },

  deleteSpeaker(speaker) {
    this.get('speakers').removeObject(speaker);
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, { method: 'DELETE'});
  },

  deleteBook(book) {
    this.get('books').removeObject(book);
    return fetch(`${ENV.backendURL}/books/${book.id}`, { method: 'DELETE'});
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  createBook(book) {
    return fetch(`${ENV.backendURL}/books/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  },

  updateSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  updateBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  },

});
