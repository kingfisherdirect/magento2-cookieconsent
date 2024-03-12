var config = {
    mixins: {
        'Magento_GoogleAnalytics/js/google-analytics': {
            'KingfisherDirect_CookieConsent/js/gtag-consent': true,
        },
        'Magento_GoogleGtag/js/google-analytics': {
            'KingfisherDirect_CookieConsent/js/gtag-consent': true
        }
    },
};
