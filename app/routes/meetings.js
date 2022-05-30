import Route from '@ember/routing/route';
import RSVP from 'rsvp';
// import { get } from '@ember/object';
// import moment from 'moment';


import { PER_PAGE } from '../controllers/meetings';

export default Route.extend({

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
    },
    dateMeeting:
    {
      refreshModel: true
    },
  },


  model({ page, speaker, book, dateMeeting}) {
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

    if (dateMeeting) {
      // console.log(`${moment(dateMeeting).format('YYYY-MM-DD')}T00:00:00.000Z`);
      console.log(dateMeeting);

      console.log('12345');
    }

    return RSVP.hash({
      books: this.store.findAll('book'),
      speakers: this.store.findAll('speaker'),
      meetings: this.store.query('meeting', query)
    });

  },

  // setupController(controller, model) {
  //   this._super(...arguments);
  //   // if (this.get('modelPromise')) {
  //   //   controller.set('isLoading', true);
  //   // }
  // },

  actions: {
    loading() {
      return false;
    },
  },

});
