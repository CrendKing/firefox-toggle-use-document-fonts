const USE_DOCUMENT_FONTS = browser.browserSettings.useDocumentFonts
const ICON_ON = 'icons/on.svg'
const ICON_OFF = 'icons/off.svg'

function updateIcon(settingValue) {
    browser.action.setIcon({ path: settingValue ? ICON_ON : ICON_OFF })
}

async function syncIcon() {
    const setting = await USE_DOCUMENT_FONTS.get({})
    updateIcon(setting.value)
}

syncIcon()

browser.runtime.onStartup.addListener(syncIcon)
browser.runtime.onInstalled.addListener(syncIcon)
browser.tabs.onActivated.addListener(syncIcon)

browser.action.onClicked.addListener(async function () {
    const setting = await USE_DOCUMENT_FONTS.get({})
    const newValue = !setting.value

    if (await USE_DOCUMENT_FONTS.set({ value: newValue })) {
        updateIcon(newValue)
    }
})
