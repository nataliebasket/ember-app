// import ApplicationSerializer from './application';

// export default ApplicationSerializer.extend({
//   normalize(model, hash) {
//     hash = this._super(...arguments);
//     return hash;
//   },
// });

import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    books: {
      embedded: 'always'
    },
    speakers: {
      embedded: 'always'
    },
  }

});
