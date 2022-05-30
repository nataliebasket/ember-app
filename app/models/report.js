import DS from 'ember-data';

export default DS.Model.extend({
  dateMeeting:DS.attr('date-string'),
  points: DS.attr('number'),
  url_presentation: DS.attr('string'),
  url_video: DS.attr('string'),

  meeting: DS.belongsTo('meeting'),
  speaker: DS.belongsTo('speaker'),
  book: DS.belongsTo('book'),
});
