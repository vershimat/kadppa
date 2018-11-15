$(document).foundation()
// closes the panel on click outside
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.removeClass('is-active');
      }
  });
  
//More (Expand) or Less (Collapse)
$('.categories-menu.menu.nested').each(function(){
    var filterAmount = $(this).find('li').length;
    if( filterAmount > 5){    
      $('li', this).eq(4).nextAll().hide().addClass('toggleable');
      $(this).append('<li class="more">More</li>');    
    }  
  });
  
  $('.categories-menu.menu.nested').on('click','.more', function(){
    if( $(this).hasClass('less') ){    
      $(this).text('More').removeClass('less');    
    }else{
      $(this).text('Less').addClass('less'); 
    }
    $(this).siblings('li.toggleable').slideToggle(); 
  }); 
  
  $(document).ready(function(){
	
    $('ul.tabsi li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabsi li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
  })
  