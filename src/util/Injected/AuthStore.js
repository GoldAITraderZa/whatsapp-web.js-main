'use strict';

exports.ExposeAuthStore = () => {
    window.AuthStore = {};
    window.AuthStore.AppState = window.require('WAWebSocketModel').Socket;
    window.AuthStore.Cmd = window.require('WAWebCmd').Cmd;
    window.AuthStore.Conn = window.require('WAWebConnModel').Conn;
    window.AuthStore.Base64Tools = window.require('WAWebBase64');
    window.AuthStore.RegistrationUtils = window.require('WAWebRegistrationUtils');
};
