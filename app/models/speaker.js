import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  patronymic: DS.attr('string'),

  reports: DS.hasMany('report')
});
