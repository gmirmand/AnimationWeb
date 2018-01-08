// Declare namespace
var main = main || {};

main.General = function () {
};

main.General.prototype = {
    init: function () {
        AnimationWeb.init();
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    var g = new main.General();
    g.init();
});

//Start
var AnimationWeb;
AnimationWeb = {
    Btntranslate: document.getElementById('translate'),
    Btnrotate: document.getElementById('rotate'),
    Btnscale: document.getElementById('scale'),
    Btnskew: document.getElementById('skew'),
    Btntranslate3d: document.getElementById('translate3d'),
    Btnrotate3d: document.getElementById('rotate3d'),
    target: document.getElementById('target'),
    //Init
    init: function () {
        AnimationWeb.Btntranslate.addEventListener("click", function(){
            AnimationWeb.reset();
            AnimationWeb.translate();
        });
        AnimationWeb.Btnrotate.addEventListener("click", function(){
            AnimationWeb.reset();
            AnimationWeb.rotate();
        });
        AnimationWeb.Btnscale.addEventListener("click", function(){
            AnimationWeb.reset();
            AnimationWeb.scale();
        });
        AnimationWeb.Btnskew.addEventListener("click", function(){
            AnimationWeb.reset();
            AnimationWeb.skew();
        });
        AnimationWeb.Btntranslate3d.addEventListener("click", function(){
            AnimationWeb.reset();
            AnimationWeb.translate3d();
        });
        AnimationWeb.Btnrotate3d.addEventListener("click", function(){
            AnimationWeb.reset();
            AnimationWeb.rotate3d();
        });
    },
    translate: function(){
        console.log('translate');
        AnimationWeb.target.className += " translate";
    },
    rotate: function(){
        console.log('rotate');
        AnimationWeb.target.className += " rotate";
    },
    scale: function(){
        console.log('scale');
        AnimationWeb.target.className += " scale";
    },
    skew: function(){
        console.log('skew');
        AnimationWeb.target.className += " skew";
    },
    translate3d: function(){
        console.log('translate3d');
        AnimationWeb.target.className += " translate3d";
    },
    rotate3d: function(){
        console.log('rotate3d');
        AnimationWeb.target.className += " rotate3d";
    },
    reset: function(){
        AnimationWeb.target.removeAttribute('class');
    }
};