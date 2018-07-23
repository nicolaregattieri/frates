// $.getScript('http://io.vtex.com.br/vtex.js/2.2.0/vtex.min.js');

const body = $("body");
const htmlBody = $("html, body");
const $document = $(document);
const header = $("#header");
const submenuDesktopWrapper = $(".js-submenu-wrap");
const userSubmenu = $(".submenu-user");
const sidePanelMobile = $(".side-panel");
const mobileSubmenu = $(".submenu-mobile");
const minicart = $(".minicart");
const slide = $(".slide");
const slideShelf = $(".slideShelf");
const slideBrands = $(".slideBrands");
const carousel = $(".shelf-carousel");
const backToTop = $(".js-back-to-top");
const shelf = $(".prateleira");
const paginatedShelf = $(".prateleira[id*=ResultItems]");
const orderList = $(".order-list");
const formNews = $(".newsletter");
const depCatBus = $(".dep-cat-bus");
const pagProduto = $(".produto");
const pagInstitucional = $(".institucional");
const sidebar = $(".sidebar");
const addPercent = $(".prateleira .flags__desconto .flag");
const addTotalBuyTogether = $(".buy-together .buy");
const $slider = $(".slider");
const $progressBar = $(".progress");
const $progressBarLabel = $(".slider__label");

// ADD PERCENT TO DISCOUNT
addPercent.append("% OFF");

(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    if (!console[method]) {
      console[method] = noop;
    }
  }
});
// Simulate Click

jQuery.fn.simulateClick = function() {
  return this.each(function() {
    if ("createEvent" in document) {
      const doc = this.ownerDocument;
      const evt = doc.createEvent("MouseEvents");
      evt.initMouseEvent(
        "click",
        true,
        true,
        doc.defaultView,
        1,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      this.dispatchEvent(evt);
    } else {
      this.click();
    }
  });
};

if (orderList.length > 0) {
  orderList.find('link').remove();
  orderList.find('.page-header').unwrap('.container');
}
  // Ajuste Meus Pedidos //

  // Menu Persistente Begin //
  // $(window).scroll(() => {
  // 	const scroll = $(window).scrollTop();

  // 	if (scroll >= 350) {
  // 		$('header').addClass('menu-persistente');
  // 		// $('body').addClass('top-height-active');
  // 	} else {
  // 		$('header').removeClass('menu-persistente');
  // 		// $('body').removeClass('top-height-active');
  // 	}
  // });
  // Menu Persistente END //

  // Remocao de Li HelperComplement Prateleira //
  if ($(".helperComplement").length) {
    $(".helperComplement").remove();
  }
  // Remocao de Li HelperComplement Prateleira //

  // Busca Mob //
  $(".js-open-mobile-search").click(function() {
    $(".searchbox").toggleClass("active");
    $(".searchbox").slideToggle();
  });
  // Busca Mob //

  // Condicao tabela //
  if ($(".conteudo-tabela img").length < 1) {
    $(".tabela").remove();
  }
  // Condicao tabela //

  // Voltar ao Topo //
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
      $('.js-back-to-top').addClass('active');
    } else {
      $('.js-back-to-top').removeClass('active');
    }
  });

  body.on('click', '.js-back-to-top', function(event) {
      event.preventDefault();
      htmlBody.animate({ scrollTop: 0 }, 300);
  });
  // Voltar ao Topo //

  // Slider //
try {
  $document.ready(function(){
    
  if ($(".slide").length > 0) {
    $(".slide").slick({
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      arrows: false,
      dots: true,
      draggable: true,
      touchMove: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  
  // Slider //

  if (slideShelf.length > 0) {
    $(".home, .busca-vazia, .produto")
      .find(".slideShelf .prateleira")
      .find("ul")
      .slick({
        adaptiveHeight: true,
        autoplay: false,
        arrows: true,
        dots: false,
        mobileFirst: true,
        draggable: true,
        touchMove: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 479,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
  }
  });
}
catch(e){}
// $slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
  //   const calc = (nextSlide / (slick.slideCount - 1)) * 100;

  //   $progressBar
  //     .css("background-size", `${calc}% 100%`)
  //     .attr("aria-valuenow", calc);

  //   $progressBarLabel.text(`${nextSlide + 1} | ${slick.slideCount}`);
  // });

  // Frete Gratis Aberto //
  try {
    $document.ready(function(){
      $('.shipping-value').simulateClick('click');
      $('.ajax-temp').fadeOut(3500);
    });
  } catch(e) {}
  // Frete Gratis Aberto //

  // Menu SidePanel //
  $("header .js-open-mobile-menu").click(function() {
    $(this).toggleClass("active");
    $("header .menu-header").toggleClass("slideActive");
  });

  $("header nav.menu .has-sub .js-open-sub").click(function() {
    $(this).toggleClass("active");
    $(this)
      .next()
      .toggleClass("slideActive");
  });
  // Menu SidePanel //

  // Open submenu mobile //
  $(".menu-header ul li.has-sub a.first-menu").click(function() {
    $(this).removeAttr("href");
    $(this).toggleClass("active");
    $(this)
      .next()
      .slideToggle();
  });
  // Open submenu mobile //

  // Estilizar a quantidade em Departamento //
  $('.menu-departamento h4 a, .menu-departamento ul li a').each(function() {
    var qtd = '';
      var nome = '';
      qtd = $(this).html();
      if (/\(/.test(qtd)) {
          qtd = qtd.split('(');
          nome = qtd[0];
          qtd = qtd[1];
          qtd = qtd.split(')');
          qtd = qtd[0];
          $(this).html(nome + '<span class="qtd-filter">' + qtd + '</span>');
      }
  });
  // Estilizar a quantidade em Departamento //

  // Smart Research //
  if (sidebar.length > 0) {
    try {
      sidebar.find('input[type="checkbox"]').vtexSmartResearch({
        elemLoading: '',
        returnTopText: '',
        elemLoading:'<i class="shelf__loading"></i>',
        filterScrollTop: function(shelfOffset) {
          return 20;
        }
      });
    } catch(e) {}
  }
  // Smart Research //
  if (sidebar.length > 0) {
    try {
      sidebar.find('input[type="checkbox"]').vtexSmartResearch({
        elemLoading: '',
        returnTopText: '',
        elemLoading:'<i class="shelf__loading"></i>',
        filterScrollTop: function(shelfOffset) {
          return 20;
        }
      });
    } catch(e) {}
  }
// Smart Research //

  // Scripts Pagina de Produto //
    if (pagProduto.length > 0) {

  			// Controller Image Thumbs, Featured and SuperZoom //
				$("#___rc-p-id").each(function(index) {
					var id = $(this).attr("value");
					var data = "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";

					$.getJSON(data, function(data) {
						$.each(data, function(key, val) {
							var elements = val.items[0].images;
							$(elements).each(function(data, val){
								// Take Image Thumbs //
									var myLabel = val.imageLabel;
									var myImageID = val.imageId;
									var myImageName = val.imageText;
									$('<li class="'+myLabel+'"><a href="/arquivos/ids/'+myImageID+'-1014-1524/'+myImageName+'.jpg" data-standard="/arquivos/ids/'+myImageID+'-507-762/'+myImageName+'.jpg"><img src="/arquivos/ids/'+myImageID+'-100-150/'+myImageName+'.jpg" /></a></li>').appendTo('ul.thumbnails');
								// Take Image Thumbs //

								var myFirst = $('.thumbnails li').first();
								myFirst.addClass('first-thumb');

								var firstThumbStand = $('.thumbnails li.first-thumb a').attr('data-standard');
								var firstThumbLink = $('.thumbnails li.first-thumb a').attr('href');
								var firstThumbEx = $('<a href="'+firstThumbLink+'"><img src="'+firstThumbStand+'"/></a>');
								firstThumbEx.appendTo('.easyzoom');
								$('.easyzoom a:first-of-type').nextAll().remove();

								// Instantiate EasyZoom instances
								var $easyzoom = $('.easyzoom').easyZoom();

								// Setup thumbnails example
								var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
								$('.thumbnails').on('click', 'a', function(e) {
									var $this = $(this);
									e.preventDefault();
									// Use EasyZoom's `swap` method
									api1.swap($this.data('standard'), $this.attr('href'));
								});
							});
						});

					});
				});
			// Controller Image Thumbs, Featured and SuperZoom //
      
    try {
      $document.ready(function() {
      // Script Quantidade de Produtos END. Pego a quantidade de produtos pelo val e jogo na URL do botao.
        $('.qtd .more').click(function(){
          var $input = $(this).prev();
          $input.val( +$input.val() + 1 );
          var opt_value = $input.val();
          var link = $(this).next();
          var currentURL = $('.buy-button').attr('href');
          var nomedoproduto = currentURL.split(/\&/)[0];
          $('.buy-button').removeAttr('href');
          $('.buy-button').attr('href', nomedoproduto + '&qty=' + opt_value + '&seller=1&redirect=true&sc=1');
        });

        $('.qtd .less').click(function(){
          var $input = $(this).next();
          $input.val( +$input.val() - 1 );
          var opt_value = $input.val();
          var encontraInput = $(this).next();
          var currentURL = $('.buy-button').attr('href');
          var nomedoproduto = currentURL.split(/\&/)[0];

          $('.buy-button').removeAttr('href');
          $('.buy-button').attr('href', nomedoproduto + '&qty=' + opt_value + '&seller=1&redirect=true&sc=1');
        });
          // Script Quantidade de Produtos END

      });
    } catch(e) {}
    }
  // Scripts Pagina de Produto //


  // Scripts Departamento //
  if($(depCatBus).length > 0){

    $(".Cor a").each(function() {
        var $color = $(this).attr("title");
        $(this).addClass($color);
    });
    
  }
  // Scripts Departamento //


// Scripts Modal //
  // Open Modal //
    // Open Modal //
        $('.call_modal').click(function() {
            $('.tabelas').fadeIn(200);
            $('.bg_modal').fadeIn(600);
            $('body').addClass('modal_active');
        });
        // Open Modal //

        // Close Modal //
        $('.close_modal, .bg_modal').click(function() {
            $('.tabelas').fadeOut(600);
            $('.bg_modal').fadeOut(600);
            $('body').removeClass('modal_active');
            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
        });
        $(document).keyup(function(ev) {
            if (ev.keyCode == 27)
                $('.tabelas').fadeOut(500);
                $('.bg_modal').fadeOut(600);
            $('body').removeClass('modal_active');
            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
            $('#parcelamentoModal').removeClass('active');
        });
    // Close Modal //
// Scripts Modal //

  // Remocao Loading Meus Pedidos//
  try {
    $document.ajaxStop(function() {
      orderList.parents('html').removeClass('is-loading');
    });
  } catch(e) {}
  // Remocao Loading Meus Pedidos//



$('body.dep-cat-bus').each(function(){
if(window.matchMedia("(max-width: 1219px)").matches){
  $(this).find('.navigation-tabs').each(function(){
    $(this).prepend('<button class="close-filters">x</button>');
    $(this).find('.close-filters').click(function(){
      $(this).parent().removeClass('active');
    });
    $(this).after('<button class="open-filters"><svg xmlns="http://www.w3.org/2000/svg" width="459" height="459" viewBox="0 0 459 459"><path d="M178.5 382.5h102v-51h-102v51zM0 76.5v51h459v-51H0zM76.5 255h306v-51h-306v51z"/></svg> Filtrar</button>');
    $(this).siblings('.open-filters').click(function(){
      $(this).siblings('.navigation-tabs').addClass('active');
    });
  });		
}
});