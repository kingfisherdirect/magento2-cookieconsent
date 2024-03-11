export const config = {
    categories: {
        necessary: {
            enabled: true,
            readOnly: true,
            services: {
                platform: { label: "<b>E-commerce platform.</b/> Provides support for basic e-commerce functions to work properly." },
                security: { label: "<b>Security platforms.</b/> Used by web services providers to protect website from malicious traffic." },
            }
        },
        analytics: {
            services: {
                ga: {
                    label: '<b>Google Analytics</b> - identify traffic, analyse website usage, understand audiences',
                    onAccept: () => {
                        gtag('consent', 'default', {
                            'analytics_storage': 'granted'
                        })
                    },
                    onReject: () => {
                        gtag('consent', 'default', {
                            'analytics_storage': 'denied'
                        })
                    },
                    cookies: [{ name: /^(_ga|_gid)/ }]
                }
            }
        },
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: "It's time to configure cookies",
                    description: "This is an example banner configuration. You'll need to override this for your store!",
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences',
                    footer: '<a href="/terms-conditions">Terms and Conditions</a> <a href="/privacy-policy">Privacy Policy</a>'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Storage purpose management',
                            description: 'You can manage here storage choices for various purposes. You can change your preferences at any time'
                        },
                        {
                            title: 'This is just an example!',
                            description: 'See <a href="https://cookieconsent.orestbida.com/reference/configuration-reference.html">Configuration Reference</a> for this script to understand'
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary',
                            cookieTable: {
                                headers: {
                                    name: "Name",
                                    domain: "Service",
                                    description: "Description",
                                    expiration: "Expiration"
                                },
                                body: [
                                    // php and magento
                                    {
                                        name: "PHPSESSID",
                                        domain: "www.example.org",
                                        description: "Native PHP application cookie. Used to manage user session, helps to remember basket and checkout data. The cookie is a session cookie and will be deleted when all the browser windows are closed.",
                                        expiration: "6 months"
                                    },
                                    { domain: "www.example.org", name: "guest-view", description: "Stores the Order ID that guest shoppers use to retrieve their order status. Guest orders view. Used in Orders and Returns widgets.", expiration: "Session" },
                                    { domain: "www.example.org", name: "login_redirect", description: "Preserves the destination page that was loading before the customer was directed to log in.", expiration: "Session" },
                                    { domain: "www.example.org", name: "mage-messages", description: "Tracks error messages and other notifications that are shown to the user, such as the cookie consent message, and various error messages. The message is deleted from the cookie after it is shown to the shopper. Cleared on frontend when the message is displayed to the user.", expiration: "1 year" },
                                    { domain: "www.example.org", name: "product_data_storage", description: "Stores configuration for product data related to Recently Viewed / Compared Products.", expiration: "Per local storage rules" },
                                    { domain: "www.example.org", name: "recently_compared_product", description: "Stores product IDs of recently compared products.", expiration: "Per local storage rules" },
                                    { domain: "www.example.org", name: "recently_compared_product_previous", description: "Stores product IDs of previously compared products for easy navigation.", expiration: "Per local storage rules" },
                                    { domain: "www.example.org", name: "recently_viewed_product", description: "Stores product IDs of recently viewed products for easy navigation.", expiration: "Per local storage rules" },
                                    { domain: "www.example.org", name: "recently_viewed_product_previous", description: "Stores product IDs of recently previously viewed products for easy navigation.", expiration: "Per local storage rules" },
                                    { domain: "www.example.org", name: "X-Magento-Vary", description: "Configuration setting that improves performance when using static content caching.", expiration: "Session" },
                                    { domain: "www.example.org", name: "form_key", description: "A security measure that appends a random string to all form submissions to protect the data from Cross-Site Request Forgery (CSRF).", expiration: "Session" },
                                    { domain: "www.example.org", name: "mage-cache-sessid", description: "The value of this cookie triggers the cleanup of local cache storage. When the cookie is removed by the backend application, the Admin cleans up local storage, and sets the cookie value to true.", expiration: "Session" },
                                    { domain: "www.example.org", name: "mage-cache-storage", description: "Local storage of visitor-specific content that enables ecommerce functions.", expiration: "Session" },
                                    { domain: "www.example.org", name: "mage-cache-storage-section-invalidation", description: "Forces local storage of specific content sections that should be invalidated.", expiration: "Per local storage" },
                                    { domain: "www.example.org", name: "persistent_shopping_cart", description: "Stores the key (ID) of persistent cart to make it possible to restore the cart for an anonymous shopper.", expiration: "10 years" },
                                    { domain: "www.example.org", name: "private_content_version", description: "Appends a random, unique number and time to pages with customer content to prevent them from being cached on the server.", expiration: "10 years" },
                                    { domain: "www.example.org", name: "section_data_ids", description: "Stores customer-specific information related to shopper-initiated actions, such as wish list display and checkout information.", expiration: "Session" },

                                ]
                            },
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                headers: {
                                    name: "Name",
                                    domain: "Service",
                                    description: "Description",
                                    expiration: "Expiration"
                                },
                                body: [
                                    { domain: "example.org", name: "_ga", description: "Google Analytics sets this cookie to store and count page views.", expiration: "Expires after 1 year" },
                                    { domain: "example.org", name: "_ga_*", description: "Google Analytics sets this cookie to store and count page views.", expiration: "Expires after 1 year" },
                                    { domain: "example.org", name: "_gid", description: "Google Analytics sets this cookie to store and count page views.", expiration: "Session" },
                                ]
                            }
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="/contact">contact us</a>. More details can be also found on our <a href="/terms-conditions">Terms and Conditions</a> and <a href="/privacy-policy">Privacy Policy</a> pages'
                        }
                    ]
                }
            }
        }
    }
}
