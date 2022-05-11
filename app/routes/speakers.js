import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'), //с ипользованием inject получаем нужный сервис

  queryParams: {
    search: {
      refreshModel: true,
    }
  },

  // actions: {
  //   reloadPage() {
  //     this.refresh();
  //   },
  // },

  model ({ search }) {
    // console.log(search);
    return search ? this.get("dataService").getSpeakers(search) : this.get("dataService").getSpeakers();
  }
});
