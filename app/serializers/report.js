import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {

    normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },

  extractRelationship(relationshipModelName, relationshipHash) {
    return this._super(...arguments);
  },

  // serialize(snapshot, options) {
  //   let json = this._super(...arguments);
  //   json.type = snapshot.modelName;
  //   return json;
  // }
});
