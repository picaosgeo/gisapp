/**
 * Eqwc client settings
 *
 * This is proper location for settings, since this file is used by both clients
 * and is always loaded regardless debug variable.
 */

var Eqwc = {};

Eqwc.settings = {};

//template string for client title, will be evaluated later
//example with Application name from translation string
//Eqwc.settings.title = "TR.appName+projectData.title+' '+projectData.client_display_name";
Eqwc.settings.title = "projectData.title+' '+projectData.client_display_name";

//use separate gisportal code to browse projects, register users and login
//code available here - https://github.com/uprel/gisportal
Eqwc.settings.useGisPortal = false;

//setup gisportal first
Eqwc.settings.gisPortalRoot = '/gisportal/';
Eqwc.settings.mailServiceUrl = Eqwc.settings.gisPortalRoot + 'index.php/mail/send';
Eqwc.settings.gisPortalProfile = Eqwc.settings.gisPortalRoot + 'index.php/profile';





