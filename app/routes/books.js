import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'), //с ипользованием inject получаем нужный сервис

  queryParams: {
    search: {
      refreshModel: true,
    },
    tag: {
      refreshModel: true,
    }
  },

  model ({ search, tag }) {
    // return this.get('store').findAll ('book');
    return this.get('store').query('book', {q: search, tags_like: tag});
    // return (search || tag) ? this.get("dataService").getBooks(search, tag) : this.get("dataService").getBooks();
  }
});
