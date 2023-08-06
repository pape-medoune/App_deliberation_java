const verboseLibWatermark = function(message){
    const queryString = window.location.search;
    if(!queryString.includes("tmzr_lib_watermark")&&!queryString.includes("tmzr_debug")){
        return;
    }
    console.log('%cThe Moneytizer - Watermark', 'color:white;background:#ec144c;border-radius:3px;padding:2px', message);
}

const setupWatermark = function(args){
    try{
        verboseLibWatermark("Trying to add watermark on "+args.id);
        if(args.overbidRTB){
            setTimeout(() => { safePlaceWatermark(args) },2000)
        } else {
            safePlaceWatermark(args);
        }
    } catch(e){
        console.error(e);
    }
}

const safePlaceWatermark = function(args, retry = true){
    verboseLibWatermark(args);

    if(args.id=="26328"&&args.bidder=="gumgum"){
        verboseLibWatermark("Bid gumgum for 26328, watermark placement aborted.");
        return;
    }

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

    if(args.isMobile&&args.id=="26328"){
        return;
    }

    if(typeof args.id !== 'undefined' && exceptionFormat.includes((args.id+""))===true){
        verboseLibWatermark("include " + args.id);
        if((args.id == "26328")&&document.getElementById("sas_relative_creative_26328-1")){
            args.iframeDoc = document.getElementById("sas_relative_creative_26328-1").contentWindow.document;
        }

        if((args.id == "26328")&&document.getElementById("sas_relative_creative_26328")){
            args.iframeDoc = document.getElementById("sas_relative_creative_26328").contentWindow.document;
        }
        
        if((args.id == "26328")&&(args.exoticAmznFS)&&document.getElementById("sas_26328_iframe")){
            args.iframeDoc = document.getElementById("sas_26328_iframe").contentWindow.document;
        }

        if(args.id=="80234"&&document.getElementById("80234")&&document.getElementById("80234").getElementsByTagName("iframe")[0]){
            args.iframeDoc = document.getElementById("80234").getElementsByTagName("iframe")[0].contentWindow.document;
        }
        verboseLibWatermark(args);
    }

    if(args.overbidRTB){
        verboseLibWatermark("RTB overbid detected");
        if(window.parent.document.getElementById("sas_"+args.id).getElementsByTagName("iframe")[0]){
            args.iframeDoc = window.parent.document.getElementById("sas_"+args.id).getElementsByTagName("iframe")[0].contentWindow.document;
        }
        if(args.id==26328){
            args.iframeDoc = window.document.getElementById("sas_iframe_26328").contentWindow.document;
        }
    }

    if(typeof args.iframeDoc === 'undefined'||args.iframeDoc == null){
        verboseLibWatermark("👾 Undefined element, retry in 1.5s for "+args.id+". 👾");
        setTimeout(() => {
            if(retry){
                safePlaceWatermark(args, false);
            }
        },1500)
        return;
    }

    let attMWidth = sMWidth = 8;
    let attMHeight = sMHeight = 8;

    verboseLibWatermark("All setup done, trying to add watermark now on :");
    verboseLibWatermark(args.iframeDoc);

    if(!args.iframeDoc.body){
        verboseLibWatermark("👾 Undefined body, retry in 1.5s 👾");
        setTimeout(() => {
            if(!args.iframeDoc.getElementById("tmzr_watermark")&&retry){
                verboseLibWatermark("Failed to place watermark for "+args.id+". No element detected after 1.5s")
                safePlaceWatermark(args, false);
            }
        },1500)
        return;
        verboseLibWatermark(args.iframeDoc);
    }

    if(args.iframeDoc.body.getAttribute("marginwidth")!=null){
        attMWidth = args.iframeDoc.body.getAttribute("marginwidth");
    }

    if(args.iframeDoc.body.getAttribute("marginheight")!=null){
        attMHeight = args.iframeDoc.body.getAttribute("marginheight");
    }

    if(!isNaN(args.iframeDoc.body.style.margin)){
        sMWidth = sMHeight = args.iframeDoc.body.style.margin;
    }

    let computedMWidth = Math.min(sMWidth, attMWidth);
    let computedMHeight = Math.min(sMHeight, attMHeight);


    let watermarkElement = document.createElement("a");
    watermarkElement.target="blank";
    watermarkElement.href="https://us.themoneytizer.com/?utm_source=filling_ads&utm_medium=banner&utm_campaign=clicktmlogo";
    watermarkElement.style.display = "flex";
    watermarkElement.id = "tmzr_watermark";
    watermarkElement.style.position = "fixed";
    watermarkElement.style.background = "rgba(255,255,255,0.8)";
    watermarkElement.style.bottom = ((computedMHeight+1)+"px");
    watermarkElement.style.left = ((computedMWidth+1)+"px");
    watermarkElement.style.zIndex = "999999";
    watermarkElement.style.height = '14px';
    watermarkElement.style.width = '20px';
    watermarkElement.style.padding = "1px";
    watermarkElement.style.borderRadius = '0 3px 0px 0';

    let watermarkImg = document.createElement("img");
    watermarkImg.src = "https://ads.themoneytizer.com/media/tm.png";
    watermarkImg.style.width = "18px";
    watermarkImg.style.height = "12px";

    watermarkElement.append(watermarkImg);

    args.iframeDoc.body.append(watermarkElement);

    setTimeout(() => {
        if(!args.iframeDoc.getElementById("tmzr_watermark")&&retry){
            verboseLibWatermark("Failed to place watermark for "+args.id+". No element detected after 1.5s")
            safePlaceWatermark(args, false);
        }
    },1500)
}

const exceptionFormat = ["26328", "26325", "80234", "116434"];