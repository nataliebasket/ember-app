import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: '',
  dataService: service('data'),

  authorize: false,

  actions: {
    deleteSpeaker(speaker) {
      this.get("dataService").deleteSpeaker(speaker);
    },

    searchSpeaker(e) {
      e.preventDefault();

      this.refresh();
    }
  }
});
