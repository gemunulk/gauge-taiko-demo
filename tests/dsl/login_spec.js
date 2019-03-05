
/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press,text, contains, focus, into, textField, $, click, intervalSecs, timeoutSecs} = require('taiko');
const assert = require("assert");

//const headless = process.env.headless_chrome.toLowerCase() == 'true' ? true : false;
//beforeSuite(async () => openBrowser({ headless: headless }));
//afterSuite(async () => closeBrowser());
//step("On the Login page", async () => goto('http://newtours.demoaut.com/mercurysignon.php'));
step("On the Login page", async () => goto(process.env.app_endpoint+'/mercurysignon.php'));

step("Login as <username> using <password>", async (username, password) => {
	//await write(username, into('User Name:')));
	//await write(password, into('Password:'));

	/* Using Xpaths and CSS since AUT does not have correct label tags maintained */
	await write(username, into($("//input[@name='userName']")));
	await write(password, into($("//input[@name='password']")));
	await click(into($("//input[@name='login']")));

})

step("Page contains <content>", async (content) => {
    assert.equal('Exists', (await text(contains(content)).exists(intervalSecs(1), timeoutSecs(120))).description);
});
