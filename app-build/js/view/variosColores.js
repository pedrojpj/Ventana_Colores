define("variosColores",["underscore","backbone","collection","model"],function(e,t,n,r){var i=t.View.extend({el:$("#bodyContainer"),initialize:function(){this.render()},events:{"click .btn-cerrar":"cerrarPopup"},render:function(){$("#popupVariosColores").removeAttr("style"),$("#popupVariosColores .canvas").empty(),$("#popupVariosColores").css({top:"-2000px",display:"block"}),$("#popupVariosColores").transition({top:"120px"});var e="";for(var t=1;t<=objetoSelected.get("colores");t++)e+="<span id="+t+">zona "+t+"</span>";$("#popupVariosColores .zonas").html(e),drawVariosColores(objetoSelected.get("id"),objetoSelected.get("colores"))},cerrarPopup:function(e){$("#popupVariosColores").transition({top:"-2000px"},function(){$("#popupVariosColores").removeAttr("style"),$("#popupVariosColores .canvas").empty()})},close:function(){this.undelegateEvents()}});return i});