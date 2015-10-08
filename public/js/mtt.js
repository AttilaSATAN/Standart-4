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

        /**
         * Current Language from the Website
         * @type {string}
         * @global
         */
        //url: '/$_lang/$_projects',
        //                content: '/$_lang/projects',
        //                template: '/templates/projects',
        //                langs: ['tr']
        states: {
            projects: [{
                    lang: 'tr',
                    url: '/tr/projeler',
                    template: '/templates/projects',
                    content: '/content/tr/projects'
                },
                {
                    lang: 'eng',
                    url: '/eng/projects',
                    templatge: '/templates/projects',
                    content: '/content/en/projects'
                }],
            us: [{
                    lang: 'tr',
                    url: '/tr/biz',
                    template: '/templates/us',
                    content: '/content/tr/us'
                }, {
                    lang: 'eng',
                    url: '/eng/us',
                    templatge: '/templates/us',
                    content: '/content/en/us'
            }],
            group: [{
                    lang: 'tr',
                    url: '/tr/grup',
                    template: '/templates/group',
                    content: '/content/tr/group'
                }, {
                    lang: 'eng',
                    url: '/eng/group',
                    templatge: '/templates/group',
                    content: '/content/en/group'
            }],
            contact: [{
                    lang: 'tr',
                    url: '/tr/iletisim',
                    template: '/templates/contact',
                    content: '/content/tr/contact'
                }, {
                    lang: 'eng',
                    url: '/eng/contact',
                    templatge: '/templates/contact',
                    content: '/content/en/contact'
            }]
        },
        statesByUrl: {},

        getStateObject: function (stateName, lang) {
            if (mtt.states[stateName]) {
                mtt.states[stateName].url
            }
        },
        navigate: function (path) {
            var state;
            if (path && mtt.statesByUrl[path]) {
                state = mtt.statesByUrl[path];

                $('body').attr('class', '').addClass('state-' + state.name);

                if (Modernizr.history) {
                    history.pushState(null, null, path);
                }
            } else {

                $('body').attr('class', '').addClass('state-root');

            }

        },
        initStates: function () {

            for (state in this.states) {
                var cur = this.states[state];
                for (var i = 0; i < cur.length; i++) {
                    mtt.statesByUrl[cur[i].url] = cur[i];
                    mtt.statesByUrl[cur[i].url].name = state;
                }
            }
        },
        /**
         * Main.Init call all functions you want ;)
         * @return void
         */
        init: function () {

            mtt.initStates();
            console.log(mtt.statesByUrl)
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
