import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'), //с ипользованием inject получаем нужный сервис

  model () {
    return this.get("dataService").getBooks();
  }
});
