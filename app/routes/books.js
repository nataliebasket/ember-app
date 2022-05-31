import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'), //с ипользованием inject получаем нужный сервис
  currentUser: service(),

  queryParams: {
    search: {
      refreshModel: true,
    },
    tag: {
      refreshModel: true,
    }
  },

  model ({ search, tag }) {
    return this.get('store').query('book', {q: search, tags_like: tag});
  }
});
