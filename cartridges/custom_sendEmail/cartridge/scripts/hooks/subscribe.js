'use strict';

var Mail = require("dw/net/Mail");

/**
 * validates the current users basket
 * @param {array} formData
 * @return
 */
function subscribe(formData) {
    var mail = new Mail();
    mail.addTo("ecommerce@pippo.it");

    mail.setFrom("from@example.org");
    mail.setSubject("Example Email");
    mail.setContent("Mail content");
    mail.send();
    return;
}

module.exports = {
  subscribe
};