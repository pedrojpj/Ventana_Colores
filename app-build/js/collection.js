define(["underscore","backbone","model"],function(e,t,o){var i=t.Collection.extend({model:o.Soporte}),r=t.Collection.extend({model:o.Via}),n=t.Collection.extend({model:o.Objeto,listbyCategory:function(e){filtered=this.filter(function(t){return t.get("categoria")===e});return new n(filtered)},listbyId:function(e){filtered=this.filter(function(t){return t.get("id")===e});return new n(filtered)}}),l=t.Collection.extend({model:o.Categoria}),a=t.Collection.extend({model:o.Tejido}),d=t.Collection.extend({model:o.Producto}),c=t.Collection.extend({model:o.SoporteProducto}),C=t.Collection.extend({model:o.ViaProducto,initialize:function(){this.on("change",this.reCalcular,this)},reCalcular:function(){if(viasCarrito&&viasCarrito.length>0)for(var e=0,t=0;viasCarrito.length>t;t++){var o=viasCarrito.at(t);e++;var i=$("#viaeditTemplate").html(),r=Handlebars.compile(i),n=r(o.toJSON());$(".via"+e).html(n)}}});return{Soportes:i,Vias:r,Objetos:n,Categorias:l,Tejidos:a,SoporteCarrito:c,ViaCarrito:C,Carrito:d}});