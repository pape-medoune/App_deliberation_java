function verbose(label, message){
    if(!window.top.location.href.includes("tmzr_debug")&&!window.top.location.href.includes("tmzr_fs")){return;}
    console.log('%cThe Moneytizer - '+label, 'color: white; background: #ec144c;border-radius: 3px; padding: 2px', message);
}

verbose('Footer SlideIn', 'Initialized lib v3.3');

verbose('Footer SlideIn', 'Avoid blank space for sas_26328');
var css = '#sas_26328 { height:0px; }; #sas_relative_creative_26328, #sas_relative_creative_26328-1 {visibility: visible !important;} #sas_relative_creative_26328-1 {margin: 0!important;}',
    style = document.createElement('style');
window.top.document.head.appendChild(style)
style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}


window.setupFooterSlidein = function(args){
    verbose('Footer SlideIn', 'Received payload : '+JSON.stringify(args));

    if(args.exoticAmznSetup||args.exoticRTBSetup){
        window.setupExoticFS(args);
        return;
    }

    if(args.bidder&&args.height&&args.width){
        if(args.bidder=="appnexus"&&args.height=="1"&&args.width=="1"){
            verbose('Footer SlideIn', 'Native SlideIn for appnexus detected');
            args.height=250;
            args.width=300;
            args.background = true;
        }

        if(args.bidder=="triplelift"&&args.height=="1"&&args.width=="1"){
            verbose('Footer SlideIn', 'Native Footer for triplelift detected');
            args.height=250;
            args.width=728;
            args.background = true;
            args.footer = true;
        }

        if(args.bidder=="amx"&&args.height=="250"&&args.width=="728"){
            verbose('Footer SlideIn', 'Native Footer for amx detected');
            args.height=250;
            args.width=300;
            args.background = true;
            args.footer = true;
        }
    }

    let gumgumContainers = document.querySelectorAll('[id^="ad_is"]');
    gumgumContainers.forEach(
        function (currentValue, currentIndex, listObj) {
            if(currentValue.hasAttribute("data-gg-moat")){
                currentValue.remove();
            }
        }
    );

    if(window.top.document.getElementById("sas_iframe_26328")){
        window.top.document.getElementById("sas_iframe_26328").style.display = "none";
    }

    if(window.top.document.getElementById("sas_26328")){
        window.top.document.getElementById("sas_26328").style.display = "none";
    }

    if(window.top.document.getElementById("sas_iframe_fixed_26328-1")){
        window.top.document.getElementById("sas_iframe_fixed_26328-1").remove();
    }

    if(window.top.document.getElementById("sas_iframe_fixed_26328")){
        window.top.document.getElementById("sas_iframe_fixed_26328").remove();
    }

    //Missena handle refresh
    if(window.top.document.getElementById("msna-ad")){
        window.top.document.getElementById("msna-ad").remove();
    }

    //Footer lite handle refresh
    if(window.top.document.getElementById("sas_iframe_116434")){
        window.top.document.getElementById("sas_iframe_116434").style.display = "none";
    }

    if(window.top.document.getElementById("sas_116434")){
        window.top.document.getElementById("sas_116434").style.display = "none";
    }

    if(window.top.document.getElementById("sas_iframe_fixed_26328-1")){
        window.top.document.getElementById("sas_iframe_fixed_26328-1").remove();
    }

    if(window.top.document.getElementById("sas_iframe_fixed_26328")){
        window.top.document.getElementById("sas_iframe_fixed_26328").remove();
    }

    var iframeDoc = null;
    if(args.height==250&&!args.footer){
        verbose("Footer SlideIn", "Detected bid as Slide-in");
        window.setupSlideIn(args);
    } else {
        window.qcResize();
        window.setupFooter(args);
    }


}

bringToFront = function(){
    elList = document.getElementsByClassName("adsbygoogle");
    for(k = 0; k < elList.length; k++){
        if(elList[k].style.zIndex&&elList[k].style.zIndex>1000){
            verbose("Footer SlideIn - Previous", elList[k].style.zIndex);
            elList[k].style.zIndex = (elList[k].style.zIndex - 1)
            verbose("Footer SlideIn - Next", elList[k].style.zIndex);
        }
    }
}

window.setupSlideIn = function(args){
    verbose('SlideIn', 'Bid has been detected as footer -> setting up 26328-1');
    var slidein_container = document.createElement("div");
    slidein_container.id = 'sas_iframe_fixed_26328-1';
    slidein_container.setAttribute("style","width: 300px; height: 250px; margin-top: -125px; position: fixed; right: 0px; bottom: 50%; top: 50%; z-index: 2147483647; display:none;");

    verbose('SlideIn', 'Relative container has been generated');
    var sas_relative_container_26328_1 = document.createElement("div");
    sas_relative_container_26328_1.id = 'sas_relative_container_26328_1'
    sas_relative_container_26328_1.setAttribute("style","width:"+(args.width + 0)+"px; height:"+(args.height + 0)+"px; border:none; position: relative;");
    slidein_container.appendChild(sas_relative_container_26328_1);

    verbose('SlideIn', 'Iframe container has been generated');
    var sas_relative_creative_26328_1 = document.createElement("iframe");
    sas_relative_creative_26328_1.setAttribute("style","width:100%; height:100%; border:none;visibility:visible!important; overflow:hidden;"+(args.background ? "background: white;" : ""));
    sas_relative_creative_26328_1.setAttribute("allow","autoplay;fullscreen;")
    sas_relative_creative_26328_1.setAttribute("src","about:blank")
    sas_relative_creative_26328_1.id = 'sas_relative_creative_26328-1';
    sas_relative_container_26328_1.appendChild(sas_relative_creative_26328_1);

    verbose('SlideIn', 'Cross has been generated');
    var sas_26328_1_cross = document.createElement("div");
    sas_26328_1_cross.id = 'sas_26328-1_cross';
    sas_26328_1_cross.setAttribute("style", "cursor: pointer; position: absolute; right: 0px; top: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
    if(args.bidder!="gumgum"){
        sas_relative_container_26328_1.appendChild(sas_26328_1_cross);
    }
    verbose('SlideIn', '26328-1 Insertion in DOM -> end of body');
    window.top.document.body.append(slidein_container);

    verbose('SlideIn', 'Generating closing event 26328-1');
    window.top.document.addEventListener('click',function(e){
        if(typeof String().startsWith != 'function'){
            return;
        }

        if(e.target.id.startsWith("sas_26328-1_cross")||e.target.id.startsWith("sas_26328-1_cross_ico")){
            window.adsArea26328.isVisible = false;
            window.adsArea26328.isClosed = true;
            if(window.top.document.getElementById("sas_iframe_fixed_26328-1")){
                window.top.document.getElementById("sas_iframe_fixed_26328-1").style.display = "none";
            }
            verbose("SlideIn", "SlideIn closed");
        }
    });

    iframeDoc = window.top.document.getElementById("sas_relative_creative_26328-1").contentWindow.document;
    window.top.document.getElementById('sas_iframe_fixed_26328-1').style.display = "block";
    window.top.document.getElementById("sas_relative_creative_26328-1").setAttribute("marginheight", "0")
    window.top.document.getElementById("sas_relative_creative_26328-1").setAttribute("marginwidth", "0")
    window.top.document.getElementById("sas_relative_creative_26328-1").setAttribute("scrolling", "no")

    verbose("Footer SlideIn", "Rendering ad in footer");
    verbose("Footer SlideIn", iframeDoc);
    args.func(iframeDoc, args.hb_adid);
    bringToFront();
}

window.setupFooter = function(args){
    args.isMobile = false;
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){
        args.isMobile = true;
    }
    verbose('Footer', 'Bid has been detected as footer -> setting up 26328');
    var footer_container = document.createElement("div");
    footer_container.id = 'sas_iframe_fixed_26328'
    if(args.cornerAvailable&&args.isMobile){
        footer_container.setAttribute("style","width: 100vw; height: 90px; position: fixed; right: 0px; left: 0px; top: 0px; z-index: 2147483647; display: flex; justify-content: center; align-items: flex-end; display:none;");
    } else {
        footer_container.setAttribute("style","width: 100vw; height: 90px; position: fixed; right: 0px; left: 0px; bottom: 0px; z-index: 2147483647; display: flex; justify-content: center; align-items: flex-end; display:none;");
    }

    if(args.footerPositionTop){
        footer_container.setAttribute("style","width: 100vw; height: "+args.height+"px; position: fixed; right: 0px; left: 0px; top: 0px; z-index: 2147483647; display: flex; justify-content: center; align-items: flex-end; display:none;");
    }

    verbose('Footer', 'Relative container has been generated');
    var sas_relative_container_26328 = document.createElement("div");
    sas_relative_container_26328.id = 'sas_relative_container_26328'
    sas_relative_container_26328.setAttribute("style","width:"+(args.width + 0)+"px; height:"+(args.height + 0)+"px; border:none; position: relative;");
    footer_container.appendChild(sas_relative_container_26328);

    verbose('Footer', 'Iframe container has been generated');
    var sas_relative_creative_26328 = document.createElement("iframe");
    sas_relative_creative_26328.setAttribute("style","width:100%; height:100%; border:none;visibility:visible!important; overflow:hidden;");
    sas_relative_creative_26328.setAttribute("allow","autoplay;fullscreen;")
    sas_relative_creative_26328.setAttribute("src","about:blank")
    sas_relative_creative_26328.id = 'sas_relative_creative_26328';
    sas_relative_container_26328.appendChild(sas_relative_creative_26328);

    verbose('Footer', 'Cross has been generated');
    if (args.bidder != "missena") {
        var sas_26328_cross = document.createElement("div");
        sas_26328_cross.id = 'sas_26328_cross';
        if(args.cornerAvailable&&args.isMobile){
            sas_26328_cross.setAttribute("style", "pointer-events: auto; cursor: pointer; position: absolute; right: -20px; bottom: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
        } else {
            sas_26328_cross.setAttribute("style", "pointer-events: auto; cursor: pointer; position: absolute; right: -20px; top: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
        }

        if(args.footerPositionTop){
            sas_26328_cross.setAttribute("style", "pointer-events: auto; cursor: pointer; position: absolute; right: -20px; bottom: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
        }

        if(args.bidder!="gumgum"){
            sas_relative_container_26328.appendChild(sas_26328_cross);
        }
    }
    verbose('Footer', '26328 Insertion in DOM -> end of body');
    window.top.document.body.append(footer_container);

    verbose('Footer', 'Generating closing event 26328');

    window.top.document.addEventListener('click',function(e){
        if(typeof String().startsWith != 'function'){
            return;
        }

        if(e.target.id.startsWith("sas_26328_cross")||e.target.id.startsWith("sas_26328_cross_ico")){
            if(window.adsArea26328){
                window.adsArea26328.isVisible = false;
                window.adsArea26328.isClosed = true;
            }

            if(window.adsArea116434){
                window.adsArea116434.isVisible = false;
                window.adsArea116434.isClosed = true;
            }
            if(window.top.document.getElementById("sas_iframe_fixed_26328")){
                window.top.document.getElementById("sas_iframe_fixed_26328").style.display = "none";
            }
            verbose("Footer", "Footer closed");
        }
    });

    iframeDoc = window.top.document.getElementById("sas_relative_creative_26328").contentWindow.document;
    window.top.document.getElementById('sas_iframe_fixed_26328').style.display = "flex";
    window.top.document.getElementById('sas_iframe_fixed_26328').style.pointerEvents = "none";
    window.top.document.getElementById("sas_relative_creative_26328").setAttribute("marginheight", "0")
    window.top.document.getElementById("sas_relative_creative_26328").setAttribute("marginwidth", "0")
    window.top.document.getElementById("sas_relative_creative_26328").setAttribute("scrolling", "no")
    window.top.document.getElementById("sas_relative_creative_26328").style.pointerEvents = "auto";

    verbose("Footer SlideIn", "Rendering ad in footer");
    verbose("Footer SlideIn", iframeDoc);
    args.func(iframeDoc, args.hb_adid);
    bringToFront();
}

window.qcResize = function(){
    if(window.top.document.getElementById("qc-cmp2-persistent-link")&&window.top.document.getElementById("qc-cmp2-persistent-link").getElementsByTagName("img")){
        const tmzrQCLabelSettings = window.top.document.getElementById("qc-cmp2-persistent-link").getElementsByTagName("img")[0].outerHTML;
        window.top.document.getElementById("qc-cmp2-persistent-link").innerHTML = tmzrQCLabelSettings;
        window.top.document.getElementById("qc-cmp2-persistent-link").getElementsByTagName("img")[0].style.marginRight = "0px";
        window.top.document.getElementById("qc-cmp2-persistent-link").style.padding = "5px 10px";
    }
}

window.setupExoticFS = function(args){
    if(args.exoticAmznSize){
        args.height = args.exoticAmznSize.split("x")[1];
        args.width = args.exoticAmznSize.split("x")[0];
    }

    if(args.exoticRTBSize){
        args.height = args.exoticRTBSize.split("x")[1];
        args.width = args.exoticRTBSize.split("x")[0];
    }

    if(args.height==250){
        if(document.getElementById("sas_26328")) {
            document.getElementById("sas_26328").style = "position: fixed; right: 0px; top: calc(50% - ("+args.height+"px / 2)); z-index: 2147483647; width: " + args.width + "px";
        }
        verbose('SlideIn', 'Cross has been generated');
        var sas_26328_1_cross = document.createElement("div");
        sas_26328_1_cross.id = 'sas_26328-1_cross';
        sas_26328_1_cross.setAttribute("style", "cursor: pointer; position: absolute; right: 0px; top: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
        document.getElementById("sas_26328").appendChild(sas_26328_1_cross);
    }

    if(args.height!=250){
        if(document.getElementById("sas_26328")) {
            document.getElementById("sas_26328").style = "position: fixed; bottom: 0px; left: 50%; transform: translateX(-50%); z-index: 2147483647; height: " + args.height + "px";
            if(window.adsArea26328.topFooter){
                document.getElementById("sas_26328").classList.add("tmzr_footer_top");
                document.getElementById("sas_26328").style = "position: fixed; top: 0px; left: 50%; transform: translateX(-50%); z-index: 2147483647; height: " + args.height + "px";
            }
        }
        verbose('Footer', 'Cross has been generated');
        var sas_26328_cross = document.createElement("div");
        sas_26328_cross.id = 'sas_26328_cross';
        if(args.cornerAvailable&&args.isMobile){
            sas_26328_cross.setAttribute("style", "pointer-events: auto; cursor: pointer; position: absolute; right: -20px; bottom: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
        } else {
            sas_26328_cross.setAttribute("style", "pointer-events: auto; cursor: pointer; position: absolute; right: -20px; top: -25px; z-index: 99999; background: url('https://ced-ns.sascdn.com/diff/templates/images/close-retina.png');background-position:center;background-size:200%;width:25px;height:25px;");
        }

        if(!args.exoticRTBSetup){
            document.getElementById("sas_26328").appendChild(sas_26328_cross);
        }
    }



    verbose('Footer', 'Generating closing event 26328');
    window.top.document.addEventListener('click',function(e){
        if(typeof String().startsWith != 'function'){
            return;
        }

        if(e.target.id.startsWith("sas_26328_cross")||e.target.id.startsWith("sas_26328-1_cross")||e.target.id.startsWith("sas_26328_cross_ico")){
            if(window.adsArea26328){
                window.parent.adsArea26328.isVisible = false;
                window.parent.adsArea26328.isClosed = true;
            }

            if(window.adsArea116434){
                window.adsArea116434.isVisible = false;
                window.adsArea116434.isClosed = true;
            }

            if(window.top.document.getElementById("sas_26328_iframe")){
                window.top.document.getElementById("sas_26328_iframe").style.display = "none";
            }

            if(window.top.document.getElementById("sas_26328_cross")){
                window.top.document.getElementById("sas_26328_cross").style.display = "none";
            }

            if(window.top.document.getElementById("sas_26328-1_cross")){
                window.top.document.getElementById("sas_26328-1_cross").style.display = "none";
            }

            verbose("Footer", "Footer closed -");
        }
    });
}