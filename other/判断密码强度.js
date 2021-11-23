/* 
判断密码强度
小于8位 0
只有数字，大写，小写，特殊符号的一种 0
有两种 但是只包含数字小写，数字大写 1
有两种 除了上面的情况 2
其他 3
*/

function pwdLevel(pwd) {
  const NumReg = /[0-9]/;
  const UpperCaseReg = /[A-Z]/;
  const LowerCaseReg = /[a-a]/;
  let times = [0, 0, 0, 0]; // 0位num,1位小写，2位大写，3位特殊符号
  for (let i = 0; i < pwd.length; i++) {
    if (NumReg.test(pwd[i])) {
      if (times[0]) {
        times[0]++;
      }
    } else if (LowerCaseReg.test(pwd[i])) {
      if (times[1]) {
        times[1]++;
      }
    } else if (UpperCaseReg.test(pwd[i])) {
      if (times[2]) {
        times[2]++;
      }
    } else {
      if (times[3]) {
        times[3]++;
      }
    }
  }
  if (times[0] + times[1] + times[2] + times[3] < 8) {
    {
      return 0;
    }
  } else {
    if (times.filter((i) => i !== 0).length === 1) {
      {
        return 0;
      }
    } else if (times.filter((i) => i !== 0).length === 2) {
      if (times[0] > 0 && times[3] === 0) {
        return 1;
      } else {
        return 2;
      }
    } else {
      return 3;
    }
  }
}
