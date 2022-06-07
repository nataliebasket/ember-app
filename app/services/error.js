import Service from '@ember/service';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Service.extend({
  store: service(),

  async saveError(error) {
    console.log(`Logger: ${error}`);

    let errorIp;

    await $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
      errorIp = data.ipAddress;
    });

    let newError = this.get('store').createRecord('error',
    {
      date: new Date(),
      ip: errorIp,
      url: document.location.href,
      text: error,
    });
    await newError.save();
  },
});
