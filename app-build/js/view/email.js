define("email",["underscore","backbone","jquery","handlebars","model","view"],function(e,t,n,r,i,s){var o=null,u=t.View.extend({el:n("#contContainer"),initialize:function(){this.render()},events:{"click .formEmail button":"sendMail"},render:function(){o=layer.toDataURL({mimeType:"image/jpeg",quality:.9}),n.post("save.php",{data:o},function(e){});var e={total:n("#total").text()};this.$el.attr("class","init").css({overflow:"auto"});var t={carrito:carrito.toJSON(),viasCarrito:viasCarrito.toJSON(),image:o,soporte:soporteProducto.toJSON(),precio:e},i=n("#emailTemplate").html(),s=r.compile(i),u=s(t);this.$el.html(u),n("#contContainer").css({display:"block"})},historyBack:function(e){e.preventDefault()},sendMail:function(e){var t=n("#emailForm");validar_formulario(t,e)&&n.ajax({url:url+"email.php",type:"POST",data:t.serialize()+"&datos="+n(".listEmail").html()+"&image="+o,success:function(e){var t=jQuery.parseJSON(e);t.status&&(popupModel=new i.Popup,popupModel.set("message",t.mensaje),new vPopup)}}),e.preventDefault()},close:function(){this.undelegateEvents()}});return u});