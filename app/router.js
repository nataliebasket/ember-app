import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', {path: '/books'});
  this.route('speakers', {path: '/speakers'});
  this.route('404', {path: '*path'});
  this.route('edit-speaker', {path: '/:id/edit-speaker'});
  this.route('edit-book', {path: '/:id/edit-book/'});
  this.route('create-speaker', {path: '/create-speaker'});
  this.route('create-book');
});

export default Router;
