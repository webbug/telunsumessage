$(function(){
	

	   /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };
	    
//	alert($(window).width()+'-----'+$(window).height());
	
	    function styleJs(){
			var pingKuan=jQuery(".m_wrapper").width(),//m_wrapper是最外层div的类名
				bili = function(mun){
					var oScale = mun/640;	//750是psd宽度
					return oScale.toFixed(6);
				};
				
		
			//例子
			jQuery(".iBg").css({
				"width":pingKuan * bili(240)	//240是在480宽度的psd中的width		
			});
			

		
			//样式重置完成之后
			jQuery(".load").hide();
			jQuery(".m_wrapper").css({
				"opacity": 1
			});
			
			
			/*pages*/
            jQuery(".logo").css({
				"width":pingKuan * bili(199),	//240是在480宽度的psd中的width
				"height":pingKuan * bili(58),
				"top":pingKuan * bili(27),
				"left":pingKuan * bili(34)
			});
			
			jQuery(".la").css({
				"width":pingKuan * bili(54),	
				"height":pingKuan * bili(54),
				"top":pingKuan * bili(27),
				"right":pingKuan * bili(34)
			});
			
			
			jQuery(".xf_pi").css({
				"width":pingKuan * bili(605),	
				"height":pingKuan * bili(892),
				"bottom":pingKuan * bili(10),
				"right":pingKuan * bili(24)
			});
			
				jQuery(".fm").css({
				"left":pingKuan * bili(15)
			});
			
			
			jQuery(".fg").css({
				"width":pingKuan * bili(548),	
				"height":pingKuan * bili(90),
				"top":pingKuan * bili(-2),
				"left":pingKuan * bili(35)
			});
			
			jQuery(".fg_y").css({
				"width":pingKuan * bili(540),	
				"height":pingKuan * bili(12),
				"top":pingKuan * bili(-5),
				"left":pingKuan * bili(38)
			});
	    
	       jQuery(".jian_icon").css({
				"width":pingKuan * bili(19),	
				"height":pingKuan * bili(10),
				"top":pingKuan * bili(58)
			});
	    
	    
	    /*文字介绍*/
	      jQuery(".xw").css({
				"width":pingKuan * bili(337),	
				"height":pingKuan * bili(76),
				"top":pingKuan * bili(158)
			});
			
			 jQuery(".yk").css({
				"width":pingKuan * bili(337),	
				"height":pingKuan * bili(76),
				"top":pingKuan * bili(158)
			});
			
			 jQuery(".mm").css({
				"width":pingKuan * bili(384),	
				"height":pingKuan * bili(76),
				"top":pingKuan * bili(158)
			});
	       
	        jQuery(".zm").css({
				"width":pingKuan * bili(429),	
				"height":pingKuan * bili(76),
				"top":pingKuan * bili(158)
			});
			
			 jQuery(".sj").css({
				"width":pingKuan * bili(463),	
				"height":pingKuan * bili(73),
				"top":pingKuan * bili(158)
			});
			
			jQuery(".rs").css({
				"width":pingKuan * bili(449),	
				"height":pingKuan * bili(73),
				"top":pingKuan * bili(158)
			});
			
				jQuery(".cz").css({
				"width":pingKuan * bili(362),	
				"height":pingKuan * bili(167),
				"top":pingKuan * bili(100)
			});
			
					jQuery(".zc").css({
				"width":pingKuan * bili(339),	
				"height":pingKuan * bili(133),
				"top":pingKuan * bili(100)
			});
			
						jQuery(".xd").css({
				"width":pingKuan * bili(385),	
				"height":pingKuan * bili(166),
				"top":pingKuan * bili(100)
			});
			
			
						jQuery(".pp").css({
				"width":pingKuan * bili(423),	
				"height":pingKuan * bili(99),
				"top":pingKuan * bili(130)
			});
			
			
						jQuery(".bg").css({
				"width":pingKuan * bili(281),	
				"height":pingKuan * bili(99),
				"top":pingKuan * bili(130)
			});
			
			jQuery(".rk").css({
				"width":pingKuan * bili(449),	
				"height":pingKuan * bili(99),
				"top":pingKuan * bili(130)
			});
			
			jQuery(".gh").css({
				"width":pingKuan * bili(422),	
				"height":pingKuan * bili(99),
				"top":pingKuan * bili(130)
			});
			
			jQuery(".xy").css({
				"width":pingKuan * bili(281),	
				"height":pingKuan * bili(99),
				"top":pingKuan * bili(130)
			});
	       
	       
	       jQuery(".xxdd").css({
				"width":pingKuan * bili(281),	
				"height":pingKuan * bili(99),
				"top":pingKuan * bili(130)
			});
	       
	       
	       /*图片介绍*/
	        jQuery(".xw_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
			 jQuery(".yk_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
	       
	       
	        jQuery(".mm_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
	       
	       
	        jQuery(".zm_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
			  jQuery(".sj_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
			
			  jQuery(".rs_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
			
			
			  jQuery(".cz_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
			  jQuery(".zc_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
				  jQuery(".xd_img").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
			
				  jQuery(".hb_img").css({
				"width":pingKuan * bili(450),
				"left":pingKuan * bili(86)
			});
			
			
				  jQuery(".yqh").css({
				"width":pingKuan * bili(520),
				"left":pingKuan * bili(51)
			});
			
	    
	        	  jQuery(".lq").css({
				"width":pingKuan * bili(280),
				"top":pingKuan * bili(10)
			});
			
			
			
			jQuery('.close').css({
				"position":"absolute",
				"width":pingKuan * bili(150),
				"height":pingKuan * bili(150),
				"top":pingKuan * bili(0),
				"right":pingKuan * bili(0),
				"z-index":"99999999999999999999999999999999999999"
			});
	    
	    
	       setTimeout(function(){
	       	 
	       	  	jQuery('.xf_pi').addClass('xf_pi_animate');
	       	 
	       },1500);
	    
	    
	        
	        var fgt=false;
	        
	        	setTimeout(function(){
		        	 jQuery('.fg').addClass('fg_fan');
	                 jQuery('.fg').css({
			       	   		"z-index":"0"
			       	 });
			       	 
			       	 if(fgt==false){
			       	 setTimeout(function(){
			       	  	jQuery('.hua_img,.zc_img').addClass('hua_img_animate');
			       	  	jQuery('.text').eq(0).addClass('text_in');
			       	  	fgt=true;
			       	  },1500);
			       	 }
	        	},2500);
	        	
	        	
	        	
	        	 /*加大热区*/
	        var num=0;
	       
	        	Zepto(window).swipeUp(function(){
            	
            	
	            	if(fgt==true && num<=11){
//		            		alert('efe');
		            	if(num==0){
		            		Zepto('.hua_img1').trigger('swipeUp');
		            	}else if(num==1){
		            		Zepto('.hua_img2').trigger('swipeUp');
		            	}else if(num==2){
		            		Zepto('.hua_img3').trigger('swipeUp');
		            	}else if(num==3){
		            		Zepto('.hua_img4').trigger('swipeUp');
		            	}else if(num==4){
		            		Zepto('.hua_img5').trigger('swipeUp');
		            	}else if(num==5){
		            		Zepto('.hua_img6').trigger('swipeUp');
		            	}else if(num==6){
		            		Zepto('.hua_img7').trigger('swipeUp');
		            	}else if(num==7){
		            		Zepto('.hua_img8').trigger('swipeUp');
		            	}else if(num==8){
		            		Zepto('.hua_img9').trigger('swipeUp');
		            	}else if(num==9){
		            		Zepto('.hua_img10').trigger('swipeUp');
		            	}else if(num==10){
		            		Zepto('.hua_img11').trigger('swipeUp');
		            	}else if(num==11){
		            		Zepto('.hua_img12').trigger('swipeUp');
		            	}else if(num==12){
		            		Zepto('.hua_img13').trigger('swipeUp');
		            	}
		            	
		            	num=num+1;
		            	
//		          	alert(num);
	            	}
            	 
                });
	        
	        	
	        	
	        	
	        
	    
	        setTimeout(function(){
	        	
		       	 
		       	  setTimeout(function(){
		       	  	jQuery('.jian_icon').show();
		       	  },4500);
		       	  
		
//		            jQuery('.fg').addClass('fg_fan');
		            /*盖板调低*/
//		       	  	jQuery('.fg').css({
//		       	   		"z-index":"0"
//		       	   	});
		       	   	
		       	   	
	//	           setTimeout(function(){
	//	           		jQuery('.fg_y').css({
	//	       	   		"z-index":"0"
	//	       	   	});
	//	           },4500);
		           
	
	       	  
	       },100);





        var browser = {
		versions: function () {
			var u = navigator.userAgent, app = navigator.appVersion;
			return { //移动终端浏览器版本信息 
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
				iPad: u.indexOf('iPad') > -1, //是否iPad 
				};
				}(),
		}
		
		if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
		//window.location.href = "http://www.asiayak.cn";
		}
		if (browser.versions.android) {
		   setTimeout(function(){
					   	   jQuery('.fg').hide();
			},4000);
		}




	       
//	       jQuery('#audio').attr('src',"mp.mp3");
	        
	    
	    
//        alert($(window).width()+'--'+$(window).height());
          
	    
	    



	    
	    
	    
	    
	    
	    }
			
			
			


		
		function loaded(){
			setTimeout(function(){styleJs();},300);
		}
		function hengshuping(){
			if(window.orientation==180||window.orientation==0){loaded();};
			if(window.orientation==90||window.orientation==-90){loaded();}
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
		window.addEventListener('load', loaded, false);



});




