(function (w) {
    'use strict';
    w.config = {
        lang: 'tr'
    };

    /**
     * MTT1 Object
     * @namespace mtt
     * @version 0.0.1
     */
    w.mtt = w.mtt || {
        /* @keyframes name | duration | timing-function | delay | 
           iteration-count | direction | fill-mode | play-state 
           EX: animation: slidein 3s ease-in 1s 2 reverse both paused; 
           */
        states: [{
            class: 'root',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/',
            contentUrl: '/',
            animations: {
                toChildren: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                }, {
                    selector: '.main-view .page-header h1',
                    animation: 'projects-state-anim-in-page-header-h1',
                    duration: '2400ms',
                    animFunction: 'ease-in'
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
        }, {
            parentUrl: '/',
            class: 'projects',
            title: 'Projeler',
            keywords: 'mtt, ahşap, taahhüt, projeler',
            lang: 'tr',
            url: '/tr/projeler',
            contentUrl: '/content/tr/projects',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            parentUrl: '/tr/projeler',
            class: 'projects-malls',
            title: 'Projeler | Alışveriş Merkezleri',
            keywords: 'mtt, ahşap, taahhüt, avmler',
            lang: 'tr',
            url: '/tr/projeler/alis-veris-merkezleri',
            contentUrl: '/content/tr/projects-malls'
            }, {
            parentUrl: '/tr/projeler',
            class: 'projects-hotels',
            title: 'Projeler | Oteller',
            keywords: 'mtt, ahşap, taahhüt, oteller',
            lang: 'tr',
            url: '/tr/projeler/oteller',
            contentUrl: '/content/tr/projects-hotels'
            }, {
            parentUrl: '/tr/projeler',
            class: 'projects-restaurants',
            title: 'Projeler | Restoranlar',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/projeler/restoranlar',
            contentUrl: '/content/tr/projects-restaurants'
            }, {
            class: 'projects',
            title: 'MTT',
            keywords: 'Projects',
            lang: 'eng',
            url: '/eng/projects',
            contentUrl: '/content/en/projects',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            parentUrl: '/',
            class: 'us',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/biz',
            contentUrl: '/content/tr/us',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            class: 'us',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/us',
            contentUrl: '/content/en/us',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            parentUrl: '/',
            class: 'products-and-services',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/urun-ve-hizmetler',
            contentUrl: '/content/tr/products-and-services',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            parentUrl: '/',
            class: 'products-and-services',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/products-and-services',
            contentUrl: '/content/en/products-and-services',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            parentUrl: '/',
            class: 'contact',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/iletisim',
            contentUrl: '/content/tr/contact',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
            }, {
            parentUrl: '/',
            class: 'contact',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/contact',
            contentUrl: '/content/en/contact',
            animations: {
                toParent: [{
                    selector: '.menu-section',
                    animation: 'root-state-anim-out-menu-section',
                    duration: '1400ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    interation: 1,
                    direction: 'reverse'
                }, {
                    selector: '.main-view',
                    animation: 'root-state-anim-out-main-view',
                    duration: '1600ms',
                    animFunction: 'ease-in-out',
                    delay: '0s',
                    direction: 'reverse'
                }],
                toSibling: [{
                    selector:'.content-section',
                    animation:'content-section-out',
                    duration:'1000ms',
                    animFunction:'cubic-bezier(0.090, 0.870, 0.365, 0.985)',
                    
                },{
                    selector:'.main-view',
                    animation:'main-view-out',
                    duration:'2400ms',
                    animFunction:' ease-in',
                    
                }, {
                    selector: '{{$}} .menu-main-link > h1',
                    animation: 'main-menu-active-state-in-menu-main-link',
                    duration: '2000ms',
                    animFunction: 'ease-in-out'
                }]
            }
        }],
        currentState: {
            url: '/',
            out: 'root-anim-out'
        },
        statesByUrl: {},
        animationEndWrapper: function (cb) {

        },
        animationStartWrapper: function (cb) {

        },
        playAnimation: function (anim, selector) {
            if (anim.animation) {

                $(anim.selector).css('animation', (anim.animation || '') +
                    ' ' + (anim.duration || '1s') +
                    ' ' + (anim.animFunction || 'ease') +
                    ' ' + (anim.delay || ' 0s') +
                    ' ' + (anim.iteration || 1) +
                    ' ' + (anim.direction || 'normal')).one('animationend', function () {
                    $(this).removeAttr('style');
                });
            }
        },
        removeAnimationStyle: function (selector) {
            $(selector).attr('style', '');
        },
        navigate(path) {
            var targetState,
                currentState;

            if (path && mtt.statesByUrl[path]) {

                currentState = mtt.currentState;
                targetState = mtt.statesByUrl[path];

                if (currentState.url === targetState.url)
                    return;

                mtt.$body.removeClass(currentState.classState);
                mtt.$body.addClass(targetState.classState);


                if (targetState.parentUrl === currentState.url && currentState.animations && currentState.animations.toChildren) {

                    for (var a = 0; a < currentState.animations.toChildren.length; a++) {
                        var animP = currentState.animations.toChildren[a];
                        if (animP) {

                            animP.selector = animP.selector.replace('{{$}}', '#' + targetState.class);
                            mtt.playAnimation(animP);
                        }

                    }
                } else if (targetState.url === currentState.parentUrl && currentState.animations && currentState.animations.toParent) {

                    for (var b = 0; b < currentState.animations.toParent.length; b++) {
                        var animC = currentState.animations.toParent[b];
                        if (animC) {

                            animC.selector = animC.selector.replace('{{$}}', '#' + targetState.class);
                            mtt.playAnimation(animC);
                        }

                    }
                } else if (targetState.parentUrl === currentState.parentUrl && currentState.animations && currentState.animations.toSibling) {

                    for (var c = 0; c < currentState.animations.toSibling.length; c++) {
                        var animS = _.extend({},currentState.animations.toSibling[c]);
                        if (animS) {

                            animS.selector = animS.selector.replace('{{$}}', '#' + targetState.class);
                            mtt.playAnimation(animS);
                        }

                    }
                }

                mtt.currentState = targetState;
                history.pushState(null, null, path);

            }


        },
        initStates: function () {

            // init statesByUrl collection object

            for (var i = 0; i < this.states.length; i++) {

                var cur = this.states[i];
                cur.classState = cur.class + '-state';
                cur.classIn = cur.classState + '-anim-in';
                cur.classOut = cur.classState + '-anim-out';
                cur.classMove = cur.classState + '-anim-move';
                mtt.statesByUrl[cur.url] = cur;

            }

            this.initStateTree();
        },
        /**
         * [[Description]]
         * @param   {String} parentUrl 
         * @param   {String} url       
         * @returns {Array} siblings without itself
         */
        getSiblingStates: function (parentUrl, url) {
            var siblings = [];
            for (var thisUrl in this.statesByUrl) {
                var state = this.statesByUrl[thisUrl];
                if (parentUrl === state.parentUrl) {
                    if (state.url !== url) siblings.push(state.url);
                }
            }
            return siblings;
        },
        /**
         * [[Description]]
         */
        initStateTree: function () {
            for (var url in this.statesByUrl) {
                var state = this.statesByUrl[url];
                if (state.parentUrl) {
                    state.siblings = mtt.getSiblingStates(state.parentUrl, state.url);
                }
            }
        },
        setInitialState: function () {

            mtt.currentState = mtt.statesByUrl[location.pathname] || mtt.statesByUrl['/'];

        },
        /**
         * Main.Init call all functions you want ;)
         * @returns void
         */
        init: function () {
            mtt.$body = $('body');
            mtt.$aLink = $('.menu-main-link, .home-button');
            mtt.initStates();

            mtt.setInitialState();
            mtt.$aLink.on('click', function (e) {
                if (Modernizr.history) {

                    e.preventDefault();

                    var $link = $(this),
                        href = $link.attr('href');

                    mtt.navigate(href);
                }

            });
            $(window).on('popstate', function (e) {

                mtt.navigate(location.pathname);
            });
        }
    };
})(window);


/**
 * Init Main JavaScript Object
 */
if (typeof (jQuery) === 'undefined') {
    console.log('jQuery Framework is required!');
} else {

    $(document).ready(mtt.init);

} // End of if
