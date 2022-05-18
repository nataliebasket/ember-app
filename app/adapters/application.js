import DS from 'ember-data';
import ENV from 'flexberry-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments);
    // if (modelName === 'speaker' && requestType === 'findRecord' && id) {
    //   url += '?_embed=books';
    // }

    // if (modelName === 'book' && requestType === 'findRecord' && id) {
    //   url += '?_embed=speakers';
    // }

    if (modelName === 'report' && requestType === 'findAll') {
      url += '?_embed=books&_embed=speakers';
    }

    return url;
  }
});
