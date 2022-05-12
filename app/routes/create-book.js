import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

// инициализация контролеера при каждом захоже на роут
  setupController(controller/*, model*/) {
    this._super(...arguments);
    set(controller, 'tags', []);
    set(controller, 'uploadData', null);
    set(controller, 'bookName', '');
    set(controller, 'bookAuthor', '');
    set(controller, 'bookPages', '');
    set(controller, 'bookURL', '');
  }
});
