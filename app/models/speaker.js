import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  patronymic: DS.attr('string'),

  report: DS.belongsTo('report'),
});
