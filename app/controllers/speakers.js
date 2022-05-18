import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: '',

  dataService: service('data'),

  actions: {
    deleteSpeaker(speaker) {
      // this.get("dataService").deleteSpeaker(speaker);
      speaker.destroyRecord();
    },

    searchSpeaker(e) {
      e.preventDefault();
      this.set("search", this.get("searchSpeaker"));
      // this.send("reloadPage");
    },
  }
});
