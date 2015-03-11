function olapicAfterWidgetRender(e){


    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        iPad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var photoContainerWidth, photoContainerHeight, containerId, widgetContainer, photoContainer, photoWrapper;
    if(e.elementId == 'olapic_specific_widget' || e.elementId == 'olapic_specific_widget_womens'){

        if( isMobile.iPad() ) {
            olapicjQuery('html').addClass('iPad');
        }

        // Var assignment
        containerId = e.elementId;
        widgetContainer = olapicjQuery("#" + containerId);
        photoContainer = widgetContainer.find(".olapic_widget_main");
        photoWrapper = widgetContainer.find(".olapic_widget_mainwrapper");
        
        // Plus sign
        photoContainer.append('<div class="sm_plussign"></div>');
        widgetContainer.find('.sm_plussign').click(function(){
            widgetContainer.find('ul.olapic_carousel li:eq(1) a img').click();
        });

        // Append photo source
        var photoSource = null;
        photoWrapper.find('ul.olapic_carousel li').each(function(){
            var photoSource = olapicjQuery(this).attr('class');
            olapicjQuery(this).append('<span class="' + photoSource + '"></span>');
        });

        // Resize function
        function resizeSimpleWidget(){
            var mainHeight = olapicjQuery('.one-third.column.last:eq(0) img').outerHeight();

            widgetContainer.height(mainHeight);

            var widgetHeight = widgetContainer.outerHeight();
            var widgetWidth = widgetContainer.outerWidth();

            photoContainer.width(mainHeight).height(mainHeight);

            photoContainerHeight = photoContainer.height();
            photoContainerWidth = photoContainer.width();

            photoContainer.find("ul.olapic_carousel li").each(function() {
                olapicjQuery(this).width(photoContainerHeight).height(photoContainerHeight);
            });
            photoContainer.find(".olapic_carousel").css({"left":-photoContainerHeight});

            if ( widgetContainer.find('.sm_headline').length ) {
                widgetContainer.find('.sm_headline').css({
                    'width': photoContainerHeight+'px',
                    'margin-left': -(photoContainerHeight/2)+'px',
                    'left': '50%'
                });
            }
            
        }

        // If mobile == 1, hide carousel, and do stuff for desktop (else)
        if (olapicjQuery('body').hasClass('mobile')) {
            widgetContainer.find(".carousel-navigation").hide();
        } else {
            // Move carousel-nav
            photoContainer.find(".carousel-navigation").prependTo(photoWrapper);

            // Calculate/set image size
            resizeSimpleWidget();
        }

        if ( isMobile.iPad() ) {
            olapicjQuery('.carousel-navigation').wrapAll('<div class="carousel-nav-container" />');
        }

        // Listen for resize
        olapicjQuery(window).resize(function() {
            resizeSimpleWidget();
        });

        window.addEventListener("orientationchange", function() {
            // Announce the new orientation number
            resizeSimpleWidget();
        }, false);
    }

    if(e.elementId == 'olapic_specific_widget2'){

        console.log('hello');
        // Var assignment
        containerId = e.elementId;
        mainWidget = olapicjQuery("#" + containerId);
        photoContainer = olapicjQuery("#" + containerId + " .olapic_widget_main");

        // Plus sign
        olapicjQuery("#" + containerId + " .olapic_widget_main").append('<div class="sm_plussign"></div>');
        mainWidget.find('.sm_plussign').click(function(){
            mainWidget.find('ul.olapic_carousel li:eq(1) a img').click();
        });

        function resizeLooksWidget(){
            // Set container height , save as var
            photoContainerHeight = Math.ceil(photoContainer.height());
            photoContainerWidth = Math.ceil(photoContainer.width());

            var myCrushHeight = olapicjQuery("#myCrush").outerHeight();
            var msgHeight = myCrushHeight - photoContainerWidth;
            
            photoContainer.height(photoContainerWidth);
            olapicjQuery("#" + containerId + " .sm_msg_bottom").width(photoContainerWidth).height(msgHeight);
            mainWidget.parent().css('max-height','initial');
            
            mainWidget.height(myCrushHeight);
            
            olapicjQuery("#" + containerId + " .olapic_widget_main ul.olapic_carousel li").each(function() {
                olapicjQuery(this).width(photoContainerWidth).height(photoContainerWidth);
                olapicjQuery(this).find('img').width(photoContainerWidth).height(photoContainerWidth);
            });
            
            olapicjQuery("#" + containerId + " .olapic_widget_main .olapic_carousel").css({"left":-(photoContainerWidth + 10)});

            if (olapicjQuery('html').hasClass('ie8') && document.documentElement.clientWidth < 1060) {
                olapicjQuery('#olapic_specific_widget2 .sm_msg_bottom span').addClass('ie8sizeone');
            } else if (olapicjQuery('html').hasClass('ie8') && document.documentElement.clientWidth < 971){
                olapicjQuery('#olapic_specific_widget2 .sm_msg_bottom span').addClass('ie8sizetwo');
            } else {
                olapicjQuery('#olapic_specific_widget2 .sm_msg_bottom span').removeClass('ie8sizeone').removeClass('ie8iesizetwo');;
            }
        }

        // Calculate/set image size
        resizeLooksWidget();

        // Listen for resize
        olapicjQuery(window).resize(function() {
            resizeLooksWidget();
        });
    }


}