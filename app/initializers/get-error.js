import SaveError from '../services/error';


export function initialize(application) {
  application.register('logger:error', SaveError)// регистрация новой фабрики
  application.inject('controller', 'applicationError', 'logger:error');
  application.inject('route', 'applicationError', 'logger:error');
  application.inject('component', 'applicationError', 'logger:error');

}

export default {
  initialize
};
