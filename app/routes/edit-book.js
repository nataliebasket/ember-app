import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// $('input').tagsinput('refresh');


export default Route.extend({
  dataService: service('data'),



  model({ id }) {
    return this.get("dataService").getBook(id);
  }
});


