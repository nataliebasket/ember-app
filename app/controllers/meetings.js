import { computed } from '@ember/object';
import Controller from '@ember/controller';
// import { get, set } from '@ember/object';
// import moment from 'moment';
// import $ from 'jquery';
import { inject as service } from '@ember/service';


export const PER_PAGE = 3;

export default Controller.extend({
  session: service(),
  dataService: service('data'),


  queryParams: ['page', 'speaker', 'book'],
  // queryParams: ['page', 'speaker', 'book', 'dateMeeting'],

  page: 1,
  speaker: '',
  book: '',


  pages: computed('model.meetings.meta.total', function() {
    const total = Number(this.get('model.meetings.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  selectedSpeaker: computed('speaker', function() {
    const speaker = this.get('speaker');
    return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
  }),

  selectedBook: computed('book', function() {
    const book = this.get('book');
    return book ? this.get('model.books').findBy('id', book) : null;
  }),

  actions: {
    changeSpeaker(speaker) {
      this.set('selectedSpeaker', speaker)
      // this.set('speaker', speaker ? speaker.get('id') : '');
    },

    changeBook(book) {
      this.set('selectedBook', book)
      // this.set('book', book ? book.get('id') : '');
    },

    searchMeeting (selectedSpeaker, selectedBook) {
      this.set('speaker', selectedSpeaker ? selectedSpeaker.id : '');
      this.set('book', selectedBook ? selectedBook.id : '');

      // this.set('dateMeeting', dateMeeting ? dateMeeting : '');

      // console.log('dateMeeting');
      console.log(this.get('dateMeeting'));

    },

    changeDateMeeting (dateMeeting) {
      this.set('dateMeeting', dateMeeting);
    }

  }
});
