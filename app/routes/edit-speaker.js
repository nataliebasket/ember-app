import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model({ id }) {
    // return this.get("dataService").getSpeaker(id);
    return this.get('store').findRecord('speaker', id);
    // return this.get('store').query('speaker', {search: "Frodo"});
    // return this.get('store').peekRecord('speaker', id);
  },
});
