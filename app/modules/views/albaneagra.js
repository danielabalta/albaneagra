
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
        },

        events:{
            "click #start":"play",
            "click .table span":"guess",
            "click #restart": "restartGame"
        },

        play: function() {
            var start,
                text;
            document.getElementById("ball").style.display = 'none';
            document.getElementById("start").style.display = 'none';
            document.getElementById("restart").style.display = 'none';
            this.start = Math.floor(Math.random() * 3) + 1;

            text = "The ball is being placed under container no. " + this.start + "!";
            document.getElementById("txt").innerHTML = text;
        },

        guess: function(event) {
            var choice,
                arr = [1,2,3],
                target = event.target;

            this.shuffleArray(arr);
            choice = $(target).index();

            if(arr[choice] == this.start) {
                document.getElementById("txt").innerHTML = "Yep, you won!!!!!";
            } else {
                document.getElementById("txt").innerHTML = "Nop, it is under container no. " +
                arr[choice] + " !";
            }

            //this.stop();
            document.getElementById("restart").style.display = 'inline-block';
        },

        shuffleArray: function(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        },

        stop:function () {
           $(this.el).unbind();
        },

        restartGame: function() {
            document.getElementById("ball").style.display = 'inline-block';
            document.getElementById("start").style.display = 'inline-block';
            document.getElementById("restart").style.display = 'none';
            document.getElementById("txt").innerHTML = '';
        }

    });

    return cotainerView;
});
