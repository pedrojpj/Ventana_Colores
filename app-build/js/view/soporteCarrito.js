define("soporteCarrito",["underscore","backbone","handlebars","jquery"],function(e,r,o,i){var T=r.View.extend({el:i("#soportecarritoContainer"),initialize:function(){this.render()},render:function(){if("6"!=localStorage.idSoporte)var e=i("#soportecarritoTemplate").html();else var e=i("#soporteJaponesTemplate").html();var r=o.compile(e),T=r(soporteProducto.toJSON());this.$el.html(T)},close:function(){this.undelegateEvents()}});return T});