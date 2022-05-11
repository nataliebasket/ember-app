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

      await this.get("dataService").updateBook({
          name: this.get('model.name'),
          author: this.get('model.author'),
          pages: this.get('model.pages'),
          id: this.get('model.id'),
          cover_url: this.get('model.cover_url'),
          description_url: this.get('model.description_url'),
          // tags: this.get('model.tags').split(','),
          tags: this.get('tags'),

        });

      this.transitionToRoute('books');
    },

    cancelSaveBook () {
      this.transitionToRoute('books');
    }
  }
});
