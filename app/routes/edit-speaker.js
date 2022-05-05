import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model({ id }) {
    console.log(id);
    return this.get("dataService").getSpeaker(id);
  },
});
