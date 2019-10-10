$( document ).ready(function() {
	var orders = [],
		count = 0;

	$(".selection ul li").on("click", function(){
		$(".selection ul li").removeClass("active");
		$(this).addClass("active");
		var size = $(this).text();
		$(".selected").text(size);
	});

	$("#add2cart").on("click", function(){
		if($(".selected").text() == ""){
			alert("No size selected");
		}else{
			var size = $(".selected").text();
			var prodName = $(".product-name").text();
			var prodAmt = $(".prize").text();

			var order = {};
			order.size = size;
			order.name = prodName;
			order.prodAmt = prodAmt;

			orders.push(order)

			count++;
			$(".qty").text("(" + count + ")");

			displayMyCart(orders);
		}

	});

	function displayMyCart(orders){

		var sizes = orders.map((size, index) => {
			return orders[index].size;
		});

		countSizes(sizes);
	}

	function countSizes(sizes) {

		$(".selected-product").empty();

		var str = "";
	    sizes.sort();

	    var current = null;
	    var cnt = 0;
	    for (var i = 0; i < sizes.length; i++) {
	        if (sizes[i] != current) {
	            if (cnt > 0) {
	               str += displayOrder(current, cnt);
	            }
	            current = sizes[i];
	            cnt = 1;
	        } else {
	            cnt++;
	        }
	    }
	    if (cnt > 0) {
	        str += displayOrder(current, cnt);
	    }
	   $(".selected-product").append(str);
	}

	function displayOrder(current, cnt){
		var str = '<li>' +
				'<div class="cart-img">' +
					'<img src="images/classic-tee.jpg">' +
				'</div>' +
				'<div class="cart-desc">' +
					'<p>Classic Tee</p>' +
					'<p>' +
						'<span>'+ cnt +'</span>x ' +
						'<b>$75.00</b>' +
					'</p>' +
					'<p>' +
						'Size: <span >'+ current +'</span>' +
					'</p>' +
				'</div>	' +
			'</li>';

		return str;
	}
});

