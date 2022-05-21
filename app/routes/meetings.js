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
    },
    speaker:
    {
      refreshModel: true
    }
  },


  model({ page, speaker }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if (speaker) {
      query.speaker = speaker;
    }

    return RSVP.hash({
      books: this.store.findAll('book'),
      speakers: this.store.findAll('speaker'),
      meetings: this.store.query('meeting', query)
    });

  },

  actions: {
    loading() {
      return false;
    }
  },

});
