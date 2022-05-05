import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('speaker', EmberObject.create());
    this.get('speaker').set('lastName', '');
    this.get('speaker').set('firstName', '');
    this.get('speaker').set('patronymic', '');
  },


  dataService: service('data'),

  actions: {
    async saveSpeaker(speaker) {
      // e.preventDefault();

      await this.get("dataService").createSpeaker({
        last_name: speaker.last_name,
        first_name: speaker.first_name,
        patronymic: speaker.patronymic,
          // last_name: this.get('lastName'),
          // first_name: this.get('firstName'),
          // patronymic: this.get('patronymic'),
        });

      this.transitionToRoute('speakers');
    },

    cancelSaveSpeaker () {
      this.transitionToRoute('speakers');
    }
  }
});
