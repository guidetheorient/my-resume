(function(window){var svgSprite='<svg><symbol id="icon-arrowright" viewBox="0 0 1024 1024"><path d="M864 544q0 27-18.5 45.5l-325.5 325.5q-19.5 18.5-45.5 18.5-25.5 0-45-18.5l-37.5-37.5q-19-19-19-45.5t19-45.5l146.5-146.5-352 0q-26 0-42.25-18.75t-16.25-45.25l0-64q0-26.5 16.25-45.25t42.25-18.75l352 0-146.5-147q-19-18-19-45t19-45l37.5-37.5q19-19 45-19 26.5 0 45.5 19l325.5 325.5q18.5 17.5 18.5 45z"  ></path></symbol><symbol id="icon-code" viewBox="0 0 1098 1024"><path d="M352.585143 799.414857l-28.562286 28.562286q-5.705143 5.705143-13.129143 5.705143t-13.129143-5.705143l-266.276571-266.276571q-5.705143-5.705143-5.705143-13.129143t5.705143-13.129143l266.276571-266.276571q5.705143-5.705143 13.129143-5.705143t13.129143 5.705143l28.562286 28.562286q5.705143 5.705143 5.705143 13.129143t-5.705143 13.129143l-224.585143 224.585143 224.585143 224.585143q5.705143 5.705143 5.705143 13.129143t-5.705143 13.129143zM690.285714 189.696l-213.138286 737.718857q-2.304 7.424-8.850286 11.154286t-13.421714 1.426286l-35.437714-9.728q-7.424-2.304-11.154286-8.850286t-1.426286-14.006857l213.138286-737.718857q2.304-7.424 8.850286-11.154286t13.421714-1.426286l35.437714 9.728q7.424 2.304 11.154286 8.850286t1.426286 14.006857zM1065.728 561.700571l-266.276571 266.276571q-5.705143 5.705143-13.129143 5.705143t-13.129143-5.705143l-28.562286-28.562286q-5.705143-5.705143-5.705143-13.129143t5.705143-13.129143l224.585143-224.585143-224.585143-224.585143q-5.705143-5.705143-5.705143-13.129143t5.705143-13.129143l28.562286-28.562286q5.705143-5.705143 13.129143-5.705143t13.129143 5.705143l266.276571 266.276571q5.705143 5.705143 5.705143 13.129143t-5.705143 13.129143z"  ></path></symbol><symbol id="icon-weixin" viewBox="0 0 1024 1024"><path d="M571.600896 511.833088c-10.99776 0-21.00224 9.00096-21.00224 21.00224 0 8.00768 10.00448 19.00544 21.00224 19.00544 15.0016 0 25.99936-10.00448 25.99936-19.00544C597.600256 520.834048 586.602496 511.833088 571.600896 511.833088L571.600896 511.833088zM504.600576 413.836288c15.99488 0 25.99936-9.99424 25.99936-25.99936 4.99712-33.00352-56.00256-33.00352-56.00256 0 0 13.0048 7.00416 22.00576 22.00576 25.00608C499.593216 413.836288 502.593536 413.836288 504.600576 413.836288L504.600576 413.836288zM512.598016 66.833408c-246.99904-0.99328-444.99968 201.00096-446.0032 444.99968 0 164.00384 89.00608 307.00544 220.99968 385.00352 164.00384 103.99744 412.99968 68.99712 540.0064-70.00064 106.99776-106.99776 157.99296-274.00192 114.00192-432.9984C889.593856 203.834368 718.596096 66.833408 512.598016 66.833408L512.598016 66.833408zM428.599296 624.841728c-25.00608 0-44.00128-4.00384-71.99744-12.00128l-73.00096 36.99712 21.00224-62.0032c-55.00928-38.99392-82.00192-84.992-82.00192-137.99424 0-48.9984 19.99872-89.99936 59.99616-123.00288 39.99744-33.9968 88.99584-50.9952 146.00192-50.9952 99.9936 0 190.0032 58.99264 205.99808 143.99488-7.00416-1.9968-12.99456-3.00032-18.9952-3.00032-98.00704 0-175.0016 76.00128-175.0016 164.00384 0 15.0016 1.9968 27.99616 6.00064 42.99776-2.00704 1.00352-4.00384 1.00352-6.00064 1.00352l-6.00064 0L428.599296 624.841728zM730.597376 695.835648l15.0016 51.99872-54.99904-30.99648c-35.00032 7.00416-56.00256 10.99776-63.00672 10.99776-96.99328 0-173.99808-67.00032-173.99808-149.00224 0-41.99424 16.9984-76.99456 50.00192-105.99424 33.9968-28.99968 74.99776-44.00128 123.99616-44.00128 92.0064 0 175.0016 67.00032 175.0016 149.99552C802.594816 622.834688 774.598656 663.835648 730.597376 695.835648L730.597376 695.835648zM360.595456 362.841088c-15.99488 0-30.99648 9.99424-30.99648 24.99584 0 16.00512 15.99488 25.99936 30.99648 25.99936s25.99936-9.99424 25.99936-25.99936C383.594496 372.835328 374.593536 364.837888 360.595456 362.841088L360.595456 362.841088zM685.602816 511.833088c-12.00128 0-21.00224 9.00096-21.00224 21.00224 0 9.00096 9.99424 19.00544 21.00224 19.00544 12.99456 0 24.99584-10.00448 24.99584-19.00544C705.601536 521.837568 697.593856 514.833408 685.602816 511.833088z"  ></path></symbol><symbol id="icon-qq" viewBox="0 0 1024 1024"><path d="M512 62C263.4 62 62 263.4 62 512s201.4 450 450 450 450-201.4 450-450S760.6 62 512 62zM759.6 652.3c-11.6 10.9-31.6-1-50.8-27.5-8.4 22.5-19.2 43.2-31.8 61.8 27.1 9.7 44.6 24.8 44.6 41.9 0 29.4-52.1 53.3-116.5 53.3-38.2 0-71.9-8.4-93.2-21.3-21.1 13-55 21.3-93.1 21.3-64.4 0-116.5-23.8-116.5-53.3 0-16.8 17.5-32.1 44.5-41.9-12.8-18.6-23.4-39.3-31.8-61.8-19.2 26.4-39.1 38.4-50.7 27.5-15.8-14.9-9.9-67.6 13.8-117.5 5.4-11.4 11.2-21.7 17.3-30.6 3.3-145.3 99-261.9 216.4-261.9l0.4 0c117.4 0 213.1 116.5 216.4 261.9 6 8.9 11.8 19.2 17.3 30.6C769.3 584.7 775.5 637.5 759.6 652.3z"  ></path></symbol><symbol id="icon-triangle2" viewBox="0 0 1024 1024"><path d="M1005.056 243.008C1017.6 255.616 1024 270.656 1024 288c0 17.408-6.4 32.384-18.944 44.992l-448.064 447.936C544.448 793.664 529.344 800 512 800c-17.408 0-32.448-6.336-44.992-18.944l-448-448.064C6.464 320.32 0 305.408 0 288c0-17.344 6.464-32.384 18.944-44.992 12.672-12.672 27.648-18.944 44.928-18.944L960 224.064C977.344 224 992.32 230.336 1005.056 243.008z"  ></path></symbol><symbol id="icon-github" viewBox="0 0 1024 1024"><path d="M512 0c-282.72 0-512 235.2-512 525.024 0 232 146.752 428.576 350.176 498.048 3.2 0.672 5.952 0.928 8.672 0.928 18.976 0 26.272-13.952 26.272-26.048 0-12.576-0.448-45.472-0.672-89.376-19.2 4.352-36.352 6.176-51.648 6.176-98.528 0-120.896-76.576-120.896-76.576-23.328-60.576-56.928-76.8-56.928-76.8-44.576-31.328-0.224-32.224 3.2-32.224 0.224 0 0.224 0 0.224 0 51.424 4.576 78.4 54.4 78.4 54.4 25.6 44.8 59.872 57.376 90.528 57.376 24 0 45.728-7.776 58.528-13.728 4.576-33.824 17.824-56.928 32.448-70.176-113.6-13.248-233.152-58.272-233.152-259.424 0-57.376 19.872-104.224 52.576-140.8-5.248-13.248-22.848-66.752 5.024-138.976 0 0 3.648-1.152 11.424-1.152 18.528 0 60.352 7.072 129.376 55.072 40.928-11.648 84.576-17.376 128.224-17.6 43.424 0.224 87.328 5.952 128.224 17.6 69.024-48 110.848-55.072 129.376-55.072 7.776 0 11.424 1.152 11.424 1.152 27.872 72.224 10.272 125.696 5.024 138.976 32.672 36.8 52.576 83.648 52.576 140.8 0 201.6-119.776 245.952-233.824 258.976 18.272 16.224 34.752 48.224 34.752 97.152 0 70.176-0.672 126.848-0.672 144 0 12.352 7.072 26.272 26.048 26.272 2.752 0 5.952-0.224 9.152-0.928 203.648-69.472 350.176-266.272 350.176-498.048 0-289.824-229.248-525.024-512-525.024z"  ></path></symbol><symbol id="icon-preview" viewBox="0 0 1024 1024"><path d="M976.474353 571.934118c-8.402824 10.24-209.588706 249.946353-464.474353 249.946353S55.928471 582.174118 47.495529 571.934118l-17.468235-21.112471 17.468235-21.142588C55.928471 519.469176 257.084235 279.762824 512 279.762824s456.071529 239.706353 464.474353 249.916235l17.468235 21.142588L976.474353 571.934118zM512 344.816941c-184.470588 0-343.943529 149.564235-397.492706 205.974588 53.669647 56.350118 213.443765 206.034824 397.492706 206.034824 184.470588 0 343.943529-149.564235 397.492706-205.974588C855.823059 494.471529 696.048941 344.816941 512 344.816941zM512 691.772235c-75.203765 0-136.372706-63.247059-136.372706-140.950588s61.168941-140.950588 136.372706-140.950588 136.372706 63.247059 136.372706 140.950588S587.173647 691.772235 512 691.772235zM512 474.925176c-40.478118 0-73.426824 34.063059-73.426824 75.926588s32.948706 75.896471 73.426824 75.896471 73.426824-34.032941 73.426824-75.896471S552.478118 474.925176 512 474.925176z"  ></path></symbol><symbol id="icon-mail" viewBox="0 0 1024 1024"><path d="M512.737524 8.821841C233.289143 8.821841 6.889651 234.343619 6.889651 512.581079c0 278.235429 226.399492 503.738921 505.847873 503.738921 279.253333 0 505.658921-225.50146 505.658921-503.738921C1018.396444 234.343619 791.903492 8.821841 512.737524 8.821841L512.737524 8.821841zM801.483175 676.959492c0 22.759619-18.472635 41.124571-41.315556 41.124571L265.002667 718.084063c-22.729143 0-41.315556-18.364952-41.315556-41.124571L223.687111 348.07873c0-3.565714 1.263746-6.779937 1.958603-10.114032l268.814222 267.745524c3.937524 3.902984 9.124571 5.96927 14.67327 5.96927 5.420698 0 10.731683-2.18819 14.646857-5.96927l274.592508-273.601016c1.958603 4.926984 3.226413 10.207492 3.226413 15.967492l0 328.880762L801.483175 676.95746 801.483175 676.959492zM265.002667 307.051683l495.280762 0c1.507556 0 2.651429 0.688762 4.167111 0.806603L509.013333 562.159746 254.843937 309.002159C258.186159 308.191492 261.416635 307.051683 265.002667 307.051683L265.002667 307.051683z"  ></path></symbol><symbol id="icon-preview1" viewBox="0 0 1024 1024"><path d="M1020.061538 494.276923C927.507692 307.2 734.523077 177.230769 512 177.230769S96.492308 307.2 3.938462 494.276923c-5.907692 11.815385-5.907692 25.6 0 35.446154C96.492308 716.8 289.476923 846.769231 512 846.769231s415.507692-129.969231 508.061538-317.046154c5.907692-11.815385 5.907692-23.630769 0-35.446154zM512 728.615385c-120.123077 0-216.615385-96.492308-216.615385-216.615385s96.492308-216.615385 216.615385-216.615385 216.615385 96.492308 216.615385 216.615385-96.492308 216.615385-216.615385 216.615385z m0-354.461539c-76.8 0-137.846154 61.046154-137.846154 137.846154s61.046154 137.846154 137.846154 137.846154 137.846154-61.046154 137.846154-137.846154-61.046154-137.846154-137.846154-137.846154z"  ></path></symbol><symbol id="icon-Triangle" viewBox="0 0 1024 1024"><path d="M510.910179 741.595119L75.685773 345.914334c-15.219633-13.872962-16.34834-37.430494-2.512217-52.686966 13.872962-15.219633 37.539988-16.275685 52.686967-2.512217l385.048633 350.093517 385.085472-350.093517c15.219633-13.763468 38.814004-12.707416 52.65115 2.512217 13.836123 15.256472 12.744255 38.814004-2.549056 52.686966L510.910179 741.595119z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M349.96419 517.315048l421.254096 421.254095a48.761905 48.761905 0 1 1-68.973715 68.949333L254.049524 559.299048a48.688762 48.688762 0 0 1-13.726476-41.959619 48.688762 48.688762 0 0 1 13.726476-41.984L702.244571 27.062857a48.761905 48.761905 0 1 1 68.949334 68.949333L349.988571 517.315048z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)