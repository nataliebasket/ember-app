import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { set } from '@ember/object';

import { PER_PAGE } from '../controllers/meetings';

export default Route.extend({

  setupController(controller/*, model*/) {
    this._super(...arguments);
    set(controller, 'dateMeeting', '');
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    speaker:
    {
      refreshModel: true
    },
    book:
    {
      refreshModel: true
    }
  },


  model({ page, speaker, book }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if (speaker) {
      query.speaker = speaker;
    }

    if (book) {
      query.book = book;
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
    },
  },

});
