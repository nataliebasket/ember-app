import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  // model({ id }) {
  //   return this.get('store').findRecord('meeting', id);
  // },

  // model( params ) {
  //   console.log(id);
  //   return this.store.findRecord('meeting', params.id, {
  //     include: 'reports'
  //   });
  // }
});
