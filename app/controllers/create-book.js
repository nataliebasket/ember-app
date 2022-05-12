import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

// set(this, 'tags', []);

export default Controller.extend({
  dataService: service('data'),

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },

    async createNewBook(e) {
      e.preventDefault();

      await this.get("dataService").createBook({
        name: this.get('bookName'),
        author: this.get('bookAuthor'),
        pages: this.get('bookPages'),
        cover_url: this.get('bookImgURL'),
        description_url: this.get('bookURL'),
        // tags: this.get('bookTags').split(','),
        tags: this.get('tags'),
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
