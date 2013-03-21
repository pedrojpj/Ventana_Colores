define("initialload",["jquery","handlebars","collection","variosColores"],function(e,t,n,r){function i(){calcularAltoScroll(),e("input").bind("focus",function(){e(window).scrollTop(10);var t=e(window).scrollTop()>0;e(window).scrollTop(0),e("#test").append(t?"keyboard ":"nokeyboard ")}),carrito=new n.Carrito,e("#tejido").click(function(){e(".popup-tejidos").fadeIn("300")}),e(".popup-tejidos .btn-cerrar").click(function(){e(".popup-tejidos").fadeOut("300")}),e(".btn-delete").click(function(){e(this).hasClass("activo")?(e("#list-vinilos-comprados .pd").each(function(){e(".uds",this).css({display:"block"}),e(".delete",this).css({display:"none"})}),e(this).removeClass("activo")):(e("#list-vinilos-comprados .pd").each(function(){e(".uds",this).css({display:"none"}),e(".delete",this).css({display:"block"})}),e(this).addClass("activo")),e("span.delete").on("click",function(){var t=e(this).parent().attr("id"),n=e(this).parent().attr("dibujo"),r=e(this).parent().index(),i=r+1;simbolosArray[t].remove(),e("#list-vinilos-comprados .pd:nth-child("+i+")").remove();if(e("#greca"+n).length){var s=e("#greca"+n+" input.medidaGreca").val();s>100?e("#greca"+n+" input.medidaGreca").val(s-100):e("#greca"+n).remove()}var o=carrito.get(t);carrito.remove(o),calcularTotal(),layer.draw()})}),e(".medida_colcha select").change(function(){var t=e(this).val().split("-");calcular_medida(t[0],t[1]),e('input[name="ancho"]').val(t[0]),e('input[name="alto"]').val(t[1]),soporteProducto.set({ancho:t[0],alto:t[1]}),getPrecioSoporte(),e(".pd .name .medida").text(t[0]+"x"+t[1])}),e(".btnErase").on("click",function(){var t=e(this).attr("id"),n=e("#list-vinilos-comprados #"+t).attr("dibujo");simbolosArray[t].remove(),e("#list-vinilos-comprados #"+t).remove();if(e("#greca"+n).length){var r=e("#greca"+n+" input.medidaGreca").val();r>100?e("#greca"+n+" input.medidaGreca").val(r-100):e("#greca"+n).remove()}calcularTotal(),layer.draw(),e(".menuObjetos").css({visibility:"hidden"})}),e(".btnRotate").on("click",function(){var t=e(this).attr("id"),n=parseInt(simbolosArray[t].getRotationDeg()),r=-300,i=simbolosArray[t];i.rotate(Math.PI/r),layer.draw()}),e(".btnColorear").on("click",function(){var t=e(this).attr("dibujo"),n=e(this).attr("id"),i=objetos.listbyId(t);objetoSelected=i.at(0),productoSelected=carrito.get(n),viewVariosColores&&viewVariosColores.close(),viewVariosColores=new r}),e(".btnTexto").on("click",function(){var t=e(this).attr("dibujo"),n=e(this).attr("id");e(".menuObjetos .submenu").transition({top:"30px"}),clearInterval(menuPlay),e("#textoObjeto").val(productoSelected.get("texto")),e("#textoObjeto").on("keyup",function(){var t=e(this).val();simbolosArray[n].setText(t);var r=productoSelected.get("precioUnidad")*t.length;productoSelected.set({precio:r.toFixed(2),texto:t}),layer.draw()}),e("#textoObjeto").on("blur",function(){e(".menuObjetos").css({visibility:"hidden"})})}),e(".container").click(function(t){t.stopPropagation(),e(".popup-open").length&&(e(".popup-content .content").fadeOut("fast"),e(".popup-content .opacity").fadeOut("fast",function(){e(".popup-content").transition({width:"0"},400,"in"),e(".popup-content").removeClass("popup-open")}),e("header h2").transition({x:"90",opacity:0},300,"snap",function(){e("header h2").text("Seleccione el producto que desea diseñar"),e("header h2").transition({x:"0",opacity:1},300,"snap")})),e(".popup-open-help").length&&e(".popup-help").transition({x:"300"},300,"snap",function(){e(".popup-help").removeClass("popup-open-help")})}),t.registerHelper("selected",function(t,n){var r=e('input[name="anchoDefault"]').val(),i=e('input[name="altoDefault"]').val(),s="";return r==t&&i==n&&(s="selected"),s}),t.registerHelper("factor",function(e){var t=e;return factor>0&&(t*=factor),t})}return{initialLoad:i}});