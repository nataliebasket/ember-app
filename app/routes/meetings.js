import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { PER_PAGE } from '../controllers/meetings';

export default Route.extend({

  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },


  model({ page }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };


    return RSVP.hash({
      books: this.store.findAll('book'),
      speakers: this.store.findAll('speaker'),
      meetings: this.store.query('meeting', query)
    });

    // return this.get('store').query('meeting', query);
  },

  actions: {
    loading() {
      return false;
    }
  },

  // dataService: service('data'),
  // model() {
  //   return this.get('store').findAll ('meeting');
  // }

});
