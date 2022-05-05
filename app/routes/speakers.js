import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  // queryParams: {
  //   search: true
  // },

  dataService: service('data'), //с ипользованием inject получаем нужный сервис

  model ({ search }) {
    return this.get("dataService").getSpeakers(search);
  }
});
