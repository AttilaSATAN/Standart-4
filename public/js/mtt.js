(function (w) {

    w.config = {
        lang: 'tr'
    };

    /**
     * MTT1 Object
     * @namespace mtt
     * @version 0.0.1
     */
    w.mtt = w.mtt || {

        //states: window.states || {},

        states: [{
            class: 'root',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/',
            contentUrl: '/content/tr/projects'
            },{
            class: 'root',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'en',
            url: '/en',
            contentUrl: '/content/tr/projects'
            },{
            class: 'projects',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/projeler',
            contentUrl: '/content/tr/projects'
            }, {
            class: 'projects',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/projects',
            contentUrl: '/content/en/projects'
            }, {
            class: 'us',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/biz',
            contentUrl: '/content/tr/us'
            }, {
            class: 'us',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/us',
            contentUrl: '/content/en/us'
            }, {
            class: 'group',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/grup',
            contentUrl: '/content/tr/group'
            }, {
            class: 'group',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/group',
            contentUrl: '/content/en/group'
            }, {
            class: 'contact',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'tr',
            url: '/tr/iletisim',
            contentUrl: '/content/tr/contact'
            }, {
            class: 'contact',
            title: 'MTT',
            keywords: 'mtt, ahşap, taahhüt',
            lang: 'eng',
            url: '/eng/contact',
            contentUrl: '/content/en/contact'
                    }],
        statesByUrl: {},
        langByNavigatorLang: {
            'tr-TR': 'tr',
            'en-US': 'en',
            
        },
        getStateObject: function (stateName, lang) {
            if (mtt.states[stateName]) {
                mtt.states[stateName].url
            }
        },
        navigate: function (path) {

            var state,
                $body = $('body'),
                playAnimation = $body.hasClass('state-root');

            
            if( !path || path === '/'){
                //state = 
            } else if(true) {
                
            }
            
            
            $body.attr('class', '');

            if (mtt.noAnimationTimer)
                clearTimeout(mtt.noAnimationTimer);

            mtt.noAnimationTimer = setTimeout(function () {

                $body.addClass('no-animation');
                $body.removeClass('play-animation');

            }, 3500);

            if (path && mtt.statesByUrl[path]) {

                state = mtt.statesByUrl[path];

                $body.addClass('state-' + state.class);


                $body.addClass('play-animation');

                if (Modernizr.history) {
                    history.pushState(null, null, path);
                }

            } else {


                $body.addClass('play-animation');

                $body.attr('class', '').addClass('state-root');

            }

        },
        initStates: function () {

            // init statesByUrl collection object

            for (var i = 0; i < this.states.length; i++) {
                var cur = this.states[i];
                mtt.statesByUrl[cur.url] = cur;
            }

        },
        /**
         * Main.Init call all functions you want ;)
         * @return void
         */
        init: function () {

            mtt.initStates();

            
            /**
             * Get Language from User
             */
            try {
                mtt.Lang = window.navigator.userLanguage || window.navigator.language;
            } catch (e) {
                if (Main.Debug) {
                    console.log(e);
                }
            }
            console.log('LANG', mtt.Lang, window.navigator.userLanguage ,window.navigator.language)

            //
            $('.menu-main-link').on('click', function (e) {

                e.preventDefault();

                var $link = $(this),
                    href = $link.attr('href');

                mtt.navigate(href);

            });

            window.addEventListener("popstate", function (e) {

                e.preventDefault();

                if (location.pathname !== '/')
                    console.log(mtt.statesByUrl[location.pathname])
                    
                mtt.navigate('/');
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
