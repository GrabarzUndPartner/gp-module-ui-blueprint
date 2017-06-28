"use strict";

import 'pepjs';
import Controller from 'gp-module-base/Controller';
import DomModel from 'gp-module-base/DomModel';

export default Controller.extend({

    modelConstructor: DomModel.extend({
        session: {
        }
    }),

    events: {
    },

    initialize: function() {
        Controller.prototype.initialize.apply(this, arguments);

    }
});
