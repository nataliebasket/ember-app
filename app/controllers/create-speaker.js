import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveSpeaker(e) {
      e.preventDefault();

      await this.get("dataService").createSpeaker({
          last_name: this.get('lastName'),
          first_name: this.get('firstName'),
          patronymic: this.get('patronymic'),
        });

      this.transitionToRoute('speakers');
    },

    cancelSaveSpeaker () {
      this.transitionToRoute('speakers');
    }
  }
});
