import Service from '@ember/service';

export default Service.extend({
  getBooks() {
    return fetch('http://localhost:3000/books')
    .then((response) => response.json());
  },

  getSpeakers() {
    return fetch('http://localhost:3000/speakers')
    .then((response) => response.json());
  }
});
