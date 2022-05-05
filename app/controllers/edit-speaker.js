import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveSpeaker(speaker) {
      // e.preventDefault();

      await this.get("dataService").updateSpeaker({
        last_name: speaker.last_name,
        first_name: speaker.first_name,
        patronymic: speaker.patronymic,
        id: speaker.id,
          // last_name: this.get('model.last_name'),
          // first_name: this.get('model.first_name'),
          // patronymic: this.get('model.patronymic'),
          // id: this.get('model.id')
        });

      this.transitionToRoute('speakers');
    },

    cancelSaveSpeaker () {
      this.transitionToRoute('speakers');
    }
  }
});
