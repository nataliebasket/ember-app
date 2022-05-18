import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search", "tag"],
  search: '',
  tag: '',

  dataService: service('data'),

  actions: {
    deleteBook(book) {
      // this.get("dataService").deleteBook(book);
      book.destroyRecord();
    },

    searchBook(e) {
      e.preventDefault();
      this.set("search", this.get("searchBook"));
      this.set("tag", this.get("searchTag"));
    },

    searchTag(e) {
      e.preventDefault();
      this.set("search", this.get("searchBook"));
      this.set("tag", this.get("searchTag"));
    },
  }
});
