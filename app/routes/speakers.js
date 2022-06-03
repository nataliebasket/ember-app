import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// export default Route.extend(AuthenticatedRouteMixin, {
export default Route.extend({
  dataService: service('data'), //с ипользованием inject получаем нужный сервис

  queryParams: {
    search: {
      refreshModel: true,
    }
  },

  model ({ search }) {
    return this.get('store').query('speaker', {q: search});
  },

  setupController(controller, model) {
    this._super(...arguments);
  },

  actions: {
    loading(transition, originRoute) {
      return false;
    }
  }

});
