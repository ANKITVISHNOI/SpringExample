(function ( $ ) {
    
$.fn.greenify = function() {
    this.css( "color", "green" );
};
 
$.fn.hotelPlug = function (){    

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
    $(selectRoom + ' .choice-field').on('mouseup', function(){
        return false;
    });
    $(selectRoom).on('mouseup', function(){
        return false;
    });
    $('body').on('mouseup', function(){
        $(selectRoom).removeClass('open');
    });
    $('.can-room-section').on('click', function(){
        $(selectRoom).removeClass('open');
    });
    function updatePer(){
        var totalUp = $(selectRoom).find('input');
        var total = 0;
        totalUp.each(function(){
            total = total + parseInt($(this).val());
        });
        $('.perup').html(total);
    }
    $(selectRoom).on('click' ,'.count-box .addNo' , function(){
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
//                    console.log($(this));
                    if(i < nChild){
                        $(this).addClass('active');
                        i++;
                    }
                });
            };
        }
        updatePer();
    });
    $(selectRoom).on('click' ,'.count-box .subNo' , function(){
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
        $('.roomup').html(i);
    }                                                
    var scrm = $('.multi-rooms');
    var i = $('.multi-rooms .multi-room').size();
    $('.del-room-section').hide();
    $('.add-room-section').on('click', function(){
        if(i<4){
            i++;
            updateRoom(i);
            $('<div class="col-md-3 col-sm-6 multi-room"><div class="count-box"><div class="room-no">Room '+i+'</div><div class="count-adults"><span class="title">Adults<br>(12+)</span><span class="add addNo"><i class="fa fa-plus"></i></span><span class="field"><input id="roomCountInput" type="text" name="adult'+i+'" value="1" disabled></span><span class="sub subNo"><i class="fa fa-minus"></i></span></div><div class="count-child"><span class="title">Children<br>(0 - 11)</span><span class="add addNo"><i class="fa fa-plus"></i></span><span class="field"><input id="roomCountInput" type="text" name="child'+i+'" value="0" disabled></span><span class="sub subNo"><i class="fa fa-minus"></i></span></div><div class="child-age"><div class="select child1"><select name="child-'+i+'-1" class="form-control"><option value="null">---</option><option value="0">&lt;1</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div><div class="select child2"><select name="child-'+i+'-2" class="form-control"><option value="null">---</option><option value="0">&lt;1</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div><div class="select child3"><select name="child-'+i+'-3" class="form-control"><option value="null">---</option><option value="0">&lt;1</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div></div></div></div>').appendTo(scrm);
            console.log('add', i);
            if(i > 1){
                $('.del-room-section').show();
            }
        }
        updatePer();
    });

    $('.del-room-section').on('click', function(){
        if(i != 1){
            $('.multi-rooms .multi-room:last-child').remove();
            i--;
            updateRoom(i);
        }
        if(i == 1){
            $('.del-room-section').hide();
        }
        updatePer();
    })
    
}   
    
    
}( jQuery ))


$( "a" ).greenify();