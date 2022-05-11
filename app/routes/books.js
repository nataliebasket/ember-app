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
    return (search || tag) ? this.get("dataService").getBooks(search, tag) : this.get("dataService").getBooks();
  }
});
