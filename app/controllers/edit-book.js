import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
    },

    async editBook(e) {
      e.preventDefault();

      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');

      await this.get("dataService").updateBook({
          name: this.get('model.name'),
          author: this.get('model.author'),
          pages: this.get('model.pages'),
          id: this.get('model.id'),
          description_url: this.get('model.description_url'),
          tags: this.get('tags'),
          cover_url: '',
        }, uploadData);

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
