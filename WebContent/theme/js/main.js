 $('document').ready(function () {
     
     $('.sidebar-toggle-btn').on('click', function(){
        $('#sidebar').toggleClass('collapesd');
        $('#main-area').toggleClass('shrink');
        $(window).trigger('resize');
         $('.sidebar-logo .sm-logo').toggleClass('hidden');
         $('.sidebar-logo .lg-logo').toggleClass('hidden');
     });
     
     $('.withsub').on('click', function(e){
         if($(this).parent('li').hasClass('open')){
             $(this).parent('li').removeClass('open');
         } else {
             $('.withsub').parent('li').removeClass('open');
             $(this).parent('li').addClass('open');
         }
        e.preventDefault(); 
     });
     
     $('.fa-expand').on('click', function(e){
         e.preventDefault();
        $(this).closest('.pnl').toggleClass('pnl-full');
     });
     
 });
 
 
 $(window).load(function() {
		// Animate loader off screen
		$(".tgi-loader").fadeOut("slow");
	});


	$('document').ready(function () {

		/* var owl = $('.deal-slider');
		 owl.owlCarousel({
	        items: 3, //10 items above 1000px browser width
	        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
	        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
	        itemsTablet: [600, 1], //2 items between 600 and 0
	        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	    });*/
		 
		 
		$(".fbul .fbx").on('mouseup', function(){
			var fbxlist = $(".fbul .fbx").not($(this));
			fbxlist.each(function(){
				if($(this).hasClass('jplist-selected')){
					console.log($(this)[0]);
					$(this)[0].click();
				}
			});
		});
	     $('.form-switch-nav a').on('click',function(e){
	        var flightType = $(this).attr('id');
	        $('.form-switch-nav a').removeClass('active');
	        $(this).addClass('active');
	       /* console.log(flightType);*/
	        $('form.flight-form').attr('class', 'main-form flight-form '+flightType);
	        e.preventDefault();
	        if(flightType == "one-way")
	        	{
	        	$("#flightTripType").val('O');
	        	}
	        else
	        	{
	        	$("#flightTripType").val('R');
	        	}
	        /*alert($("#flightTripType").val());*/ 
	    });
	    
	    $('.bottom-menu-btn').on('click', function(){
	        $('.bottom-nav').toggleClass('open');
	    });
	    $('.top-nav-more-btn').on('click', function(){
	        $('.top-nav-more').toggleClass('open');
	    });
	        
	     $(function() {
	        var lastScrollTop = 0,
	            delta = 5;
	            $(window).scroll(function(event) {
	                var st = $(this).scrollTop();
	                if (st > 80) {
	                    $("header").addClass("shrink");
	                } else {
	                    $("header").removeClass("shrink");
	                }
	            });
	    });
	     
	    // The slider being synced must be initialized first
	  $('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    itemWidth: 150,
	    itemMargin: 5,
	    asNavFor: '#slider',
	    prevText:'<i class="fa fa-caret-left"></i>',
	    nextText:'<i class="fa fa-caret-right"></i>'
	  });
	   
	  $('#slider').flexslider({
//	    animation: "slide",
	    controlNav: false,
	    sync: "#carousel"
	  });
	    
	    $('.filter-btn').on('click', function(){
	        $('.filter-list').toggleClass('open');
	    });
	    
	    $('.more-adv').on('click', function(e){
	        $(this).closest('.traveler-item').children('.adv-fields').toggleClass('open');
	        e.preventDefault();
	    });
	    
	    $('.more-box-btn').on('click', function(e){
	        $(this).closest('.flight-result-item').find('.more-box').toggleClass('open');
	        e.preventDefault();
	    });
	    $('.close-btn').on('click', function(e){
	        $(this).closest('.flight-result-item').find('.more-box').removeClass('open');
	        e.preventDefault();
	    });
	    
	    /*top nav dropdown*/
	    $('.top-nav .dropdown').on('click', function(){
	        $('.top-nav .dropdown ul').toggleClass('open');
	    });
	    
	    /*xs-nav*/
	    $('.xs-nav').on('click', function(){
	        $('.top-nav').toggleClass('open');
	    });
	    
	   /*Flight Choice*/
//	    $('.flight-trav .choice-field').on('click', function(){
//	        $('.flight-trav .flight-people').toggleClass('open');
//	    });
//	    $('.flight-trav .choice-field').on('mouseup', function(){
//	        return false;
//	    });
//	    $('.flight-trav .flight-people').on('mouseup', function(){
//	        return false;
//	    });
//	    $('body').on('mouseup', function(){
//	        $('.flight-trav .flight-people').removeClass('open');
//	    });
//	    $('.flight-trav .ok-btn').on('click', function(){
//	        $('.flight-trav .flight-people').removeClass('open');
//	    });
//	    $('.flight-trav .choice-field').html(totalVal() + " travellers");
//	    $('.flight-trav .flight-people .add').on('click', function(){
//	        totalVal();
//	        if(totalVal() < 9){
//	            var val = $(this).next('.field').children('input').val();
//	            val++;
//	            $(this).next('.field').children('input').val(val);
//	        }
//	        $('.flight-trav .choice-field').html(totalVal() + " travellers");
//	    });
//	    $('.flight-trav .flight-people .sub').on('click', function(){
//	        totalVal();
//	        console.log("total val", totalVal());
//	        if($(this).closest(".req").length>0){
//	            if(totalReqVal() < 2) return;
//	        }
//	        if(totalVal() > 1){
//	            var val = $(this).prev('.field').children('input').val();
//	            if(val > 0){
//	                val--;
//	                $(this).prev('.field').children('input').val(val);
//	            }
//	        }
//	        $('.flight-trav .choice-field').html(totalVal() + " travellers");
//	    });
//	    function totalVal(){
//	        var total = 0;
//	        $('.flight-trav .flight-people .counter').each(function(){
//	            total = total + parseInt($(this).find('input').val());
//	        });
//	        console.log(total);
//	        return(total);
//	    }
//	    function totalReqVal(){
//	        var totalReq = 0;
//	        $('.flight-trav .flight-people .counter.req').each(function(){
//	            totalReq = totalReq + parseInt($(this).find('input').val());
//	        });
//	        console.log('totalReq ' + totalReq);
//	        return(totalReq);
//	    }
	    
	    /*car form functions*/
	    $('.car-type-nav a').on('click',function(e){
	        var flightType = $(this).attr('id');
	        $('.car-type-nav a').removeClass('active');
	        $(this).addClass('active');
	        console.log(flightType);
	        $('form.flight-cars-form').attr('class', 'flight-cars-form main-form '+flightType);
	        e.preventDefault();
	    });
	    
	    /*car form functions*/
	    $('.car-type-nav a').on('click',function(e){
	        var flightType = $(this).attr('id');
	        $('.car-type-nav a').removeClass('active');
	        $(this).addClass('active');
	        console.log(flightType);
	        $('form.cars-form').attr('class', 'cars-form '+flightType);
	        e.preventDefault();
	    });
	    
	    $('.car-option-box .car-options-select').on('click', function(){
	        $('.car-options').toggleClass('open');
	    });
	    $('.car-option-box .car-options-select').on('mouseup', function(){
	        return false;
	    });
	    $('.car-options').on('mouseup', function(){
	        return false;
	    });
	    $('body').on('mouseup', function(){
	        $('.car-options').removeClass('open');
	    });
	    
	    /*hotel form function*/
	    
	    $('.hotel-rooms .choice-field').on('click', function(){
	        $('.room-numbers').toggleClass('open');
	    });
	    $('.hotel-rooms .choice-field').on('mouseup', function(){
	        return false;
	    });
	    $('.room-numbers').on('mouseup', function(){
	        return false;
	    });
	    $('body').on('mouseup', function(){
	        $('.room-numbers').removeClass('open');
	    });
	    $('.hotel-rooms .ok-btn').on('click', function(){
	        $('.room-numbers').removeClass('open');
	    });
	    
	    
	    var noRoom = $('#roomCountInput'),
	        noGuest = $('#guestCountInput'),
	        guestLabel = $('.guest-label'),
	        rVal,
	        gVal;
	    
	    function updateGuestBox(R, G){
	        guestLabel.html(R +' room '+G+' guests ');
	        $('.room-count input').val(R);
	        $('.guest-count input').val(G);
	    }
	    
	    updateGuestBox(noRoom.val(), noGuest.val());
	    
	    $('.room-count .addNo').on('click', function(){
	        rVal = parseInt(noRoom.val());
	        gVal = parseInt(noGuest.val());
	        if(rVal<8){
	            if(rVal<gVal){
	                updateGuestBox(++rVal, gVal);
	            }
	            if(rVal>=gVal){
	                updateGuestBox(++rVal, ++gVal);
	            }
	        }
	    });
	    
	    $('.guest-count .addNo').on('click', function(){
	        rVal = parseInt(noRoom.val());
	        gVal = parseInt(noGuest.val());
	        if(gVal<32){
	            if((gVal/rVal)>=4){
	                updateGuestBox(++rVal, ++gVal);
	            } else {
	                updateGuestBox(rVal, ++gVal);
	            }
	        }
	    });
	    
	    $('.room-count .subNo').on('click', function(){
	        rVal = parseInt(noRoom.val());
	        gVal = parseInt(noGuest.val());
	        if(rVal<=8 && rVal>1){
	            if((--rVal*4)<gVal){
	                updateGuestBox(rVal, rVal*4);
	            } else {
	                updateGuestBox(rVal, gVal);
	            }
	        }
	    });
	    
	    $('.guest-count .subNo').on('click', function(){
	        rVal = parseInt(noRoom.val());
	        gVal = parseInt(noGuest.val());
	        if(gVal<=32 && gVal>1){
	            if(gVal<=rVal){
	                updateGuestBox(--rVal, --gVal);
	            } else {
	                updateGuestBox(rVal, --gVal);
	            }
	        }
	    });
	    
	    
	    $('.address .map').on('click', function(e){
	        $(this).next('.map-contain').toggleClass('open');
	        e.preventDefault();
	    });
	    
	    
	    
	    
	    
	    
	hotelPlug('.hotel-rooms1','.hotel-count1');    
	hotelPlug('.hotel-rooms2','.hotel-count2');    
	hotelPlug('.hotel-rooms3','.hotel-count3');
	hotelPlug('.hotel-rooms4','.hotel-count4');
	 
	function hotelPlug(selectRoom, selectCount){    

	    function getCount(elem){
	        var total = 0;
	        elem.find('input').each(function(){
	            total = total + parseInt($(this).val());
	        })
	        return total;
	    }
	    $(selectRoom).on('click', function(){
	        $(selectCount).toggleClass('open');
	        updatePer();
	    })
	    $(selectCount + ' .choice-field').on('mouseup', function(){
	        return false;
	    });
	    $(selectCount).on('mouseup', function(){
	        return false;
	    });
	    $('body').on('mouseup', function(){
	        $(selectCount).removeClass('open');
	    });
	    $(selectCount + ' .can-room-section').on('click', function(){
	        $(selectCount).removeClass('open');
	    });
	    function updatePer(){
	        var totalUp = $(selectCount).find('input');
	        var total = 0;
	        totalUp.each(function(){
	            total = total + parseInt($(this).val());
	        });
	        $(selectRoom+' #guestCount').val(total);
	        $(selectRoom+' .perup').html(total);
	    }
	    $(selectCount).on('click' ,'.count-box .addNo' , function(){
	        var box = $(this).closest('.count-box');
	        var total = getCount(box);
	        if(total < 4){
	            var oldVal = parseInt($(this).next('.field').find('input').val());
	            var newVal = oldVal + 1;
	            $(this).next('.field').find('input').val(newVal);
	            if($(this).parent().hasClass('count-child')){
	                var nChild = parseInt($(this).parent().find('input').val());
	                var ageArr = $(this).parent().closest('.count-box').children('.child-age').find('.select');
	                var i = 0;
	                ageArr.each(function(){
//	                    console.log($(this));
	                    if(i < nChild){
	                        $(this).addClass('active');
	                        i++;
	                    }
	                });
	            };
	        }
	        updatePer();
	    });
	    $(selectCount).on('click' ,'.count-box .subNo' , function(){
	        if($(this).parent().hasClass('count-adults')){
	            var oldVal = parseInt($(this).prev('.field').find('input').val());
	            if(oldVal >= 2){
	                console.log('substract');
	                newVal = oldVal - 1;
	                $(this).prev('.field').find('input').val(newVal);
	            }
	        } else {
	            var oldVal = parseInt($(this).prev('.field').find('input').val());
	            if(oldVal >= 1){
	                var ageArr = $(this).parent().closest('.count-box').children('.child-age').find('.select');
	                newVal = oldVal - 1;
	                console.log('newval', newVal);
	                var i = 0;
	                ageArr.each(function(){
	                    if(i == newVal){
	                        $(this).removeClass('active').find('select').val('null');
	                    }
	                    i++;
	                })           
	                
	                $(this).prev('.field').find('input').val(newVal);
	            }
	        }
	        updatePer();
	    });
	    function updateRoom(i){
	        $(selectRoom+' .roomup').html(i);
	        $(selectRoom+' #numberOfRooms').val(i);
	    }                                                
	    var scrm = $(selectCount+' .multi-rooms');
	    var i = $(selectCount+' .multi-rooms .multi-room').size();
	    $(selectCount + ' .del-room-section').hide();
	    $(selectCount + ' .add-room-section').on('click', function(){
	        if(i<4){
	            i++;
	            updateRoom(i);
	            $('<div class="col-md-3 col-sm-6 multi-room"><div class="count-box"><div class="room-no">Room '+i+'</div><div class="count-adults"><span class="title">Adults<br>(12+)</span><span class="add addNo"><i class="fa fa-plus"></i></span><span class="field"><input id="roomCountInput" type="text" name="adult'+i+'" value="1"></span><span class="sub subNo"><i class="fa fa-minus"></i></span></div><div class="count-child"><span class="title">Children<br>(0 - 11)</span><span class="add addNo"><i class="fa fa-plus"></i></span><span class="field">'+
	            		'<input id="roomCountInput" type="text" name="child'+i+'" value="0"></span><span class="sub subNo"><i class="fa fa-minus"></i></span></div><div class="child-age"><div class="select child1">'+
	            		'<select name="childAge'+i+'1" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div><div class="select child2">'+
	            		'<select name="childAge'+i+'2" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>'+
	            		'<div class="select child3"><select name="childAge'+i+'3" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></div></div></div>').appendTo(scrm);
	            console.log('add', i);
	            if(i > 1){
	                $(selectCount + ' .del-room-section').show();
	            }
	        }
	        updatePer();
	    });

	    $(selectCount + ' .del-room-section').on('click', function(){
	        if(i != 1){
	            $(selectCount+' .multi-rooms .multi-room:last-child').remove();
	            i--;
	            updateRoom(i);
	        }
	        if(i == 1){
	            $(selectCount+' .del-room-section').hide();
	        }
	        updatePer();
	    })
	    
	}
	    
	    
	    
	});

	function travlist(item){
	    $(item + ' .choice-field').on('click', function(){
	        $(item + ' .flight-people').toggleClass('open');
	    });
	    $(item + ' .choice-field').on('mouseup', function(){
	        return false;
	    });
	    $(item + ' .flight-people').on('mouseup', function(){
	        return false;
	    });
	    $('body').on('mouseup', function(){
	        $(item + ' .flight-people').removeClass('open');
	    });
	    $(item + ' .ok-btn').on('click', function(){
	        $(item + ' .flight-people').removeClass('open');
	    });
	    $(item + ' .choice-field').html(totalVal() + " travellers");
	    $(item + ' .flight-people .add').on('click', function(){
	        totalVal();
	        if(totalVal() < 9){
	            var val = $(this).next('.field').children('input').val();
	            val++;
	            $(this).next('.field').children('input').val(val);
	        }
	        $(item + ' .choice-field').html(totalVal() + " travellers");
	    });
	    $(item + ' .flight-people .sub').on('click', function(){
	        totalVal();
	        console.log("total val", totalVal());
	        if($(this).closest(".req").length>0){
	            if(totalReqVal() < 2) return;
	        }
	        if(totalVal() > 1){
	            var val = $(this).prev('.field').children('input').val();
	            if(val > 0){
	                val--;
	                $(this).prev('.field').children('input').val(val);
	            }
	        }
	        $(item + ' .choice-field').html(totalVal() + " travellers");
	    });
	    function totalVal(){
	        var total = 0;
	        $(item + ' .flight-people .counter').each(function(){
	            total = total + parseInt($(this).find('input').val());
	        });
	        console.log(total);
	        return(total);
	    }
	    function totalReqVal(){
	        var totalReq = 0;
	        $(item + ' .flight-people .counter.req').each(function(){
	            totalReq = totalReq + parseInt($(this).find('input').val());
	        });
	        console.log('totalReq ' + totalReq);
	        return(totalReq);
	    }
	}

	
	function tgi_date(item){
	    var nowDate = new Date();
	    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
	    var checkout = $(item + ' .date2').datepicker({
	            autoclose: true, format: "mm-dd-yyyy",
	            orientation: "bottom auto",
	        }).on('changeDate', function(event) {
	            var newDate = new Date(event.date)
	            var nowret = moment(newDate).format('MMM DD YYYY');
	            console.log('moment', nowret);
	            $(item + ' .date2').nextAll('.show_date_to_user').css("display","inline-block").html(nowret);
	        });
	    $(item + ' .date1').css("color","transparent");
	    $(item + ' .date2').css("color","transparent");
	    
	    $(item + ' .date2').attr('disabled', 'disabled');
	    $(item + ' .date1').after('<div class="show_date_to_user"></div>');
	    $(item + ' .date2').after('<div class="show_date_to_user"></div>');
	    $(item).on('focus',".date1", function(){
	        $(this).datepicker({
	            autoclose: true,
	            startDate: today,
	            todayBtn: "linked",
	            format: "mm-dd-yyyy",
	            todayHighlight: true,
	            startDate: "+1d",
	            orientation: "bottom auto",
	        }).on('changeDate', function(event){
	            $(item + ' .date2').removeAttr('disabled');
	            var newDate = new Date(event.date);
	            
	            var nowdep = moment(newDate).format('MMM DD YYYY');
	            $(this).nextAll('.show_date_to_user').css("display","inline-block").html(nowdep);
	            
	            newDate.setDate(newDate.getDate() + 2);
	            checkout.datepicker("setStartDate", event.date);
	            
	            var nowret = moment(newDate).format('MMM DD YYYY');
	            console.log('moment', nowret);
	            $(item + ' .date2').nextAll('.show_date_to_user').css("display","inline-block").html(nowret);
	            
	            checkout.datepicker("update", newDate);
	           if( $(item + ' .date2')[0]!=undefined)
	            $(item + ' .date2')[0].focus();  
	        });
	    });
	}

	
	
	travlist('.travlist1');
	travlist('.travlist2');


	$('.tgi-date').after('<div class="show_date_to_user"></div>');
	$('body').on('focus',".tgi-date", function(){
	    $(this).datepicker({
	        format: "yyyy-dd-mm",
	        autoclose: true
	    }).on('changeDate', function(event){
	        var newDate = new Date(event.date);
	        var nowdep = moment(newDate).format('MMM DD YYYY');
	        $(this).nextAll('.show_date_to_user').css("display","inline-block").html(nowdep);
	    });
	});

	$('.tgi-dob').after('<div class="show_date_to_user"></div>');
	$('body').on('focus',".tgi-dob", function(){
	    $(this).datepicker({
	        format: "yyyy-dd-mm",
	        autoclose: true,
	        endDate: "today"
	    }).on('changeDate', function(event){
	        var newDate = new Date(event.date);
	        var nowdep = moment(newDate).format('MMM DD YYYY');
	        $(this).nextAll('.show_date_to_user').css("display","inline-block").html(nowdep);
	    });
	});

	$('.tgi-pass').after('<div class="show_date_to_user"></div>');
	$('body').on('focus',".tgi-pass", function(){
	    $(this).datepicker({
	        format: "yyyy-dd-mm",
	        autoclose: true,
	        startDate: "today"
	    }).on('changeDate', function(event){
	        var newDate = new Date(event.date);
	        var nowdep = moment(newDate).format('MMM DD YYYY');
	        $(this).nextAll('.show_date_to_user').css("display","inline-block").html(nowdep);
	    });
	});


	/* from tours */
	$('document').ready(function(){
		
	   function hotelPlugV(selectRoom, selectCount){    

	    function getCount(elem){
	        var total = 0;
	        elem.find('input').each(function(){
	            total = total + parseInt($(this).val());
	        })
	        return total;
	    }
	    $(selectRoom).on('click', function(){
	        $(selectCount).toggleClass('open');
	        updatePer();
	    })
	    $(selectCount + ' .choice-field').on('mouseup', function(){
	        return false;
	    });
	    $(selectCount).on('mouseup', function(){
	        return false;
	    });
	    $('body').on('mouseup', function(){
	        $(selectCount).removeClass('open');
	    });
	    $(selectCount + ' .can-room-section').on('click', function(){
	        $(selectCount).removeClass('open');
	    });
	    function updatePer(){
	        var totalUp = $(selectCount).find('input');
	        var total = 0;
	        totalUp.each(function(){
	            total = total + parseInt($(this).val());
	        });
	        $(selectRoom+' #guestCount').val(total);
	        $(selectRoom+' .perup').html(total);
	    }
	    $(selectCount).on('click' ,'.count-box .addNo' , function(){
	        var box = $(this).closest('.count-box');
	        var total = getCount(box);
	        if(total < 4){
	            var oldVal = parseInt($(this).next('.field').find('input').val());
	            var newVal = oldVal + 1;
	            $(this).next('.field').find('input').val(newVal);
	            if($(this).parent().hasClass('count-child')){
	                var nChild = parseInt($(this).parent().find('input').val());
	                var ageArr = $(this).parent().closest('.count-box').children('.child-age').find('.select');
	                var i = 0;
	                ageArr.each(function(){
//	                    console.log($(this));
	                    if(i < nChild){
	                        $(this).addClass('active');
	                        i++;
	                    }
	                });
	            };
	        }
	        updatePer();
	    });
	    $(selectCount).on('click' ,'.count-box .subNo' , function(){
	        if($(this).parent().hasClass('count-adults')){
	            var oldVal = parseInt($(this).prev('.field').find('input').val());
	            if(oldVal >= 2){
	                console.log('substract');
	                newVal = oldVal - 1;
	                $(this).prev('.field').find('input').val(newVal);
	            }
	        } else {
	            var oldVal = parseInt($(this).prev('.field').find('input').val());
	            if(oldVal >= 1){
	                var ageArr = $(this).parent().closest('.count-box').children('.child-age').find('.select');
	                newVal = oldVal - 1;
	                console.log('newval', newVal);
	                var i = 0;
	                ageArr.each(function(){
	                    if(i == newVal){
	                        $(this).removeClass('active').find('select').val('null');
	                    }
	                    i++;
	                })           
	                
	                $(this).prev('.field').find('input').val(newVal);
	            }
	        }
	        updatePer();
	    });
	    function updateRoom(i){
	        $(selectRoom+' .roomup').html(i);
	        $(selectRoom+' #numberOfRooms').val(i);
	    }                                                
	    var scrm = $(selectCount+' .multi-rooms');
	    var i = $(selectCount+' .multi-rooms .multi-room').size();
	    $(selectCount + ' .del-room-section').hide();
	    $(selectCount + ' .add-room-section').on('click', function(){
	        if(i<3){
	            i++;
	            updateRoom(i);
	            $('<div class="xx multi-room"><div class="count-box"><div class="room-no">Room '+i+'</div><div class="count-adults"><span class="title">Adults<br>(12+)</span><span class="add addNo"><i class="fa fa-plus"></i></span><span class="field"><input id="roomCountInput" type="text" name="adult'+i+'" value="1"></span><span class="sub subNo"><i class="fa fa-minus"></i></span></div><div class="count-child"><span class="title">Children<br>(0 - 11)</span><span class="add addNo"><i class="fa fa-plus"></i></span><span class="field">'+
	            		'<input id="roomCountInput" type="text" name="child'+i+'" value="0"></span><span class="sub subNo"><i class="fa fa-minus"></i></span></div><div class="child-age"><div class="select child1">'+
	            		'<select name="childAge'+i+'1" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div><div class="select child2">'+
	            		'<select name="childAge'+i+'2" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>'+
	            		'<div class="select child3"><select name="childAge'+i+'3" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></div></div></div>').appendTo(scrm);
	            console.log('add', i);
	            if(i > 1){
	                $(selectCount + ' .del-room-section').show();
	            }
	        } else {
	            alert("Only 3 Rooms can be selected");
	        }
	        updatePer();
	    });

	    $(selectCount + ' .del-room-section').on('click', function(){
	        if(i != 1){
	            $(selectCount+' .multi-rooms .multi-room:last-child').remove();
	            i--;
	            updateRoom(i);
	        }
	        if(i == 1){
	            $(selectCount+' .del-room-section').hide();
	        }
	        updatePer();
	    })
	    
	}
	    
	    hotelPlugV('.hotel-rooms-v','.hotel-count-v');  
	    
	});



	//jQuery is required to run this code
	$( document ).ready(function() {

	  scaleVideoContainer();

	  initBannerVideoSize('.video-container .poster img');
	  initBannerVideoSize('.video-container .filter');
	  initBannerVideoSize('.video-container video');

	  $(window).on('resize', function() {
	      scaleVideoContainer();
	      scaleBannerVideoSize('.video-container .poster img');
	      scaleBannerVideoSize('.video-container .filter');
	      scaleBannerVideoSize('.video-container video');
	  });

	});

	function scaleVideoContainer() {

	  var height = $(window).height() + 5;
	  var unitHeight = parseInt(height) + 'px';
	  $('.homepage-hero-module').css('height',unitHeight);

	}

	function initBannerVideoSize(element){

	  $(element).each(function(){
	      $(this).data('height', $(this).height());
	      $(this).data('width', $(this).width());
	  });

	  scaleBannerVideoSize(element);

	}

	function scaleBannerVideoSize(element){

	  var windowWidth = $(window).width(),
	  windowHeight = $(window).height() + 5,
	  videoWidth,
	  videoHeight;

	  console.log(windowHeight);

	  $(element).each(function(){
	      var videoAspectRatio = $(this).data('height')/$(this).data('width');

	      $(this).width(windowWidth);

	      if(windowWidth < 1000){
	          videoHeight = windowHeight;
	          videoWidth = videoHeight / videoAspectRatio;
	          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

	          $(this).width(videoWidth).height(videoHeight);
	      }

	      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	  });
	}

	
	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
	elems.forEach(function(html) {
		var switchery = new Switchery(html, {
			size: 'small',
			color: '#fff',
			secondaryColor: '#333',
			jackColor: '#05a6cc',
			jackSecondaryColor: '#fff'
		});
	});
	function createSelectBoxFromUrl(itemId,listId,firstOptionName,url)
	{
	$('#'+listId)
    .find('option')
    .remove()
    .end()
    .append('<option value="">'+firstOptionName+'</option>')
    .val('');
	
		var itemValue = $("#"+itemId).val();
		$.ajax({
		 	url: url+"="+itemValue,
			type: "GET",
			 success: function(response)
			 {
				$.each(response, function(index,value)
				{
				console.debug(value.city);
				$('#'+listId).append(new Option(value.city, value.city));
				});
		        }
			});
	}
	


	function spysr_date_custom_plugin(container,date1,date2,dateFormat,showDateFormat,date1Show,date2Show){
		var containerObj = '.'+container;
	    var nowDate = new Date();
//	    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 10, 0, 0, 0);
	    var checkout = $(containerObj + ' .'+date2).datepicker({
	            autoclose: true, format: dateFormat,//yyyy-mm-dd
	            keyboardNavigation: true,
	            orientation: "bottom auto"
	        }).on('changeDate', function(event) {
	            var newDate = new Date(event.date);
	            var nowret = moment(newDate).format(showDateFormat);//'MMM DD YYYY');
	            console.log('moment', nowret);
	            $(containerObj + ' .'+date2).nextAll('.show_date_to_user').css("display","inline-block").html(nowret);
	        });
		    $(containerObj + ' .'+date1).css("color","transparent");
		    $(containerObj + ' .'+date2).css("color","transparent");
		    
		    $(containerObj + ' .'+date2).attr('disabled', 'disabled');
		    $(containerObj + ' .'+date1).after('<div class="show_date_to_user"></div>');
		    $(containerObj + ' .'+date2).after('<div class="show_date_to_user"></div>');
		    $(containerObj).on('focus',"."+date1, function(){
	        $(this).datepicker({
	            autoclose: true,
	            startDate: '-3y',
	            todayBtn: "linked",
	            format: dateFormat,//yyyy-mm-dd
	            todayHighlight: true,
	            keyboardNavigation: true,
	            //startDate: "+1d",
	            orientation: "bottom auto"
	        }).on('changeDate', function(event){
	            $(containerObj + ' .'+date2).removeAttr('disabled');
	            var newDate = new Date(event.date);
	            
	            var nowdep = moment(newDate).format(showDateFormat);//'MMM DD YYYY');
	            $(this).nextAll('.show_date_to_user').css("display","inline-block").html(nowdep);
	            
	            newDate.setDate(newDate.getDate() + 2);
	            checkout.datepicker("setStartDate", event.date);
	            
	            var nowret = moment(newDate).format(showDateFormat);//'MMM DD YYYY');
	            console.log('moment', nowret);
	            $(containerObj + ' .'+date2).nextAll('.show_date_to_user').css("display","inline-block").html(nowret);
	            
	            checkout.datepicker("update", newDate);
	           if( $(containerObj + ' .'+date2)[0]!=undefined)
	            $(containerObj + ' .'+date2)[0].focus();  
	        });
	    });
		if(date1Show!=null && date1Show!=undefined && date1Show!=="")
		{
			$(containerObj + ' .'+date1).nextAll('.show_date_to_user').css("display","inline-block").html(date1Show);
		}
		if(date2Show!=null && date2Show!=undefined && date2Show!=="")
		{
			$(containerObj + ' .'+date2).nextAll('.show_date_to_user').css("display","inline-block").html(date2Show);
			$(containerObj + ' .'+date2).removeAttr('disabled');
		}
		    
	}
	