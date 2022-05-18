import DS from 'ember-data';

export default DS.Model.extend({
  date:DS.attr('date-string'),
  book_progress: DS.attr('number'),
  url_presentation: DS.attr('string'),
  url_video: DS.attr('string'),

  meetings: DS.hasMany('meeting'),
  books: DS.hasMany('book'),
  speakers: DS.hasMany('speaker')
});
