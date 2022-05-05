import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async createNewBook(e) {
      e.preventDefault();

      await this.get("dataService").createBook({
        name: this.get('bookName'),
        author: this.get('bookAuthor'),
        pages: this.get('bookPages'),
        cover_url: this.get('bookImgURL'),
        description_url: this.get('bookURL'),
        tags: this.get('bookTags').split(','),
        });

      this.transitionToRoute('books');
    },

    cancelSaveBook () {
      this.transitionToRoute('books');
    }
    // changeLastName(lastName) {
    //   console.log(lastName);
    //   this.set('lastName', lastName)
    // }
  }
});
