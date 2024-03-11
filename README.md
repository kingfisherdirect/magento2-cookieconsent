# Cookie Consent for Magento 2 Integration

> This Magento 2 module integrates the popular [CookieConsent](https://github.com/orestbida/cookieconsent) script into your Magento store, allowing you to comply with cookie consent regulations and enhance user privacy.

> [!IMPORTANT]  
> Installation and using this module requires programming knowledge. This is nowhere near a module you'd expect for Magento 2. All configuration happens programmatically and there is no admin configuration at all!

## Installation

```sh
composer require kingfisherdirect/magento2-cookieconsent
```

```sh
bin/magento setup:upgrade
```

## Configuration

> [!NOTE]  
> This module requires **Configuration / General / Web / Defalt Cookie Settings / Cookie Restriction mode** to be **disabled**

Once module is installed you'll have to configure it with the services your website uses.

In order to do so, copy the config file into the theme dedicated to your website only.

```sh
cp vendor/kingfisherdirect/magento2-cookie-consent/view/frontend/web/js/cookieconsent.config.js app/design/YourCompany/YourTheme/KingfisherDirect_CookieConsent/web/js/
```

Then follow [Configuration Reference](https://cookieconsent.orestbida.com/reference/configuration-reference.html) to adjust configuration to make banner match your needs.

Making script respecting the choice made in banner is something that needs to be done manually and carefully. This is on per-script/service basis.

## Google gtag

This module includes small change for Google gtag, since it's included by default in Magento and is commonly used. By default the consent is sent to denied as per [consent mode documentation](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced)

```js
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500,
});
```
