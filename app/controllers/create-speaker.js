import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async saveSpeaker(speaker) {
      try {
        const newSpeaker = this.get('store').createRecord('speaker', speaker);

      await newSpeaker.save();

      this.transitionToRoute('speakers');
    }
    catch(e) {
      this.send('error', e)
    }
    },

    cancelSaveSpeaker () {
      this.transitionToRoute('speakers');
    }
  }
});
