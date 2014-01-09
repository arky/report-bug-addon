const tabs = require("sdk/tabs");
const utils = require('sdk/window/utils');
const recent = utils.getMostRecentBrowserWindow();

 
// Assume NativeWindow is a global
function reportBug() {
 tabs.open("https://bugzilla.mozilla.org/enter_bug.cgi?product=Firefox%20for%20Android");
}
 
var menuID;
function addMenuItem() {
    menuID = recent.NativeWindow.menu.add({
	name: "Report a bug",
	icon: null,
	parent: recent.NativeWindow.menu.toolsMenuID,
	callback: function() {
	    reportBug();
	}
    });
}
function removeMenuItem() {
    recent.NativeWindow.menu.remove(menuID);
}
 
addMenuItem();
 
exports.onUnload = function() {
    removeMenuItem();
};


