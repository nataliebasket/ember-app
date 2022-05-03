"use strict";



define('flexberry-ember/app', ['exports', 'flexberry-ember/resolver', 'ember-load-initializers', 'flexberry-ember/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('flexberry-ember/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('flexberry-ember/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('flexberry-ember/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('flexberry-ember/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('flexberry-ember/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('flexberry-ember/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('flexberry-ember/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('flexberry-ember/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('flexberry-ember/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('flexberry-ember/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('flexberry-ember/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('flexberry-ember/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('flexberry-ember/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('flexberry-ember/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('flexberry-ember/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('flexberry-ember/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('flexberry-ember/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('flexberry-ember/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('flexberry-ember/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('flexberry-ember/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('flexberry-ember/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('flexberry-ember/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('flexberry-ember/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('flexberry-ember/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('flexberry-ember/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('flexberry-ember/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('flexberry-ember/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('flexberry-ember/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('flexberry-ember/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('flexberry-ember/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('flexberry-ember/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('flexberry-ember/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('flexberry-ember/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('flexberry-ember/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('flexberry-ember/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('flexberry-ember/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('flexberry-ember/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('flexberry-ember/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('flexberry-ember/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('flexberry-ember/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('flexberry-ember/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('flexberry-ember/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('flexberry-ember/controllers/speakers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    authorize: true
  });
});
define('flexberry-ember/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('flexberry-ember/helpers/app-version', ['exports', 'flexberry-ember/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('flexberry-ember/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('flexberry-ember/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('flexberry-ember/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('flexberry-ember/helpers/get-speaker-fullname', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSpeakerFullname = getSpeakerFullname;
  function getSpeakerFullname(params /*, hash*/) {
    let [last_name, first_name, patronymic] = params;
    return `${last_name} ${first_name} ${patronymic}`;
  }

  exports.default = Ember.Helper.helper(getSpeakerFullname);
});
define('flexberry-ember/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('flexberry-ember/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('flexberry-ember/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('flexberry-ember/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('flexberry-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('flexberry-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('flexberry-ember/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('flexberry-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'flexberry-ember/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('flexberry-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('flexberry-ember/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('flexberry-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('flexberry-ember/initializers/export-application-global', ['exports', 'flexberry-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('flexberry-ember/initializers/load-bootstrap-config', ['exports', 'flexberry-ember/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define("flexberry-ember/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('flexberry-ember/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('flexberry-ember/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('flexberry-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('flexberry-ember/router', ['exports', 'flexberry-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('books', { path: '/books' });
    this.route('speakers', { path: '/speakers' });
    this.route('404', { path: '*path' });
  });

  exports.default = Router;
});
define('flexberry-ember/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('flexberry-ember/routes/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    dataService: Ember.inject.service('data'), //с ипользованием inject получаем нужный сервис

    model() {
      return this.get("dataService").getBooks();
    }
  });
});
define('flexberry-ember/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('flexberry-ember/routes/speakers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    dataService: Ember.inject.service('data'), //с ипользованием inject получаем нужный сервис

    model() {
      return this.get("dataService").getSpeakers();
    }
  });
});
define('flexberry-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('flexberry-ember/services/data', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    getBooks() {
      return fetch('http://localhost:3000/books').then(response => response.json());
    },

    getSpeakers() {
      return fetch('http://localhost:3000/speakers').then(response => response.json());
    }
  });
});
define("flexberry-ember/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6KO3AUGa", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/404image.jpg\"],[10,\"alt\",\"Картинка ошибки загрузки\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/404.hbs" } });
});
define("flexberry-ember/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R4X/Uiw8", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"    \"],[6,\"img\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n      Книжный клуб\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"index.html\"],[8],[0,\"Рабочий стол \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущий)\"],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"meetings.html\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"          Книги\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"          Спикеры\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[0,\"Оставить заявку\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[0,\"Запланировать\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link text-info\"],[10,\"href\",\"register.html\"],[8],[0,\"Регистрация\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"login.html\"],[8],[0,\"Войти\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\\n\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/application.hbs" } });
});
define("flexberry-ember/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D9psuuTk", "block": "{\"symbols\":[\"book\",\"tag\"],\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n      \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить книгу\"],[10,\"type\",\"button\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n            \"],[6,\"input\"],[10,\"class\",\"form-control mr-2 search-long\"],[10,\"placeholder\",\"Найти по полям\"],[10,\"aria-label\",\"Найти по полям\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n            \"],[6,\"input\"],[10,\"class\",\"form-control mr-2\"],[10,\"placeholder\",\"Поиск по тегам\"],[10,\"aria-label\",\"Найти по тегам\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Поиск\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"images/book-cover.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n                \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[21,1,[\"name\"]],false],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n              \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\": \"],[1,[21,1,[\"author\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[21,1,[\"pages\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Теги\"],[9],[0,\":\\n\"],[4,\"each\",[[21,1,[\"tags\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"tag-link\"],[8],[0,\"\\n                    \"],[6,\"span\"],[10,\"class\",\"small\"],[8],[1,[21,2,[]],false],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    Рейтинг:\\n                  \"],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                      \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[21,1,[\"average_rating\"]],\"%;\"]]],[11,\"aria-valuenow\",[27,[[21,1,[\"average_rating\"]]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[21,1,[\"average_rating\"]],false],[0,\"%\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"onclick\",\"javascript:location='edit-book.html'\"],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/books.hbs" } });
});
define('flexberry-ember/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('flexberry-ember/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("flexberry-ember/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GSs4V+Ig", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/error.gif\"],[10,\"alt\",\"Картинка ошибки загрузки\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/error.hbs" } });
});
define("flexberry-ember/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "C+tapx/U", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"meetings.html\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"h3\"],[8],[0,\"Книги\"],[9],[0,\"\\n\\t\\t\\t  \\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/index.hbs" } });
});
define("flexberry-ember/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rO3O7E87", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",\"images/loading.gif\"],[10,\"alt\",\"Картинка загрузки\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/loading.hbs" } });
});
define("flexberry-ember/templates/speakers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c+ggyvN+", "block": "{\"symbols\":[\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"authorize\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"disabled\",\"\"],[10,\"title\",\"Добавить спикера\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить спикера\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"class\",\"form-control mr-2 search-long search-only\"],[10,\"placeholder\",\"ФИО\"],[10,\"aria-label\",\"Спикер\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n\\t\\t\\t\\t  \\t\"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[10,\"src\",\"images/speaker.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t  \\t\\t\"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[26,\"get-speaker-fullname\",[[21,1,[\"last_name\"]],[21,1,[\"first_name\"]],[21,1,[\"patronymic\"]]],null],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"onclick\",\"javascript:location='edit-speaker.html'\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t \\t\"],[9],[0,\"\\n\\t\\t\\t\\t  \\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "flexberry-ember/templates/speakers.hbs" } });
});


define('flexberry-ember/config/environment', [], function() {
  var prefix = 'flexberry-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("flexberry-ember/app")["default"].create({"name":"flexberry-ember","version":"0.0.0+3b369889"});
}
//# sourceMappingURL=flexberry-ember.map
