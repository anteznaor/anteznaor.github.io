/************************************/
/************** READY ***************/
/************************************/

$(document).ready(function(){
	
	var tabopen = localStorage.getItem("tabopen");
	var contentopen = localStorage.getItem("contentopen");
	var qnaopen = localStorage.getItem("qnaopen");
	if($('.home_blok').length < 1){
		localStorage.setItem("tabopen", '');
		localStorage.setItem("contentopen", '');
		localStorage.setItem("qnaopen", '');
		}
	if(tabopen){
		if($(window).width() > 1000){
			$('.home_blok').css('transition','all 0s');
			$('div#'+tabopen).addClass('active_blok');
			$('div#'+tabopen).siblings().addClass('inactive_blok');
			$('div#'+tabopen).find('.tel_op').html('0');
			
			if(contentopen){
				inhoud = $('div#'+tabopen).find('.home_blok_content_main_content_closed');
				hoog = inhoud.find('.content_inner').height()+40;
				inhoud.css({
					'height':hoog+'px'
					});
				$('div#'+tabopen).find('.home_blok_content_main_content_open').find('i.fa').addClass('fa-angle-up');
				$('div#'+tabopen).find('.home_blok_content_main_content_open').find('i.fa').removeClass('fa-angle-down');
				$('div#'+tabopen).find('.home_blok_content_main_content_open').addClass('content_open');
				}
			if(qnaopen){
				welke = $('.qna_item:eq('+qnaopen+')');
				inhoud = welke.find('.a_item');
				hoog = welke.find('.a_item_inner').height()+20;
				inhoud.animate({
					'height':hoog+'px'
					});
				welke.animate({
					'height':'+='+hoog+'px'
					});	
				welke.parent().parent().animate({
					'height':'+='+hoog+'px'
					});
				welke.addClass('qna_open');	
				}
			$('.home_blok').css('transition','all 0.8s');
			}else{
			localStorage.setItem("tabopen", '');
			localStorage.setItem("contentopen", '');
			localStorage.setItem("qnaopen", '');	
			}	
		}
	
	
	var overons_teller = setInterval(over_ons_tel_op,10);
	function over_ons_tel_op(){
		einde = $('#overons_teller').attr('data-einde');
		waarde = $('#overons_teller').html();
		waarde++;
		if(einde >= waarde){
			$('#overons_teller').html(waarde);
			}else{
			clearInterval(overons_teller);	
			}
		}
	
	
	
	if($(window).width() > 1000){
		$('.home_blok_inner').each(function(){
			in_hi = $(this).find('.home_blok_initial').height();
			this_hi = $(window).height()-300;
			pad_top = (($(window).height()-in_hi)/2);
			
			$(this).height(this_hi);
			$(this).css('paddingTop',pad_top+'px');
			});
		}else{
		$('.home_blok_inner').css('height','auto');	
		$('.home_blok_inner').css('paddingTop','100px');
		}
	
	
	
	$('.home_blok_inactive_title').height($(window).height());
	$('#vervolg_main_inner').css('minHeight',($(window).height())+'px');
	
	
	
	
	$('.vacature_blok_inhoud').each(function(){
		$(this).height($(this).parent().parent().height());
		});
	
	
	$('.home_blok_content').each(function(){
			if($(window).width() > 1000){
				$(this).height($(window).height()-125);
			}else{
				$(this).css('height','auto');	
				}
		});
	
	
	
	
	




	
/************************************/
/************** READY ***************/
/************************************/	
		
	
/************************************/
/************** CLICK ***************/
/************************************/	
	$('#logo').click(function(){
		localStorage.setItem("tabopen", '');
		localStorage.setItem("contentopen", '');
		localStorage.setItem("qnaopen", '');
		});
	$('#menu_holder ul li').click(function(){
		localStorage.setItem("tabopen", '');
		localStorage.setItem("contentopen", '');
		localStorage.setItem("qnaopen", '');
		});	
		
		
	$('#lang_btn').click(function(event){
		event.stopPropagation();
		});
	
	
	$('.home_blok_content_sb').click(function(){
		if($(window).width() < 1000){
			if(!$(this).hasClass('mobile_open')){
				$(this).find('.home_blok_content_sb_cta').addClass('home_mobile_open');
				$(this).parent().find('.home_blok_content_main').addClass('home_mobile_open');
				$(this).addClass('mobile_open');
				$(this).find('.tel_op').html('0');
				welke = $(this).find('.tel_op');
				tel_op(welke);
			}else{
				$(this).find('.home_blok_content_sb_cta').removeClass('home_mobile_open');
				$(this).parent().find('.home_blok_content_main').removeClass('home_mobile_open');
				$(this).removeClass('mobile_open');
				}
		}	
		});
	
	
	if($(window).width() > 1000){
		$('.home_blok_content_sb_cta').removeClass('home_mobile_open');
		$('.home_blok_content_main').removeClass('home_mobile_open');
		$('.home_blok_content_sb').removeClass('mobile_open');
		}
	
	
	
	$('.vacature_item').click(function(){
		ind = $(this).index();
		
		$('#vacature_single_blok').animate({
			'height': '0px',
			'marginBottom' : '0px'
			},500,function(){
				jQuery('html,body').animate({scrollTop: 0},500);
				$('.vacature_content_blok').css('display','none');
				$('.vacature_content_blok:eq('+ind+')').css('display','block');
				hoog = $('.vacature_content_blok:eq('+ind+')').height()+80;
				$('#vacature_single_blok').animate({
					'height' : hoog+'px',
					'marginBottom' : '30px'
					},500);	
				});
		});
	
	$('.vacature_btn_terug').click(function(){
		$('#vacature_single_blok').animate({
			'height': '0px'
			},500,function(){
				jQuery('html,body').animate({scrollTop: 0},500);
				$('.vacature_content_blok').css('display','none');
				})
		});
	
	
	
	
	
	
	
	$('#mobile_btn').click(function(event){
		event.stopPropagation();
		hi = $('#menu_holder ul').height()+40;
		if(!$(this).hasClass('menu_open')){
			$('#menu_holder').animate({
				'height': hi+'px'
				});
			$(this).addClass('menu_open');
			$(this).find('i.fa').addClass('fa-times');
			$(this).find('i.fa').removeClass('fa-bars');
			}else{
			$('#menu_holder').css({
				'height':'0px'
				});
			$(this).removeClass('menu_open');
			$(this).find('i.fa').removeClass('fa-times');
			$(this).find('i.fa').addClass('fa-bars');
			}
		});
	$('#menu_holder').click(function(event){
		event.stopPropagation();
		});
	$('html').click(function(event){
			$('#menu_holder').css({
				'height':'0px'
				});
			$('#mobile_btn').removeClass('menu_open');
			$('#mobile_btn').find('i.fa').removeClass('fa-times');
			$('#mobile_btn').find('i.fa').addClass('fa-bars');
		});
	
	var welke = "";
	
	
	$('.home_blok').click(function(){
		if($(window).width() > 1000){
			$('.home_blok').removeClass('active_blok');
			$('.home_blok').removeClass('inactive_blok');
			$(this).addClass('active_blok');
			$(this).siblings().addClass('inactive_blok');
			$(this).find('.tel_op').html('0');
			localStorage.setItem("tabopen", $(this).attr('id'));
			localStorage.setItem("contentopen", '');
			localStorage.setItem("qnaopen", '');
			}
		});
	
	
	$('.home_blok_content_sb_cta_btn').mouseenter(function(){
			welke = $(this).find('.tel_op');
			tel_op(welke);
		});
		
	function tel_op(welke){
		einde = welke.attr('data-einde');
		waarde = welke.html();
		waarde++;
		if(einde >= waarde){
			welke.html(waarde);
			setTimeout(tel_weer_op, 10);
			}
		}
	function tel_weer_op(){
		tel_op(welke);
		}
	
	
		
		
	$('.home_blok_content_main_content_open').click(function(event){
		event.stopPropagation();
		inhoud = $(this).parent().parent().find('.home_blok_content_main_content_closed');
		if(!$(this).hasClass('content_open')){
				hoog = inhoud.find('.content_inner').height()+40;
				inhoud.animate({
					'height':hoog+'px'
					});
				$(this).find('i.fa').addClass('fa-angle-up');
				$(this).find('i.fa').removeClass('fa-angle-down');
				$(this).addClass('content_open');
				localStorage.setItem("contentopen", 'content_open');
			}else{
				inhoud.animate({
					'height':'0px'
					});
				$('.qna_item').removeAttr('style');
				$('.a_item').removeAttr('style');
				$('.qna_item').removeClass('qna_open');
				
				
				$('.content_inner').removeAttr('style');
				$('.inner_title_item').removeAttr('style');
				$('.inner_content_item').removeAttr('style');
				$('.inner_title_item').removeClass('item_open');
				$(this).find('i.fa').removeClass('fa-angle-up');
				$(this).find('i.fa').addClass('fa-angle-down');
				$(this).removeClass('content_open');
				localStorage.setItem("contentopen", '');
			}
		});	
		
	$('.qna_item').click(function(event){
		event.stopPropagation();
		welke = $(this);
		
		if(!$(this).hasClass('qna_open')){
			
			$('.qna_item').each(function(){
				if($(this).hasClass('qna_open')){
					hoog = $(this).find('.a_item_inner').height()+20;
					$(this).find('.a_item').animate({
						'height':'0px'
						});
					$(this).animate({
						'height':'-='+hoog+'px'
						});	
					$(this).parent().parent().animate({
						'height':'-='+hoog+'px'
						});
					$(this).removeClass('qna_open');
					}
			});
			
			
			inhoud = welke.find('.a_item');
			hoog = welke.find('.a_item_inner').height()+20;
			inhoud.animate({
				'height':hoog+'px'
				});
			welke.animate({
				'height':'+='+hoog+'px'
				});	
			welke.parent().parent().animate({
				'height':'+='+hoog+'px'
				});
			welke.addClass('qna_open');	
			localStorage.setItem("qnaopen", welke.index());
		}else{
			$('.qna_item').each(function(){
				if($(this).hasClass('qna_open')){
					hoog = $(this).find('.a_item_inner').height()+20;
					$(this).find('.a_item').animate({
						'height':'0px'
						});
					$(this).animate({
						'height':'-='+hoog+'px'
						});	
					$(this).parent().parent().animate({
						'height':'-='+hoog+'px'
						});
					$(this).removeClass('qna_open');
					}
			});
			localStorage.setItem("qnaopen", '');
		}
		
		
			
				
			
		
		});	
	
	
	
	$('.inner_title_item').click(function(){
		kop = $(this);
		kop_hoog = $(this).find('.inner_title').height();
		inhoud = $(this).parent().find('.inner_content_item');
		inhoud_hoog = $(this).parent().find('.inner_content').height()+20;
		
		saldo_hi = (inhoud_hoog-kop_hoog);
		
		if(!$(this).hasClass('item_open')){
			kop.animate({
				'height':'0px'
				});
			inhoud.animate({
				'height':inhoud_hoog+'px'
				});
			$(this).parent().animate({
				'height': saldo_hi+'px'
				});	
			$(this).parent().parent().animate({
				'height':'+='+saldo_hi+'px'
				});
			
			
			$(this).addClass('item_open');
		}else{
			kop.animate({
				'height':kop_hoog+'px'
				});
			inhoud.animate({
				'height':'0px'
				});
			$(this).animate({
				'height': kop_hoog+'px'
				});	
			$(this).parent().parent().animate({
				'height':'-='+saldo_hi+'px'
				});
			
			
			$(this).removeClass('item_open');
		}
	});
	
	
	
	$('#join_community_btn').click(function(){
		$('#afdeklaag_community').css('display','block');
		$('#afdeklaag_community').css('height',($('html body').height())+'px');
		mar = ($(window).height()-($('#popup_community').height()+120))/2;
		if(mar > 0){
			$('#popup_community').css('marginTop',mar+'px');
			}
		$('#afdeklaag_community').animate({
			'opacity':1
			});
		});
	$('#sluit_popup_community').click(function(){
		$('#afdeklaag_community').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_community').css('display','none');
			});
		});
	$('#popup_community').click(function(event){
		event.stopPropagation();
		});
	$('#afdeklaag_community').click(function(){
		$('#afdeklaag_community').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_community').css('display','none');
			});
		});	
	
	
	
	
	$('#try_sinergy_btn').click(function(){
		$('#afdeklaag_software').css('display','block');
		$('#afdeklaag_software').css('height',($('html body').height())+'px');
		mar = ($(window).height()-($('#popup_software').height()+120))/2;
		if(mar > 0){
			$('#popup_software').css('marginTop',mar+'px');
			}
		$('#afdeklaag_software').animate({
			'opacity':1
			});
		});
	$('#sluit_popup_software').click(function(){
		$('#afdeklaag_software').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_software').css('display','none');
			});
		});
	$('#popup_software').click(function(event){
		event.stopPropagation();
		});
	$('#afdeklaag_software').click(function(){
		$('#afdeklaag_software').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_software').css('display','none');
			});
		});	
	
	
	
	
	
	$('#direct_contact_btn').click(function(){
		$('#afdeklaag_contact').css('display','block');
		$('#afdeklaag_contact').css('height',($('html body').height())+'px');
		mar = ($(window).height()-($('#popup_contact').height()+120))/2;
		if(mar > 0){
			$('#popup_contact').css('marginTop',mar+'px');
			}
		$('#afdeklaag_contact').animate({
			'opacity':1
			});
		});
	$('#sluit_popup_contact').click(function(){
		$('#afdeklaag_contact').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_contact').css('display','none');
			});
		});
	$('#popup_contact').click(function(event){
		event.stopPropagation();
		});
	$('#afdeklaag_contact').click(function(){
		$('#afdeklaag_contact').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_contact').css('display','none');
			});
		});	
	
	
	
	
	// $('.vacature_btn_soliciteren').click(function(){
	// 	$('html,body').animate({scrollTop: 0},'slow');
	// 	$('#popup_sollicitatie_h2').html($(this).attr('data-vacature_naam'));
	// 	$('#vacature_naam').val($(this).attr('data-vacature_naam'));
	// 	$('#afdeklaag_sollicitatie').css('display','block');
	// 	$('#afdeklaag_sollicitatie').css('height',($('html body').height())+'px');
	// 	mar = ($(window).height()-($('#popup_sollicitatie').height()+120))/2;
	// 	if(mar > 0){
	// 		$('#popup_sollicitatie').css('marginTop',mar+'px');
	// 		}
	// 	$('#afdeklaag_sollicitatie').animate({
	// 		'opacity':1
	// 		});
	// 	});
	$('#sluit_popup_sollicitatie').click(function(){
		$('#afdeklaag_sollicitatie').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_sollicitatie').css('display','none');
			});
		});
	$('#popup_sollicitatie').click(function(event){
		event.stopPropagation();
		});
	$('#afdeklaag_sollicitatie').click(function(){
		$('#afdeklaag_sollicitatie').animate({
			'opacity':0
			},function(){
				$('#afdeklaag_sollicitatie').css('display','none');
			});
		});	
	
	
		
});
/************************************/
/************** CLICK ***************/
/************************************/	


	

/************************************/
/************** RESIZE **************/
/************************************/
	
$(window).resize(function(){
	$('#contact_iframe').css('height',$('#contact_main_content_center img').height()+'px');
	
	
	if($(window).width() > 1000){
		$('.home_blok_content_sb_cta').removeClass('home_mobile_open');
		$('.home_blok_content_main').removeClass('home_mobile_open');
		$('.home_blok_content_sb').removeClass('mobile_open');
		}
	
	if($(window).width() < 1000){
		$('.home_blok').removeClass('active_blok');
		$('.home_blok').removeClass('inactive_blok');
		}
	
	if($(window).width() > 1000){
		$('.home_blok_inner').each(function(){
			in_hi = $(this).find('.home_blok_initial').height();
			this_hi = $(window).height()-300;
			pad_top = (($(window).height()-in_hi)/2);
			
			$(this).height(this_hi);
			$(this).css('paddingTop',pad_top+'px');
			});
		}else{
		$('.home_blok_inner').css('height','auto');	
		$('.home_blok_inner').css('paddingTop','100px');
		}
	$('.home_blok_inactive_title').height($(window).height());
	$('#vervolg_main_inner').css('minHeight',($(window).height())+'px');
	
	
	
	$('.vacature_item_hover').each(function(){
		$(this).height($(this).parent().parent().height());
		});
	$('.vacature_blok_inhoud').each(function(){
		$(this).height($(this).parent().parent().height());
		});
	$('.home_blok_content').each(function(){
			if($(window).width() > 1000){
				$(this).height($(window).height()-125);
			}else{
				$(this).css('height','auto');	
				}
		});
	
	
	
	
	
	
	
	});	
	
/************************************/
/************** RESIZE **************/
/************************************/	

/************************************/
/************** LOAD ****************/
/************************************/	
$(window).on('load', function(){
	$('#contact_iframe').css('height',$('#contact_main_content_center img').height()+'px');
	});
/************************************/
/************** LOAD ****************/
/************************************/


/************************************/
/************** SCROLL **************/
/************************************/	

$(document).ready(function(){
	$(window).scroll(function(){
	if ($(this).scrollTop() > 10) {
		$('#header').addClass('scrolled');
		} else {
		$('#header').removeClass('scrolled');
	}
	});	
});	
			
			


/************************************/
/************** SCROLL **************/
/************************************/