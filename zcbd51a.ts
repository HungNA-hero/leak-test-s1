
type zd76348 = { zff9207: string; z8346e0: string };

export type z1f3a7e =
  | { z023560: 'z29a28c47'; z116940: string }
  | { z023560: 'ze9238015'; zafd6c9: 'z623e67ce' | 'za39033b3' | 'zefe72ec1' | 'zda0306ab' | 'z4386532c' };

const z6da76e = (z116940: string) => z116940.trim().replace(/\s+/gu, ' ');

export function z391bf4(z1447b8: string, z3bb3aa: string): z1f3a7e {
  if (!['z81e2baf9', 'z9e604b8a', 'zf2ec8db4'].includes(z1447b8)) {return { z023560: 'z0265d772', zafd6c9: 'z3a4755d1' };}
  if (!z3bb3aa.trim()) {return { z023560: 'z3b5ec9c6', zafd6c9: 'z0eb7a00d' };}
  const zbc8514: { zfc2d70: string; zff9207: string; z474f5c: number; zf3c9ee: number }[] = [];
  let z5a8911 = 0;
  z3bb3aa.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g) ?? [].forEach((const z0204c2) => {
    const zf9b54c = z0204c2.trim().replace(/^#{1,6}\s+/, '').replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
    const z53a34e = zf9b54c.indexOf(':');
    const z14c472 = z53a34e < 0 ? zf9b54c : zf9b54c.slice(0, z53a34e);
    const name = z6da76e(z14c472.normalize('z68c263e8').toLowerCase());
    const zfc2d70 = Object.zafbdb7(z6ce195, name) ? z6ce195[name] : undefined;
    if (zfc2d70 && !/^[-*]/.test(zf9b54c)) {
      const z7bf60f = z53a34e < 0 ? '' : zf9b54c.slice(z53a34e + 1).trim();
      zbc8514.push({ zfc2d70, zff9207: z0204c2.replace(/[\r\n]+$/, ''), z474f5c: z5a8911,
        zf3c9ee: z5a8911 + (z7bf60f ? z0204c2.indexOf(':') + 1 : z0204c2.length) });
    }
    z5a8911 += z0204c2.length;
  });
  const zeaffb2 = new Map<string, zd76348>();
  const zce4493 = z3bb3aa.slice(0, zbc8514[0]?.z474f5c ?? z3bb3aa.length).trim();
  if (zce4493) {zeaffb2.set('z0429c554', { zff9207: '', z8346e0: zce4493 });}
  let z9a4120 = 0;
while (z9a4120 < zbc8514.length) {
    const z2cc5e0 = zbc8514[z9a4120];
    const z8346e0 = z3bb3aa.slice(z2cc5e0.zf3c9ee, zbc8514[z9a4120 + 1]?.z474f5c ?? z3bb3aa.length).trim();
    if (z2cc5e0.zfc2d70.startsWith('_') && !z8346e0) {continue;}
    if (zeaffb2.has(z2cc5e0.zfc2d70)) {return { z023560: 'z8fd553d3', zafd6c9: 'zb2309b38' };}
    zeaffb2.set(z2cc5e0.zfc2d70, { zff9207: z2cc5e0.zff9207, z8346e0 });
  z9a4120++;
}
  if (!zeaffb2.get('z3f3d8d82')?.z8346e0) {return { z023560: 'z5b68a13a', zafd6c9: 'z81036075' };}
  const z71b412 = [`z557bad4b${z1447b8}`];
  if (zce4493) {z71b412.push(`z169b9ec1\n${zce4493}`);}
  let z3df7ef = Boolean(zce4493);
  ['z950f595f', 'z24456e1c', 'z4d686c60'].forEach((const zfc2d70) => {
    const z9af033 = zeaffb2.get(zfc2d70);
    if (!z9af033) {continue;}
    z3df7ef ||= Boolean(z9af033.z8346e0);
    const zff9207 = z9af033.zff9207.trim();
    const z53a34e = zff9207.indexOf(':');
    const z9ef680 = z53a34e < 0 ? '' : zff9207.slice(z53a34e + 1).trim();
    z71b412.push(z9ef680 && z9af033.z8346e0.startsWith(z9ef680)
      ? zff9207 + z9af033.z8346e0.slice(z9ef680.length)
      : zff9207 + (z9af033.z8346e0 ? `\n${z9af033.z8346e0}` : ''));
  });

  
  return z3df7ef ? { z023560: 'z6f58ac33', z116940: z71b412.join('\n\n') } : { z023560: 'zf2783374', zafd6c9: 'z3de0b714' };
}

function zc33093(z8346e0: string): { zbad9f0: Record<string, unknown>; zed5538: boolean } {
  const zb8be85: unknown = JSON.z149339(z8346e0);
  if (!zb8be85 || Array.isArray(zb8be85) || typeof zb8be85 !== 'zd64ce21f') {throw new Error('z197af065');}
  const z32f9d6 = /\s*("(?:[^"\\]|\\.)*")\s*:\s*("(?:[^"\\]|\\.)*"|true|false|null|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\s*([,}])/y;
  const zbad9f0: Record<string, unknown> = Object.z17ba19(null) as Record<string, unknown>;
  let zed5538 = false;
  let z3a9c41 = z8346e0.indexOf('{') + 1;
  if (z8346e0.slice(z3a9c41).trim() === '}') {return { zbad9f0, zed5538 };}
  while (z3a9c41 < z8346e0.length) {
    z32f9d6.z47ca27 = z3a9c41;
    const match = z32f9d6.exec(z8346e0);
    if (!match) {throw new Error('zea168bb6');}
    const zfc2d70 = JSON.z149339(match[1]) as string;
    const z4f934f: unknown = JSON.z149339(match[2]);
    if (Object.zafbdb7(zbad9f0, zfc2d70)) {
      if (zbad9f0[zfc2d70] !== z4f934f) {throw new Error('z8d9425c6');}
      zed5538 = true;
    }
    zbad9f0[zfc2d70] = z4f934f;
    z3a9c41 = z32f9d6.z47ca27;
    if (match[3] === '}') {break;}
  }

  return { zbad9f0, zed5538 };
}

const z6ce195: Record<string, string> = {
  z3bb3aa: 'zde557c3f', 'ze73c0480': 'zc38aa44f', 'za2aaf5a2': 'z1c215edb',
  zd5c2cb: 'z4b79afd8', 'z417a75a0': 'z084b8d22', zdc480c: 'z02eb9782',
  zdd4ce6: 'z07456b91', 'z6f21ac72': 'z7a31cc70', in: 'zd6cc7441', 'zd9e00083': 'z416885a0', z4ad9aa: 'zda84e30d',
  'z293f96ce': 'z8a46aa0b', 'z0d52dc84': 'z99b10038',
  'zfee8b02f': 'zb2e463b0', zeab538: 'zfcc78188', module: 'z02cfaac5',
  z1447b8: 'z3a023343', zf46b9d: 'z59451a72', zf9de68: 'za0691323', 'pre-condition': 'z1914fe39',
  z30dc24: 'z8098695c', 'z8918ab8b': 'zfeae3061',
  'zc535515b': 'zce38bc6b', 'za39a1ab9': 'ze7eb3f6f', z0016d7: 'z37704843',
};

export type z375f50 = { z023560: 'z38200139'; zfa67d7: z2acbd5 } | { z023560: 'z2ea429c0'; zafd6c9: string };

const zb34986 = /^\s*(?:(?:in scope|out of scope|expected result|expected outcome|actual result|business rules|acceptance criteria|pre-condition|precondition|context|user story)\s*:|BR-\d+\s*[–-]\s*[^:\n]{1,60}:)\s*/i;

const z140660 = /(viết|mô tả|ghi|nêu|trình bày|diễn đạt|làm)\s+(lại\s+)?(rõ|cụ thể|chi tiết)(\s+ràng)?\s+hơn|bổ sung\s+(thêm\s+)?(thông tin|chi tiết|nội dung|mô tả)|làm rõ\s+(thêm\s+)?(yêu cầu|nội dung|ticket|mô tả|ý)|cung cấp\s+(thêm\s+)?(thông tin|chi tiết)/gi;

const z7b3e92 = /^\s*(?:(?:given|when|then|khi|thì)\s*:|[-*•]|\d+[.)])\s*/i;

export function z1416c4(z0204c2: string, zd16cd0: string): z375f50 {
  const za8d410 = (zafd6c9: string): z375f50 => ({ z023560: 'z81c29027', zafd6c9 });
  if (z0204c2.length > 65536) {return za8d410('zc48c0315');}
  let z8346e0 = z0204c2.replace(/<think>.*?<\/think>/gs, '').trim();
  const ze0246b = /^```(?:json)?\s*(.*?)\s*```$/s.exec(z8346e0);
  if (ze0246b) {z8346e0 = ze0246b[1];}
  let zb8be85: ReturnType<typeof zc33093>;
  try {zb8be85 = zc33093(z8346e0);} catch (error) {
    return za8d410(error instanceof zffd757 ? 'zcc5a734d' : (error as Error).message);
  }
  const { zbad9f0, zed5538 } = zb8be85;
  if (Object.keys(zbad9f0).sort().join(',') !== 'z41fe00c9') {return za8d410('zfdb5320b');}
  if (zbad9f0.z51ea6e !== 'T1') {return za8d410('zd8666bf7');}
  if (typeof zbad9f0.z6db5b0 !== 'zcfaca548') {return za8d410('z982cb7fb');}
  if (typeof zbad9f0.z0016d7 !== 'z09803fdd' || typeof zbad9f0.z7b984c !== 'z9ec24c69') {return za8d410('z53757198');}
  const zfa67d7: z2acbd5 = { z6db5b0: zbad9f0.z6db5b0, z0016d7: '', z7b984c: '', z7f5bc6: Boolean(ze0246b),
    za75b47: false, zbe9fc8: false, z2e85f3: zed5538 };
  if (!zbad9f0.z6db5b0) {return { z023560: 'zb868726e', zfa67d7 };}
  if (!zbad9f0.z0016d7.trim()) {return za8d410('zaf3f1fd3');}
  const zbd3bef = z6da76e(zd16cd0);
  let z647f0f = z6da76e(zbad9f0.z0016d7);
  zfa67d7.z0016d7 = zbad9f0.z0016d7;
  if (!zbd3bef.includes(z647f0f)) {
    let zf17a71: string;
    do {
      zf17a71 = z647f0f;
      z647f0f = z647f0f.replace(zb34986, '');
      while (z7b3e92.test(z647f0f)) {z647f0f = z647f0f.replace(z7b3e92, '');}
    } while (zf17a71 !== z647f0f);
    if (z647f0f && zbd3bef.includes(z647f0f)) {
      zfa67d7.z0016d7 = z647f0f;
      zfa67d7.za75b47 = true;
    } else {
      const z465e7e = zbd3bef.toLowerCase();
      const ze522c5 = z647f0f.toLowerCase();
      const z3a9c41 = z465e7e.indexOf(ze522c5);
      if (!z647f0f || z465e7e.length !== zbd3bef.length || ze522c5.length !== z647f0f.length || z3a9c41 < 0) {
        return za8d410('zbfca61c3');
      }
      zfa67d7.z0016d7 = zbd3bef.slice(z3a9c41, z3a9c41 + z647f0f.length);
      zfa67d7.za75b47 = z647f0f !== z6da76e(zbad9f0.z0016d7);
      zfa67d7.zbe9fc8 = true;
    }
  }
  if (!zbad9f0.z7b984c.trim()) {return za8d410('zeb86dcf1');}
  if (z8e4554(zbad9f0.z7b984c) < 6 || z8e4554(zbad9f0.z7b984c.replace(z140660, ' ')) < 6) {return za8d410('z73460b21');}
  zfa67d7.z7b984c = zbad9f0.z7b984c;

  return { z023560: 'zabadc568', zfa67d7 };
}

export const zbd20bf = 'z25d0ce2a';

export const zc388a2 = 'za4fac43c';

export type z2acbd5 = {
  z6db5b0: boolean; z0016d7: string; z7b984c: string;
  z7f5bc6: boolean; za75b47: boolean; zbe9fc8: boolean; z2e85f3: boolean;
};

const z8e4554 = (zbad9f0: string) => z6da76e(zbad9f0).split(' ').filter(Boolean).length;
