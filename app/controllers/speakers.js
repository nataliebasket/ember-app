import Controller from '@ember/controller';
import { debounce } from '@ember/runloop';

export default Controller.extend({

  queryParams: ["search"],
  search: '',

  actions: {
    deleteSpeaker(speaker) {
      speaker.destroyRecord();
    },

    searchSpeaker() {
      debounce(() => {
        this.set("search", this.get("searchSpeaker"));
      }, 2000);
    }
  },
});
