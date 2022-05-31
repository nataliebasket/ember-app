import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  store: service(),
  currentUser: service(),

  init() {
    this._super(...arguments);
    set(this, 'tags', []);
    set(this, 'uploadData', null);
  },

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },

    async createNewBook(e) {
      e.preventDefault();

      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');

      // await this.get("dataService").createBook({
      //   name: this.get('bookName'),
      //   author: this.get('bookAuthor'),
      //   pages: this.get('bookPages'),
      //   description_url: this.get('bookURL'),
      //   tags: this.get('tags'),
      //   user: this.get('currentUser.user'),
      //   cover_url: '',
      //   }, uploadData);

      let newBook = this.get('store').createRecord('book',
      {
        name: this.get('bookName'),
        author: this.get('bookAuthor'),
        pages: this.get('bookPages'),
        description_url: this.get('bookURL'),
        tags: this.get('tags'),
        cover_url: '',
        user: this.get('currentUser.user')
      });

      await newBook.save();


      set(this, 'isUploadingFile', false);
      this.transitionToRoute('books');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData); //синхронизация контроллера с компонентом
    },

    cancelSaveBook () {
      this.transitionToRoute('books');
    }
  }
});
