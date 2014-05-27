
define(['jquery',
        'underscore',
        'backbone'],
function($, _, Backbone){
    "use strict";

    var cotainerView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            var template = _.template($('#container-template').html());
            this.$el.html(template);
        }
    });

    return cotainerView;
});
