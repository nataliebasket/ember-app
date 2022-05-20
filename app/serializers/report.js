import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    meetings: {
      // embedded: 'always'
      serialize: 'records',
      deserialize: 'records'
    },
    books: {
      // embedded: 'always'
      serialize: 'records',
      deserialize: 'records'
    },
    speakers: {
      // embedded: 'always'
      serialize: 'ids',
      deserialize: 'records'
    }
  },

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
