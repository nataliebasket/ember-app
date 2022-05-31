import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ["search", "tag"],
  search: '',
  tag: '',

  actions: {
    deleteBook(book) {
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
  },
});
