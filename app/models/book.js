import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  cover_url: DS.attr('string'),
  description_url: DS.attr('string'),
  tags: DS.attr(),
  average_rating: DS.attr('number'),

  reports: DS.hasMany('report')
});
