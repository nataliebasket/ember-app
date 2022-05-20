import { computed } from '@ember/object';
import Controller from '@ember/controller';

export const PER_PAGE = 2;

export default Controller.extend({
  queryParams: ['page'],
  page: 1,

  pages: computed('model.meetings.meta.total', function() {
    const total = Number(this.get('model.meetings.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),


});
