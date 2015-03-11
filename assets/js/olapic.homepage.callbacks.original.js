function olapicAfterWidgetRender(e){
    var photoContainerWidth, photoContainerHeight, containerId, widgetContainer, photoContainer, photoWrapper;
    if(e.elementId == 'olapic_specific_widget'){
        // Var assignment
        containerId = e.elementId;
        widgetContainer = olapicjQuery("#" + containerId);
        photoContainer = widgetContainer.find(".olapic_widget_main");
        photoWrapper = widgetContainer.find(".olapic_widget_mainwrapper");
        
        // Set widget height
        widgetContainer.height(olapicjQuery("#myCrush").outerHeight());
        
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

        // If mobile == 1, hide carousel, and do stuff for desktop (else)
        if (olapicjQuery('body').hasClass('mobile')) {
            widgetContainer.find(".carousel-navigation").hide();
        } else {
            // Move carousel-nav
            photoContainer.find(".carousel-navigation").prependTo(photoWrapper);

            // Calculate/set image size
            resizeSimpleWidget();
        }

        // Listen for resize
        window.addEventListener("resize", function (e) {
            resizeSimpleWidget();
        });

        // Resize function
        function resizeSimpleWidget(){
            photoContainer.width(widgetContainer.outerHeight()).height(widgetContainer.outerHeight());
            if (photoWrapper.outerWidth() < photoWrapper.outerHeight()){
                photoContainer.width(widgetContainer.outerWidth()).height(widgetContainer.outerWidth());
                
            }
            photoContainerHeight = photoContainer.height();
            photoContainerWidth = photoContainer.width();
            photoContainer.find("ul.olapic_carousel li").each(function() {
                olapicjQuery(this).width(photoContainerHeight).height(photoContainerHeight);
            });
            photoContainer.find(".olapic_carousel").css({"left":-photoContainerHeight});
        }
    }

    if(e.elementId == 'olapic_specific_widget2'){
        // Var assignment
        containerId = e.elementId;
        mainWidget = olapicjQuery("#" + containerId);
        photoContainer = olapicjQuery("#" + containerId + " .olapic_widget_main");

        // Plus sign
        olapicjQuery("#" + containerId + " .olapic_widget_main").append('<div class="sm_plussign"></div>');
        mainWidget.find('.sm_plussign').click(function(){
            mainWidget.find('ul.olapic_carousel li:eq(1) a img').click();
        });

        // Calculate/set image size
        resizeLooksWidget();

        // Listen for resize
        // Listen for resize
        window.addEventListener("resize", function (e) {
            resizeLooksWidget();
        });

        function resizeLooksWidget(){
            // Set container height , save as var
            photoContainerHeight = Math.ceil(photoContainer.height());
            photoContainerWidth = Math.ceil(photoContainer[0].getBoundingClientRect().width);

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
            
            olapicjQuery("#" + containerId + " .olapic_widget_main .olapic_carousel").css({"left":-photoContainerWidth});
        }
    }


}