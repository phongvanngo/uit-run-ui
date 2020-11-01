/* eslint-disable import/first */
const _0x30fd = [
  "map",
  "REACT_APP_API_URL",
  "/question/exam",
  "GET",
  "then",
  "POST",
  "env",
  "answerC",
];
(function (_0x5af83b, _0x30fd3b) {
  const _0x190bdb = function (_0x38eb16) {
    while (--_0x38eb16) {
      _0x5af83b["push"](_0x5af83b["shift"]());
    }
  };
  _0x190bdb(++_0x30fd3b);
})(_0x30fd, 0x175);
const _0x190b = function (_0x5af83b, _0x30fd3b) {
  _0x5af83b = _0x5af83b - 0x0;
  let _0x190bdb = _0x30fd[_0x5af83b];
  return _0x190bdb;
};
import { handleResponse } from "./auth.service";
import _0x38eb16 from "./auth-header";
export const quizService = { getExam: getExam, postExam: postExam };
function getExam() {
  const _0x2d2f4e = _0x190b,
    _0x28019c = { method: _0x2d2f4e("0x6"), headers: _0x38eb16() };
  return fetch(
    process[_0x2d2f4e("0x1")][_0x2d2f4e("0x4")] + _0x2d2f4e("0x5"),
    _0x28019c
  )
    [_0x2d2f4e("0x7")](handleResponse)
    [_0x2d2f4e("0x7")]((_0xfdded1) =>
      _0xfdded1[_0x2d2f4e("0x3")]((_0x46bf59) => {
        const _0x3e3b77 = _0x2d2f4e;
        return {
          ..._0x46bf59,
          answers: [
            _0x46bf59["answerA"],
            _0x46bf59["answerB"],
            _0x46bf59[_0x3e3b77("0x2")],
            _0x46bf59["answerD"],
          ],
        };
      })
    );
}
function postExam(_0xba0865, _0x39966a) {
  const _0x1b9235 = _0x190b,
    _0x3a4364 = {
      method: _0x1b9235("0x0"),
      headers: { "Content-Type": "application/json", ..._0x38eb16() },
      body: JSON["stringify"]({ arrayAns: _0xba0865, time: _0x39966a }),
    };
  return fetch(process["env"][_0x1b9235("0x4")] + "/question/exam", _0x3a4364)[
    _0x1b9235("0x7")
  ](handleResponse);
}
