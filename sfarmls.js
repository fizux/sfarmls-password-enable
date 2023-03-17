// ==UserScript==
// @name         SFAR MLS Input Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tampermonkey script to allow user to login using a password manager rather than retyping a complex password by hand 20 times a day.
// @author       You
// @match        https://iam.sfarmls.com/idp/login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sfarmls.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        document.getElementById('form_login_wrapper').innerHTML = `
        <form id="form_login" class="needs-validation" novalidate="" action="" method="POST">
          Username: <input type="text" name="username"/><br />
          Password: <input type="password" name="password"/><br />
          <input type="submit" value="Login">
        </form>`
    }, false);
})();