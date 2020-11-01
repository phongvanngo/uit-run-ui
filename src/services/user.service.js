/* eslint-disable import/first */
const _0x278f = [
  "/user/me",
  "GET",
  "then",
  "env",
  "/user/update-first-login",
  "PATCH",
];
(function (_0x201bde, _0x278ff8) {
  const _0x4cab89 = function (_0x520ba7) {
    while (--_0x520ba7) {
      _0x201bde["push"](_0x201bde["shift"]());
    }
  };
  _0x4cab89(++_0x278ff8);
})(_0x278f, 0x1df);
const _0x4cab = function (_0x201bde, _0x278ff8) {
  _0x201bde = _0x201bde - 0x0;
  let _0x4cab89 = _0x278f[_0x201bde];
  return _0x4cab89;
};
import { handleResponse } from "./auth.service";
import _0x520ba7 from "./auth-header";
function getUserInfo() {
  const _0x4ba7be = _0x4cab,
    _0x7ca951 = { method: _0x4ba7be("0x2"), headers: _0x520ba7() };
  return fetch(
    process[_0x4ba7be("0x4")]["REACT_APP_API_URL"] + _0x4ba7be("0x1"),
    _0x7ca951
  )[_0x4ba7be("0x3")](handleResponse);
}
function updateUserInfo(_0x443b29, _0x39ef7b, _0x1c794d) {
  const _0x2b170c = _0x4cab,
    _0x316991 = {
      method: _0x2b170c("0x0"),
      headers: { "Content-Type": "application/json", ..._0x520ba7() },
      body: JSON["stringify"]({
        fullName: _0x443b29,
        stdId: _0x39ef7b,
        numberPhone: _0x1c794d,
      }),
    };
  return fetch(
    process[_0x2b170c("0x4")]["REACT_APP_API_URL"] + _0x2b170c("0x5"),
    _0x316991
  )[_0x2b170c("0x3")](handleResponse);
}
export const userService = {
  getUserInfo: getUserInfo,
  updateUserInfo: updateUserInfo,
};
