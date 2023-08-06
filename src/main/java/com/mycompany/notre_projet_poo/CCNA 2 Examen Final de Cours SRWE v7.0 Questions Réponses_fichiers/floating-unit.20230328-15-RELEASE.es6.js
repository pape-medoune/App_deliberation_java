/*! 20230328-15-RELEASE */

(()=>{class t{constructor(t,e,i,s){this.trcManager=e,this.placementData=s,this.contentElement=i,this.isMobile="PHON"===TRC.platform_code,this.disableFloatingUnit=!1,this.widgetItems=[],this.timer={start:null,remaining:null,timerId:null},this.shouldCarousel=this.checkIfShouldCarousel(),this.closeBtn=t.unit.closeBtn,this.closeBtnWrapper=t.unit.closeBtnWrapper,this.state={feedInViewport:!1,floatingUnitIsVisible:!1,visibleItemIndex:0,CarouselIterations:0,isCarouseling:!1,floatingUnitFirstShown:!1,feedFirstEntered:!1},this.config=this.getFloatingUnitConfigs(t),TRC.CustomModulesManager.runHook("floating-unit-init",null,this,t),this.renderFloatingUnit(),this.observeHideFloatingUnitElem(),this.listenToVideoSlider(),this.shouldHandleReadMore()&&this.handleReadMore(),this.listenToTrcReset(),this.listenToDocumentVisibilityChange()}shouldHandleReadMore(){return!this.config||!TRC.util.isDefined(this.config.shouldHandleReadMore)||this.config.shouldHandleReadMore}shouldHideUnitIfReadMoreVisible(){return this.config.shouldHandleReadMore&&TRC.readMoreVisible}checkIfShouldCarousel(){return!0}listenToDocumentVisibilityChange(){TRC.dom.on(document,"visibilitychange",this.handleTabVisibilityChange.bind(this))}removeClickOverlay(){this.floatingUnitElement.className.indexOf(t.CSS_CLASSES.DISABLED_CLICKS)>-1&&TRC.Timeout.set(()=>{TRC.dom.removeClass(this.floatingUnitElement,t.CSS_CLASSES.DISABLED_CLICKS)},this.config.enableItemClickAfterNumOfMilliseconds)}renderFloatingUnit(){this.setCSS(),this.floatingUnitElement=this.createFloatingUnitHtml(),TRC.dom.removeClass(this.contentElement,"tbl-hidden"),this.floatingUnitElement.appendChild(this.contentElement),document.body.appendChild(this.floatingUnitElement),t.waitFor(()=>this.isWidgetWithItems(),()=>this.showFloatingUnit())}listenToVideoSlider(){this.isVideoSliderActive=!!document.querySelector(t.ACTIVE_VIDEO),this.isVideoSliderActive&&this.onVideoSlider(!0),TRC.listen("videoSliderOn",this.onVideoSlider.trcBind(this,!0)),TRC.listen("videoSliderOff",this.onVideoSlider.trcBind(this,!1))}handleReadMore(){TRC.readMoreVisible?this.listenToReadMoreClick():this.listenToReadMoreRender()}listenToReadMoreRender(){this.readMoreListener=TRC.listen("readMoreRendered",this.onReadMoreRender.trcBind(this))}listenToReadMoreClick(){this.readMoreClickListener||(this.readMoreClickListener=TRC.listen("readMoreClicked",this.showFloatingUnit.trcBind(this),!0))}listenToTrcReset(){TRC.listen("trcReset",this.onTrcReset.trcBind(this))}onVideoSlider(t){this.isVideoSliderActive=t,this.isVideoSliderActive?this.hideFloatingUnit(!0):this.showFloatingUnit()}onReadMoreRender(){this.readMoreListener.remove(),this.listenToReadMoreClick(),this.hideFloatingUnit()}onTrcReset(){this.floatingUnitElement&&this.floatingUnitElement.parentNode&&this.floatingUnitElement.parentNode.removeChild(this.floatingUnitElement)}startTimeout(t){this.timer.timerId||(this.timer.remaining=t||this.config.hideAfter),this.timer.start=new Date,this.timer.timerId=TRC.Timeout.set(()=>this.hideFloatingUnit(),this.timer.remaining)}pauseTimeout(){this.timer.remaining-=new Date-this.timer.start,TRC.Timeout.clear(this.timer.timerId)}resumeCarouselTimers(){this.timer.timerId?this.startTimeout():this.shouldCarousel&&this.playCarousel()}handleTabVisibilityChange(){"hidden"===document.visibilityState?this.stopCarousel():this.resumeCarouselTimers()}setVisibleItemIndex(){++this.state.visibleItemIndex===this.widgetItems.length&&(this.state.visibleItemIndex=0),this.state.visibleItemIndex+1===this.widgetItems.length&&this.state.CarouselIterations++}shouldShowNextItem(){this.config.maxCarouselIterations===t.INFINITE_CAROUSEL_ITERATIONS||this.state.CarouselIterations<this.config.maxCarouselIterations?this.showNextItem():this.state.floatingUnitIsVisible?this.timer.timerId||this.startTimeout():this.stopCarousel()}playCarousel(){!this.state.isCarouseling&&this.widgetItems.length>0&&this.shouldCarousel&&(this.state.isCarouseling=!0,this.carouselItemsIterationInterval=t.startTimer(this.shouldShowNextItem.bind(this),this.config.carouselItemsDisplayInMilliseconds))}stopCarousel(){this.state.isCarouseling&&(this.state.isCarouseling=!1,t.stopTimer(this.carouselItemsIterationInterval))}isWidgetWithItems(){return this.floatingUnitElement.getElementsByClassName("videoCube").length}handleCloseBtnClick(t){t.preventDefault(),this.disableFloatingUnit=!0,this.hideFloatingUnit()}handleFloatingUnitHover(){this.timer.timerId?this.pauseTimeout():this.stopCarousel()}createCloseButtonElement(){return t.createNewElement("div",null,this.closeBtnWrapper,this.getCloseButtonMarkup(),[{click:this.handleCloseBtnClick.bind(this)}])}showNextItem(){const e=this.widgetItems[this.state.visibleItemIndex];this.setVisibleItemIndex();const i=this.widgetItems[this.state.visibleItemIndex];i.style.zIndex=parseInt(e.style.zIndex,10)+1,this.disableClicks(),TRC.dom.addClass(i,`${t.CSS_CLASSES.SHOW}`),e&&TRC.dom.removeClass(e,t.CSS_CLASSES.SHOW)}disableClicks(){-1===this.floatingUnitElement.className.indexOf(t.CSS_CLASSES.DISABLED_CLICKS)&&(TRC.dom.addClass(this.floatingUnitElement,`${t.CSS_CLASSES.DISABLED_CLICKS}`),this.removeClickOverlay())}hideFloatingUnit(t=!1){this.state.floatingUnitIsVisible&&(TRC.dom.removeClass(this.floatingUnitElement,"in-viewport"),this.state.floatingUnitIsVisible=!1,this.stopCarousel(),t||TRC.intersections.unobserve(this.observerId))}observeHideFloatingUnitElem(){const e=t=>{const e={targetElement:document.querySelector(t),onEnter:()=>this.onEnterHideFloatingUnitElement(),onExit:t=>this.onExitHideFloatingUnitElement(t)};this.observerId=TRC.intersections.observe(e)};t.waitFor(()=>document.querySelector(this.config.hideFloatingUnitElemSelectorWidget),()=>e(this.config.hideFloatingUnitElemSelectorWidget)),t.waitFor(()=>document.querySelector(this.config.hideFloatingUnitElemSelectorFeed),()=>e(this.config.hideFloatingUnitElemSelectorFeed))}getCloseButtonMarkup(){return`<div class="${this.closeBtn}">\n               <svg width="10px" height="10px" viewBox="0 0 10 10">\n                 <defs></defs>\n                 <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">\n                   <g id="icons" transform="translate(-23.000000, -130.000000)">\n                      <polygon id="Desktop-Close-initial" points="33 131.208868 31.7911325 130 28 133.791132 24.2088675 130 23 131.208868 26.7911325 135 23 138.791132 24.2088675 140 28 136.208868 31.7911325 140 33 138.791132 29.2088675 135"></polygon>\n                   </g>\n                 </g>\n               </svg>\n             </div>`}onExitHideFloatingUnitElement(t){this.shouldDisableFloatingUnitBelowFeed(t)||(this.state.feedInViewport=!1,this.state.feedFirstEntered&&this.showFloatingUnit())}shouldDisableFloatingUnitBelowFeed(t){return!this.trcManager.global["disable-display-floating-unit-below-feed"]&&t.boundingClientRect.y<0}getFloatingUnitConfigs(){}createFloatingUnitElement(){}createFloatingUnitHtml(){}showFloatingUnit(){}setCSS(){}onEnterHideFloatingUnitElement(){this.state.feedInViewport=!0,this.state.feedFirstEntered=!0,this.hideFloatingUnit(!0)}static startTimer(t,e){return TRC.Interval.set(t,e)}static stopTimer(t){t&&TRC.Interval.clear(t)}static createNewElement(t,e,i,s,n,o){if(!t)return!1;const l=document.createElement(t);return l.id=e||"",l.className=i||"",l.innerHTML=s||"",o&&o.forEach(t=>{const e=Object.keys(t)[0],i=t[e];l.setAttribute(e,i)}),n&&n.forEach(t=>{const e=Object.keys(t)[0],i=t[e];TRC.dom.on(l,e,i)}),l}static waitFor(e,i,s,n=50,o=100,l=0){if(!e()&&l<o)return++l,void setTimeout(()=>{t.waitFor(e,i,s,n,o,l)},n);l<o?i():s&&s()}}t.CSS_CLASSES={SHOW:"tbl-floating-unit-show-item",DISABLED_CLICKS:"tbl-floating-unit-disabled-clicks"},t.INFINITE_CAROUSEL_ITERATIONS="infinity",t.ACTIVE_VIDEO="#_cm-css-reset._cm-ad-active",TRC.FloatingUnit=t})();