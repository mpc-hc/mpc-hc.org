(function detectOS () {
    'use strict';

    var arch = window.navigator.userAgent.match(/x86_64|Win64|WOW64/) ||
               window.navigator.cpuClass === 'x64' ? 'x64' : 'x86';
    var href = 'https://binaries.mpc-hc.org/';
    var downloadButton = document.getElementById('downloadButton');
    var version = downloadButton.getAttribute('data-version');
    // querySelector is enough here since we only need the first match
    var buttonSubArchText = document.querySelector('.button-sub span');

    var arches = {
        x64: {
            folder: 'MPC HomeCinema - x64',
            text: '64-bit'
        },
        x86: {
            folder: 'MPC HomeCinema - Win32',
            text: '32-bit'
        }
    };

    // getElementById returns null if it has no matches
    if (!downloadButton || !version || !buttonSubArchText) {
        return;
    }

    buttonSubArchText.textContent = arches[arch].text;

    // += 'MPC HomeCinema - x64/MPC-HC_v1.7.11_x64/MPC-HC.1.7.11.x64.exe'
    href += arches[arch].folder + '/MPC-HC_v' + version + '_' + arch + '/MPC-HC.' + version + '.' + arch + '.exe';

    downloadButton.setAttribute('href', encodeURI(href));

})();
