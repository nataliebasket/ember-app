import { computed } from '@ember/object';
import Controller from '@ember/controller';

export const PER_PAGE = 2;

export default Controller.extend({
  queryParams: ['page', 'speaker'],
  page: 1,
  speaker: '',

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

  actions: {
    changeSpeaker(speaker) {
      this.set('speaker', speaker ? speaker.get('id') : '');
      // console.log(this.get('speaker'));
    }
  }


});
