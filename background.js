const USE_DOCUMENT_FONTS = browser.browserSettings.useDocumentFonts
const ICON_ON = 'icons/on.svg'
const ICON_OFF = 'icons/off.svg'
const SYNC_SETTING_INTERVAL = 2000

function updateIcon(settingValue) {
    browser.action.setIcon({ path: settingValue ? ICON_ON : ICON_OFF })
}

setInterval(async function () {
    const setting = await USE_DOCUMENT_FONTS.get({})
    updateIcon(setting.value)
}, SYNC_SETTING_INTERVAL)

browser.action.onClicked.addListener(async function () {
    const setting = await USE_DOCUMENT_FONTS.get({})
    const newValue = !setting.value

    USE_DOCUMENT_FONTS.set({ value: newValue })
    updateIcon(newValue)
})
