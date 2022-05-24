import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'), //с ипользованием inject получаем нужный сервис

  queryParams: {
    search: {
      refreshModel: true,
    }
  },

  model ({ search }) {
    // return search ? this.get("dataService").getSpeakers(search) : this.get("dataService").getSpeakers();
    // return this.get('store').findAll ('speaker');
    return this.get('store').query('speaker', {q: search});
  },

  setupController(controller, model) {
    this._super(...arguments);
    // if (this.get('modelPromise')) {
    //   controller.set('isLoading', true);
    // }
  },

});
