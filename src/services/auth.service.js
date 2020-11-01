/* eslint-disable no-unused-expressions */
const _0x3773 = [
  "stringify",
  "reload",
  "parse",
  "text",
  "statusText",
  "removeItem",
  "env",
  "status",
  "POST",
  "application/json",
  "then",
  "user",
  "location",
];
(function (_0x575729, _0x3773ad) {
  const _0x173537 = function (_0x1186fb) {
    while (--_0x1186fb) {
      _0x575729["push"](_0x575729["shift"]());
    }
  };
  _0x173537(++_0x3773ad);
})(_0x3773, 0x1e2);
const _0x1735 = function (_0x575729, _0x3773ad) {
  _0x575729 = _0x575729 - 0x0;
  let _0x173537 = _0x3773[_0x575729];
  return _0x173537;
};
export const authService = { login: login, logout: logout };
function login(_0x1186fb) {
  const _0x384df5 = _0x1735,
    _0x3150ed = {
      method: _0x384df5("0x7"),
      headers: { "Content-Type": _0x384df5("0x8") },
      body: JSON[_0x384df5("0xc")]({ userCode: _0x1186fb }),
    };
  return fetch(
    process[_0x384df5("0x5")]["REACT_APP_API_URL"] + "/auth/login",
    _0x3150ed
  )
    ["then"](handleResponse)
    [_0x384df5("0x9")]((_0x37f84a) => {
      const _0x4a1001 = _0x384df5;
      return (
        localStorage["setItem"](
          _0x4a1001("0xa"),
          JSON[_0x4a1001("0xc")](_0x37f84a)
        ),
        _0x37f84a
      );
    });
}
function logout() {
  const _0x3ab364 = _0x1735;
  localStorage[_0x3ab364("0x4")](_0x3ab364("0xa"));
}
export function handleResponse(_0xcf23ba) {
  const _0x4bae46 = _0x1735;
  return _0xcf23ba[_0x4bae46("0x2")]()[_0x4bae46("0x9")]((_0x51dc95) => {
    const _0x2913e5 = _0x4bae46;
    if (!_0xcf23ba["ok"]) {
      _0xcf23ba[_0x2913e5("0x6")] === 0x191 &&
        (logout(), window[_0x2913e5("0xb")][_0x2913e5("0x0")]());
      const _0xfa1efe = _0xcf23ba[_0x2913e5("0x3")];
      return Promise["reject"](_0xfa1efe);
    }
    const _0x50e43e = _0x51dc95 && JSON[_0x2913e5("0x1")](_0x51dc95);
    return _0x50e43e;
  });
}
