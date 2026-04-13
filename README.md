# Toggle `use_document_fonts`

This extension provides a toolbar button to quickly toggle Firefox's "Allow pages to choose their own fonts, instead of your selections above" feature, which is backed by the `browser.display.use_document_fonts` setting.

The status of the button reflects the current value of the setting, with the caveat that if user changes the setting via Firefox's settings page or about:config, the status is synced with a delay, due to limitation of the `BrowserSetting` API.
