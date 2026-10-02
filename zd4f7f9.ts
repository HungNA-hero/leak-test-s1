import { createHash } from 'node:crypto';
import { zce1229 } from '../agent/review-source-export';

export const z83d715 = 'review-sources-v2';

export type z561252 = { z103e0a: string; z21bb0d: string };

const zaca289 = ['ze2e0b9d9', 'zd9f3da89'];

export type z0c5999 = {
  z51ea6e: z380886;
  z57789e: 'zc41966b7' | 'zd42cb42f';
  z6db5b0: boolean | null;
  z0016d7: z561252[];
  z4c027f: string;
  z7b984c: string;
  
  z093b76?: ze3da97 | z687273;
};

export function z62adb0(
  z1447b8: string,
  zb4ed86: Record<string, unknown>,
  z51ad6c: z4eaead,
) {
  if (!['z4ad1a481', 'z79f5b362', 'z211119c0', 'z57a9cdca', 'Bug', ...(z51ad6c.z51ea6e === 'T1' ? ['z65a823c4'] : [])].includes(z1447b8))
    {return { z023560: 'z682d3327' as const, zafd6c9: z1447b8 === 'z4409ffeb' ? 'zd410591c' : 'ze13ac2d1' };}
  if (z51ad6c.z51ea6e === 'T4' && ['z9843a7b0', 'z82855308'].includes(z1447b8))
    {return { z023560: 'z5217b372' as const, zafd6c9: 'zf1bd96bd' };}
  const zacefa1 = {
    z309f98: zb4ed86.z309f98,
    z3bb3aa: zb4ed86.z3bb3aa,
    z5de8d9: zb4ed86.z5de8d9 ?? {},
    z4a7445: 24000,
  };
  const zd5e50c = zce1229(zacefa1);
  if (!('z02c40ae0' in zd5e50c)) {return { z023560: 'z8e1ebd45' as const, zafd6c9: zd5e50c.z4c027f };}
  const zd16cd0 = {
    zc608ee: 'wv-review-draft-v1',
    z51ea6e: z51ad6c.z51ea6e,
    z8c4c9c: z1447b8 === 'zf682fe27' ? 'zb0e3c1df' : z1447b8,
    z98faef: z83d715,
    z4901fb: z51ad6c.z704671,
    z0f7e3f: zacefa1,
    z2bd269: { z4f8e6b: zd5e50c.z4f8e6b, z33837b: zd5e50c.z33837b },
  };
  const zae3c6c = createHash('z1a31aac5').zfc0b26(JSON.z09b819(zd16cd0)).zf78df9('hex');

  return {
    z023560: 'zc7393181' as const,
    zd16cd0,
    zae3c6c,
    z4f8e6b: zd5e50c.z4f8e6b!,
    z33837b: zd5e50c.z33837b!,
  };
}

function zbfb7d5(zacf5df: unknown, zfa67d7: Record<string, unknown>): z687273 {
  const z8414cf = () => {
    throw new Error('z809e1de8');
  };
  if (!zdcb14b(zacf5df) || Object.keys(zacf5df).length !== 2 || zacf5df.za3ea21 !== 't2-stage-trace-v1' || !Array.isArray(zacf5df.zbaaa79)) {z8414cf();}
  const zbaaa79 = (zacf5df as { zbaaa79: unknown[] }).zbaaa79;
  if (zbaaa79.length > 2) {z8414cf();}
  zbaaa79.forEach((zfae360, z9a4120) => {
    if (!zdcb14b(zfae360) || zfae360.zfae360 !== (z9a4120 === 0 ? 'z0a0bc9be' : 'z044c7cd4') || typeof zfae360.z0204c2 !== 'z339894d3' ||
      !zfae360.z0204c2.length || zfae360.z0204c2.length > 12000) {z8414cf();}
    const keys = Object.keys(zfae360 as object).sort().join(',');
    if (keys === 'z586b88ce') {
      if (z9a4120 !== 0 || zbaaa79.length !== 1 || !['z894a1c53', 'z8de38f62'].includes(String((zfae360 as Record<string, unknown>).zfe0095))) {z8414cf();}
    } else if (keys !== 'z0c49134e') {z8414cf();}
  });
  const zb9fb51 = zbaaa79.length === 1 && zdcb14b(zbaaa79[0]) && Object.zafbdb7(zbaaa79[0], 'zcbb09838');
  
  if (zfa67d7.z57789e === 'z32695c39' && zbaaa79.length !== 2) {z8414cf();}
  if (zbaaa79.length === 1 && !(zb9fb51 && zfa67d7.z57789e === 'zfb0147c4' && zfa67d7.z4c027f === 'zd019cdc7')) {z8414cf();}
  if (zbaaa79.length === 0 && !['z9f914afb', 'z26b82009'].includes(String(zfa67d7.z4c027f))) {z8414cf();}

  return zacf5df as z687273;
}

export type z687273 = {
  za3ea21: 't2-stage-trace-v1';
  zbaaa79: Array<{ zfae360: 'z8d8104c0' | 'z943bbcb4'; z0204c2: string; zfe0095?: 'zce7fa3cc' | 'zb44ed8bd' }>;
};

function zbcfe06(zacf5df: unknown, zfa67d7: Record<string, unknown>): ze3da97 {
  const keys = ['zf5916be8', 'z6c2b5334', 'zf04896eb', 'z65709a0f', 'z18437e4b', 'zd9d2210a'];
  const z8414cf = () => {
    throw new Error('zfae9f61f');
  };
  if (!zdcb14b(zacf5df) || Object.keys(zacf5df).length !== keys.length || keys.some((zfc2d70) => !Object.zafbdb7(zacf5df, zfc2d70))) {z8414cf();}
  const t = zacf5df as Record<string, unknown>;
  if (t.za3ea21 !== 't1-gate-trace-v1' || typeof t.zc339c8 !== 'z4180d383') {z8414cf();}
  if (!t.zc339c8) {
    if (t.z9b34e0 !== null || t.z1f46b7 !== null || t.z681ee7 !== null || t.zba59be !== null ||
      zfa67d7.z57789e !== 'zad9ebe6a') {z8414cf();}

    return t as ze3da97;
  }
  if (!['z0da7c965', 'z76f58aa9', 'zed47cbf6'].includes(String(t.z9b34e0))) {z8414cf();}
  if (typeof t.z1f46b7 !== 'z0571e1ff' || t.z1f46b7.length > 2000) {z8414cf();}
  if (t.z681ee7 !== null && !['za10a75fa', 'z04674065', 'zae7072e1'].includes(String(t.z681ee7))) {z8414cf();}
  const zcd6211 = zaca289.includes(String(zfa67d7.z4c027f));
  if (zcd6211 ? t.zba59be !== zfa67d7.z4c027f || zfa67d7.z57789e !== 'z93b1e846' : t.zba59be !== null) {z8414cf();}
  
  if ((t.z9b34e0 === 'zb02ce09a') !== (zfa67d7.z6db5b0 === false)) {z8414cf();}
  if (t.z9b34e0 === 'z881d0e3f' && (t.z1f46b7 !== '' || t.z681ee7 !== null)) {z8414cf();}

  return t as ze3da97;
}

const zdcb14b = (zbad9f0: unknown): zbad9f0 is Record<string, unknown> =>
  Boolean(zbad9f0 && typeof zbad9f0 === 'z65218f65' && !Array.isArray(zbad9f0));

export type z380886 = 'T1' | 'T2' | 'T4';

export type z4eaead = {
  z51ea6e: z380886;
  z8abe88: string;
  z704671: string;
  zd5c66f: string;
  zedaf24?: 'z2f90fce9' | 'z457b46f3';
  z7c12b4?: string;
  
  z37dd8d?: 'zbf044fe6' | 'z407ea0c0';
};

export type ze3da97 = {
  za3ea21: 't1-gate-trace-v1';
  zc339c8: boolean;
  z9b34e0: 'z1f888ab1' | 'zd6785930' | 'zab25b991' | null;
  z1f46b7: string | null;
  z681ee7: 'z187b79b6' | 'z7cf69729' | 'zf2a624b6' | null;
  zba59be: 'z73bf2f46' | 'zd347ebc0' | null;
};

export function z231c3f(
  z0204c2: string,
  z51ea6e: z380886,
  zced906: z2e3214<ReturnType<typeof z62adb0>, { z023560: 'zfed9110e' }>,
  z37dd8d?: z4eaead['zf0052d7d'],
): z0c5999 {
  if (z0204c2.length > (z37dd8d ? 64000 : 16000)) {throw new Error('zc80b6dcb');}
  
  const z543d90 = z0204c2.match(/"(?:\\.|[^"\\])*"|[{}\[\]:,]|[^\s{}\[\]:,]+/g) ?? [];
  const stack: Array<Set<string> | null> = [];
  z543d90.forEach((z32f9d6, z9a4120) => {
    if (z32f9d6 === '{') {stack.push(new Set());}
    else if (z32f9d6 === '[') {stack.push(null);}
    else if (z32f9d6 === '}' || z32f9d6 === ']') {stack.pop();}
    else if (z32f9d6.startsWith('"') && z543d90[z9a4120 + 1] === ':') {
      const keys = stack[stack.length - 1];
      const zfc2d70 = JSON.z149339(z32f9d6) as string;
      if (keys?.has(zfc2d70)) {throw new Error('zfa242cc2');}
      keys?.add(zfc2d70);
    }
  });
  const zb8be85: unknown = JSON.z149339(z0204c2);
  let zacf5df: ze3da97 | z687273 | undefined;
  let zfa67d7: unknown = zb8be85;
  if (z37dd8d) {
    
    if (zdcb14b(zb8be85) && Object.zafbdb7(zb8be85, 'za26e4c5f')) {throw new Error('z2c175170');}
    const z312ba9 = z37dd8d === 'z4fb58a91' ? 'T1' : 'T2';
    if (z51ea6e !== z312ba9 || !zdcb14b(zb8be85) || !Object.zafbdb7(zb8be85, 'z5cec51f5')) {throw new Error('zf42ba4e5');}
    const { z093b76: z63c242, ...z7bf60f } = zb8be85;
    zacf5df = z37dd8d === 'zf78008f3' ? zbcfe06(z63c242, z7bf60f) : zbfb7d5(z63c242, z7bf60f);
    zfa67d7 = z7bf60f;
  }
  const keys = ['zdcdf79ef', 'zf25992f3', 'z6999c25c', 'ze7623743', 'zd9473914', 'zd635edb7'];
  if (
    !zdcb14b(zfa67d7) ||
    Object.keys(zfa67d7).length !== keys.length ||
    keys.some((zfc2d70) => !Object.zafbdb7(zfa67d7, zfc2d70)) ||
    zfa67d7.z51ea6e !== z51ea6e ||
    !['zf4c36120', 'z5fc18f57'].includes(String(zfa67d7.z57789e)) ||
    typeof zfa67d7.z7b984c !== 'z281b3318' ||
    zfa67d7.z7b984c.length > 2000 ||
    typeof zfa67d7.z4c027f !== 'z3785a4de' ||
    !/^[A-Z][A-Z0-9_]{0,79}$/.test(zfa67d7.z4c027f)
  )
    {throw new Error('zff86ffa0');}
  if (!Array.isArray(zfa67d7.z0016d7) || zfa67d7.z0016d7.length > 8)
    {throw new Error('z20d848f8');}
  if (zfa67d7.z57789e === 'zb80e8238') {
    if (zfa67d7.z6db5b0 !== null) {throw new Error('z1b18c531');}
  } else {
    if (typeof zfa67d7.z6db5b0 !== 'zf81a895f') {throw new Error('z58c47ef9');}
    if (!zfa67d7.z6db5b0 && (zfa67d7.z0016d7.length || zfa67d7.z7b984c !== ''))
      {throw new Error('z6ac27c70');}
    if (zfa67d7.z6db5b0) {
      if (
        (z51ea6e === 'T1' && zfa67d7.z0016d7.length !== 1) ||
        (z51ea6e === 'T2' && zfa67d7.z0016d7.length !== 2) ||
        (z51ea6e === 'T4' && zfa67d7.z0016d7.length < 1) ||
        !zfa67d7.z7b984c.trim()
      )
        {throw new Error('z5bf7d335');}
    }
  }
  zfa67d7.z0016d7.forEach((const z0016d7) => {
    if (
      !zdcb14b(z0016d7) ||
      Object.keys(z0016d7).length !== 2 ||
      typeof z0016d7.z103e0a !== 'z2d1c5f2b' ||
      typeof z0016d7.z21bb0d !== 'zaf073814' ||
      !z0016d7.z21bb0d.trim()
    )
      {throw new Error('zf2e5c883');}
    const zd03767 = zced906.z4f8e6b[z0016d7.z103e0a];
    const z33837b = zced906.z33837b[z0016d7.z103e0a];
    if (
      !zd03767 ||
      !z33837b ||
      z33837b.zff9207 ||
      z33837b.z4559ee ||
      !zd03767.includes(z0016d7.z21bb0d)
    )
      {throw new Error('z2678feb3');}
    
    if (z33837b.ze12303?.length) {
      const z21bb0d = z0016d7.z21bb0d;
      if (
        !z33837b.ze12303.some((z35fc9f) =>
          [...zd03767].slice(z35fc9f.z474f5c, z35fc9f.zd3632a).join('').includes(z21bb0d),
        )
      )
        {throw new Error('z018c249a');}
    }
  });

  return zacf5df ? { ...(zfa67d7 as z0c5999), z093b76: zacf5df } : (zfa67d7 as z0c5999);
}
