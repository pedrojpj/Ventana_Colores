define("login",["underscore","backbone","jquery","handlebars","popup","model"],function(e,r,i,o,T,t){var u=r.View.extend({el:i("#contContainer"),initialize:function(){this.render()},events:{"click button":"buttonLogin"},render:function(){if(e){location.reload();var e=!0}var r={},T=i("#loginTemplate").html(),t=o.compile(T),u=t(r);this.$el.html(u);i("#contContainer").css({display:"block"});i(".divLoader").fadeOut("fast")},buttonLogin:function(e){e.preventDefault();var r=i(".login form");validar_formulario(r,e)&&i.ajax({url:url+"login.json",type:"POST",data:r.serialize(),success:function(e){var r=jQuery.parseJSON(e);if(r.result){var r=r.result;cliente=new t.Cliente;cliente.set({id:r.idTienda,usuario:r.login,email:r.email,factor:r.factor});factor=cliente.get("factor");appRouter.navigate("",!0);i(".divLoader").fadeOut("fast");i("#contContainer").fadeOut("fast",function(){i("#contContainer").empty()})}else{popupModel=new t.Popup;popupModel.set("message","El usuario o la contraseña que ha escrito son incorrectos");new T}}})},close:function(){this.undelegateEvents()}});return u});