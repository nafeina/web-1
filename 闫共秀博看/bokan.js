window.onload=function(){
	var rig1_a6=document.getElementById('rig1_a6');
       var timer,step=30;
       var a=0;
       rig1_a6.onclick=function () {
       	  var scrollh=document.body.scrollTop||document.documentElement.scrollTop;
       	  var every=scrollh/step;
       	  timer=setInterval(function(){
       	  	scrollh--;
       	  	if(scrollh<=0){
       	  		clearInterval(timer);
       	  	}
       	  	document.body.scrollTop=scrollh;
       	  	document.documentElement.scrollTop=scrollh;
       	  },5)

         timer=setInterval(function(){
             scrollh-=every;
             a++;
             if(a>=step){
             	clearInterval(timer);
             	scrollh=0;
             }
             document.body.scrollTop=scrollh;
       	  document.documentElement.scrollTop=scrollh;
         },5)
       }
      //加载

      var cen1_bot=document.getElementById('cen1_bot');
      var timer9,AA=-640;
       window.onscroll=function(){         
         var sh=document.documentElement.scrollTop||document.body.scrollTop;
           timer9=setInterval(function(){      
           if(sh>=445){            
             AA++;
             if(AA>=0){  
              AA=0;            
              clearInterval(timer9);              
             }
             cen1_bot.style.top=AA+'px';         
            } },5)
         
       }
      
       var cen2_ul=document.getElementById('cen2_ul');
       var li2=cen2_ul.getElementsByTagName('li');
       for(var i=0;i<li2.length;i++){
            li2[i].index=i;
            li2[i].onmouseover=function(){
                  for(var i=0;i<li2.length;i++){                       
                        li2[i].className="";                                                
                  }this.className="select1";
            }
            li2[i].onmouseout=function(){
              for(var i=0;i<li2.length;i++){
                li2[i].className='';
              }
            }
       }

       //放大
       var cen2_ul1=document.getElementById('cen2_ul1');
       var lis=cen2_ul1.getElementsByTagName('li');
       var timer0,aa,timer10;
       for(var i=0;i<lis.length;i++){
            lis[i].onmouseover=function(){             
              clearInterval(timer10); aa=100;
               for(var i=0;i<lis.length;i++){
                  if(this==lis[i]){
                        var v=i;
                        clearInterval(timer0);
                        timer0=setInterval(function(){
                              aa++;
                              if(aa>=120){
                                    clearInterval(timer0);
                                    aa=120;
                              }
                              lis[v].style.backgroundSize=aa+'%';
                        },20)
                  }
               }

            }

       lis[i].onmouseout=function() { 
        // b=120;
            for (var i = 0; i < lis.length; i++) {
                  if(lis[i]==this){
                        var s=i;
                        clearInterval(timer10);                       
                        timer10=setInterval(function() {
                              aa--;
                              if(aa<=100){
                                    clearInterval(timer10);
                                    aa=100;
                              }
                              lis[s].style.backgroundSize=aa+'%';
                        },17)
                  }
            };
      }
       } 
      
      //图片1
      var cen6_in=document.getElementById('cen6_in');
      var ls=cen6_in.getElementsByTagName('li');
      var divs1=cen6_in.getElementsByTagName('div');
      var timer11,a=0,b=0;
      for(var i=0;i<ls.length;i++){
        ls[i].onmouseover=function(){
          a=-118;
          b=155;  
          clearInterval(timer11);    
          for(var i=0;i<divs1.length;i++){
            if(ls[i]==this){               
                var v=i; 
                divs1[v].style.display='block';              
                timer11=setInterval(function(){
                    a++;
                    b-=1.3;
                    if(a>=0&&b<=0){
                      clearInterval(timer11);
                      a=0;
                      b=0;
                    }
                    divs1[v].style.top=a+'px';
                    divs1[v].style.left=b+'px';
                },2)
              }
          }
        }

        ls[i].onmouseout=function(){
            for(var i=0;i<ls.length;i++){
            if(this==ls[i]){
              clearInterval(timer11);
              divs1[i].style.top=-120+'px';
              divs1[i].style.left=155+'px';
              divs1[i].style.display='none';
            }
          }
        }
      }
      //图片2
      var cen6_in1=document.getElementById('cen6_in1');
      var ls1=cen6_in1.getElementsByTagName('li');
      var divs2=cen6_in1.getElementsByTagName('div');
      var timer12,a,b;
      for(var i=0;i<ls1.length;i++){
        ls1[i].onmouseover=function(){
          a=-118;
          b=155;  
          clearInterval(timer12);    
          for(var i=0;i<divs2.length;i++){
            if(ls1[i]==this){               
                var v=i;  
                divs2[v].style.display='block';             
                timer12=setInterval(function(){
                    a++;
                    b-=1.3;
                    if(a>=0&&b<=0){
                      clearInterval(timer12);
                      a=0;
                      b=0;
                    }
                    divs2[v].style.top=a+'px';
                    divs2[v].style.left=b+'px';
                },2)
              }
          }
        }
        ls1[i].onmouseout=function(){
            for(var i=0;i<ls1.length;i++){
            if(this==ls1[i]){
              clearInterval(timer12);
              divs2[i].style.top=-120+'px';
              divs2[i].style.left=155+'px';
              divs2[i].style.display='none';
            }
          }
        }
      }

       //图片3
      var cen6_in2=document.getElementById('cen6_in2');
      var ls2=cen6_in2.getElementsByTagName('li');
      var divs3=cen6_in2.getElementsByTagName('div');
      var timer13,a,b;
      for(var i=0;i<ls2.length;i++){
        ls2[i].onmouseover=function(){
          a=-118;
          b=155;  
          clearInterval(timer13);    
          for(var i=0;i<divs3.length;i++){
            if(ls2[i]==this){               
                var v=i;    
                divs3[v].style.display='block '          
                timer13=setInterval(function(){
                    a++;
                    b-=1.3;
                    if(a>=0&&b<=0){
                      clearInterval(timer13);
                      a=0;
                      b=0;
                    }
                    divs3[v].style.top=a+'px';
                    divs3[v].style.left=b+'px';
                },2)
              }
          }
        }
        ls2[i].onmouseout=function(){
            for(var i=0;i<ls2.length;i++){
            if(this==ls2[i]){
              clearInterval(timer13);
              divs3[i].style.top=-120+'px';
              divs3[i].style.left=155+'px';
              divs3[i].style.display='none';
            }
          }
        }
      }

       //图片4
      var cen6_in3=document.getElementById('cen6_in3');
      var ls3=cen6_in3.getElementsByTagName('li');
      var divs4=cen6_in3.getElementsByTagName('div');
      var timer14,a,b;
      for(var i=0;i<ls3.length;i++){
        ls3[i].onmouseover=function(){
          a=-118;
          b=155;  
          clearInterval(timer14);    
          for(var i=0;i<divs4.length;i++){
            if(ls3[i]==this){               
                var v=i; 
                divs4[v].style.display='block';              
                timer14=setInterval(function(){
                    a++;
                    b-=1.3;
                    if(a>=0&&b<=0){
                      clearInterval(timer14);
                      a=0;
                      b=0;
                    }
                    divs4[v].style.top=a+'px';
                    divs4[v].style.left=b+'px';
                },2)
              }
          }
        }
        ls3[i].onmouseout=function(){
            for(var i=0;i<ls3.length;i++){
            if(this==ls3[i]){
              clearInterval(timer14);
              divs4[i].style.top=-120+'px';
              divs4[i].style.left=155+'px';
              divs4[i].style.display='none';
              
            }
          }
        }
      }

       //倒计时
      var cen10_p=document.getElementById('cen10_p');
      var cen10_p1=document.getElementById('cen10_p1');
      var date1=new Date('2016/10/1 12:00:00');
       var endtime=date1.valueOf();
       setInterval(function(){
        var date2=new Date();
        var startTime=date2.getTime();
        var time1=endtime-startTime;
        // console.log(time1);
        var day=parseInt(time1/(1000*60*60*24));
        var hour=parseInt(time1/(1000*60*60))-day*24;
        var min=parseInt(time1/(1000*60))-hour*60-day*24*60;
        var sec=parseInt(time1/1000)-min*60-hour*60*60-day*24*60*60;
        cen10_p.innerHTML=day;
        cen10_p1.innerHTML=hour;
       },1)
     //尾部
       var cen5_ul=document.getElementById('cen5_ul');
       var lis1=cen5_ul.getElementsByTagName('li');
       var ps=document.getElementById('cen5_div1');
       for(var i=0;i<lis1.length;i++){
            lis1[i].onmouseover=function(){
              cen5_div1.style.color="#FEA60C";
              cen5_div1.style.fontSize=130+'%';                  
            }
            lis1[i].onmouseout=function(){
                  cen5_div1.style.color='#FFF';
              cen5_div1.style.fontSize=120+'%';                  

            }
       }
       //字体
       var cen5_ul1=document.getElementById('cen5_ul1');
       var lis2=cen5_ul1.getElementsByTagName('li');
       var ps1=document.getElementById('cen5_div2');
       for(var i=0;i<lis2.length;i++){
            lis2[i].onmouseover=function(){
              cen5_div2.style.color="#FEA60C";
              cen5_div2.style.fontSize=130+'%';                  
            }
            lis2[i].onmouseout=function(){
                  cen5_div2.style.color='#FFF';
                  cen5_div2.style.fontSize=120+'%';
            }
       }


      var cen5_ul2=document.getElementById('cen5_ul2');
       var lis3=cen5_ul2.getElementsByTagName('li');
       var ps2=document.getElementById('cen5_div3');
       for(var i=0;i<lis3.length;i++){
            lis3[i].onmouseover=function(){
              cen5_div3.style.color="#FEA60C"; 
              cen5_div3.style.fontSize=130+'%';                 
            }
            lis3[i].onmouseout=function(){
                  cen5_div3.style.color='#FFF';
                  cen5_div3.style.fontSize=120+'%';
            }
       }
    
    var foot_ul=document.getElementById('foot_ul');
    var as=foot_ul.getElementsByTagName('a');
    for(var i=0;i<as.length;i++){
    	as.f=i;
    	as[i].onmouseover=function(){ 
    	for(var i=0;i<as.length;i++){
    		as[i].className='';	
    	}   		
    	  this.className="sel";
    	}
    	as[i].onmouseout=function(){
    		for(var i=0;i<as.length;i++){
    			as[i].className='';
    		}
    	}
    }
    
    var foot_ul1=document.getElementById('foot_ul1');
    var as1=foot_ul1.getElementsByTagName('a');
    for(var i=0;i<as1.length;i++){
    	as1[i].f1=i;
    	as1[i].onmouseover=function(){ 
    	for(var i=0;i<as1.length;i++){
    		as1[i].className='';	
    	}   		
    	  this.className="sel1";
    	}
    	as1[i].onmouseout=function(){
    		for(var i=0;i<as1.length;i++){
    			as1[i].className='';
    		}
    	}
    }

    var foot_ul2=document.getElementById('foot_ul2');
    var as2=foot_ul2.getElementsByTagName('a');
    for(var i=0;i<as2.length;i++){
    	as2[i].f2=i;
    	as2[i].onmouseover=function(){ 
    	for(var i=0;i<as2.length;i++){
    		as2[i].className='';	
    	}   		
    	  this.className="sel2";
    	}
    	as2[i].onmouseout=function(){
    		for(var i=0;i<as2.length;i++){
    			as2[i].className='';
    		}
    	}
    }
    

    var foot_ul31=document.getElementById('foot_ul31');
    var as31=foot_ul31.getElementsByTagName('a');
    for(var i=0;i<as31.length;i++){
    	as31[i].f31=i;
    	as31[i].onmouseover=function(){ 
    	for(var i=0;i<as31.length;i++){
    		as31[i].className='';	
    	}   		
    	  this.className="sel31";
    	}
    	as31[i].onmouseout=function(){
    		for(var i=0;i<as31.length;i++){
    			as31[i].className='';
    		}
    	}
    }
   
    var foot_ul3=document.getElementById('foot_ul3');
    var as3=foot_ul3.getElementsByTagName('a');
    for(var i=0;i<as3.length;i++){
    	as3[i].f3=i;
    	as3[i].onmouseover=function(){ 
    	for(var i=0;i<as3.length;i++){
    		as3[i].className='';	
    	}   		
    	  this.className="sel3";
    	}
    	as3[i].onmouseout=function(){
    		for(var i=0;i<as3.length;i++){
    			as3[i].className='';
    		}
    	}
    }
    
    var foot_ul4=document.getElementById('foot_ul4');
    var as4=foot_ul4.getElementsByTagName('a');
    for(var i=0;i<as4.length;i++){
    	as4[i].f4=i;
    	as4[i].onmouseover=function(){ 
    	for(var i=0;i<as4.length;i++){
    		as4[i].className='';	
    	}   		
    	  this.className="sel4";
    	}
    	as4[i].onmouseout=function(){
    		for(var i=0;i<as4.length;i++){
    			as4[i].className='';
    		}
    	}
    }

}