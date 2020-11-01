/* eslint-disable import/first */
const _0x21f1 = ["GET", "REACT_APP_API_URL", "/score", "env"];
(function (_0x369001, _0x21f1c1) {
  const _0x58a377 = function (_0xa299ba) {
    while (--_0xa299ba) {
      _0x369001["push"](_0x369001["shift"]());
    }
  };
  _0x58a377(++_0x21f1c1);
})(_0x21f1, 0x1d6);
const _0x58a3 = function (_0x369001, _0x21f1c1) {
  _0x369001 = _0x369001 - 0x0;
  let _0x58a377 = _0x21f1[_0x369001];
  return _0x58a377;
};
import { handleResponse } from "./auth.service";
export const rankingService = { getBoard: getBoard };
function getBoard() {
  const _0x3ff5a4 = _0x58a3,
    _0xa299ba = { method: _0x3ff5a4("0x2") };
  return fetch(
    process[_0x3ff5a4("0x1")][_0x3ff5a4("0x3")] + _0x3ff5a4("0x0"),
    _0xa299ba
  )["then"](handleResponse);
}
