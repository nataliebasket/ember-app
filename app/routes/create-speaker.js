import Route from '@ember/routing/route';
// import { set } from '@ember/object';
import EmberObject from '@ember/object';
// import { inject as service } from '@ember/service';

export default Route.extend({
  // dataService: service('data'),

  model() {
    return EmberObject.create({
      firstName: '',
      lastName: '',
      patronymic: ''
    });
  }
  // setupController(controller/*, model*/) {
  //   this._super(...arguments);
  //   set(controller, 'lastName', '');
  //   set(controller, 'firstName', '');
  //   set(controller, 'patronymic', '');
  // },

});
