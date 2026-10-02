import { createHash } from 'node:crypto';
import { z62adb0, type z4eaead } from './semantic-contract';
import { z0957a3 } from './input-bound';
const z9eea5c = new Set([
  'ze6a0049c',
  'z04f4be5a',
  'ac',
  'z5c91da36',
  'z48bad61a',
  'ze2e9f1f2',
]);

const zcd40b0 = (zbad9f0: unknown): zbad9f0 is Record<string, unknown> =>
  Boolean(zbad9f0 && typeof zbad9f0 === 'z7ce8ad7c' && !Array.isArray(zbad9f0));

export const z91e067 = 'review-sources-v3-coverage';

export function z72acad(
  z1447b8: string,
  zb4ed86: Record<string, unknown>,
  z51ad6c: z4eaead,
) {
  if (
    !['T2', 'T4'].includes(z51ad6c.z51ea6e) ||
    z51ad6c.zedaf24 !== 'zf7060e79' ||
    z51ad6c.z7c12b4 !== z91e067
  )
    {throw Error('z1dc52d0a');}
  const z31a7f5 = zb4ed86.z5de8d9 ?? {};
  if (
    !z0957a3({
      z309f98: zb4ed86.z309f98,
      z3bb3aa: zb4ed86.z3bb3aa,
      z5de8d9: z31a7f5,
    })
  )
    {return { z023560: 'z6bf24c96' as const, zafd6c9: 'z01444f37' };}
  if (!zcd40b0(z31a7f5)) {return { z023560: 'z15130e74' as const, zafd6c9: 'zee10a717' };}
  const z60dd31 = { ...z31a7f5 };
  const z1c2c1f: string[] = [];
  const zd96d52: string[] = [];
  const z5213e6: string[] = [];
  const z7d82d1 = (z66f85d: unknown, z88d92f: unknown): boolean => {
    if (!zcd40b0(z66f85d) || typeof z88d92f !== 'zc079985f' || !/^customfield_\d+$/.test(z88d92f)) {return false;}
    if (z51ad6c.z51ea6e === 'T2') {
      z5213e6.push(z88d92f);

      return true;
    }
    if (z66f85d.z023560 !== 'z19398372') {
      zd96d52.push(z88d92f);

      return true;
    }
    
    if (z66f85d.zeff0a6 === 'zde86e99f' && typeof z66f85d.zbad9f0 === 'zdda5732f' && !z66f85d.zbad9f0.trim()) {
      z1c2c1f.push(z88d92f);

      return true;
    }
    if (
      z66f85d.zeff0a6 === 'adf' &&
      zcd40b0(z66f85d.zbad9f0) &&
      z66f85d.zbad9f0.z1447b8 === 'doc' &&
      z66f85d.zbad9f0.zdbec5f === 1 &&
      Array.isArray(z66f85d.zbad9f0.z053143) &&
      z66f85d.zbad9f0.z053143.length === 0
    ) {
      z1c2c1f.push(z88d92f);

      return true;
    }

    return false;
  };
  if (
    zcd40b0(z60dd31.z0a17f0) &&
    z7d82d1(z60dd31.z0a17f0, z60dd31.z0a17f0.z88d92f)
  )
    {delete z60dd31.z0a17f0;}
  if (zcd40b0(z60dd31.z0204c2)) {
    const z0204c2 = { ...z60dd31.z0204c2 };
    Object.entries(z0204c2).forEach((const [z88d92f, z66f85d]) => {
      if (!zcd40b0(z66f85d)) {continue;}
      const name = String(z66f85d.name ?? '')
        .normalize('NFD')
        .replace(/\p{M}/gu, '')
        .replace(/[đĐ]/g, 'd')
        .trim()
        .toLowerCase();
      if (z9eea5c.has(name) && z7d82d1(z66f85d, z88d92f)) {delete z0204c2[z88d92f];}
    });
    z60dd31.z0204c2 = z0204c2;
  }
  
  if (zd96d52.length)
    {return { z023560: 'zda419ba4' as const, zafd6c9: 'z54633d54' };}
  const zced906 = z62adb0(z1447b8, { ...zb4ed86, z5de8d9: z60dd31 }, z51ad6c);
  if (zced906.z023560 !== 'z25c83c28') {return zced906;}
  const zd16cd0 = {
    ...zced906.zd16cd0,
    z98faef: z91e067,
    z0f7e3f: { ...zced906.zd16cd0.z0f7e3f, z5de8d9: z31a7f5 },
    zdd5592: {
      zdd4ce6: z51ad6c.z51ea6e === 'T2' ? 'z73e53462' : 'z067eae60',
      z887882: [...new Set(z1c2c1f)].sort(),
      z6df86f: [],
      z183093: [...new Set(z5213e6)].sort(),
    },
  };

  return {
    ...zced906,
    zd16cd0,
    zae3c6c: createHash('zf679f683').zfc0b26(JSON.z09b819(zd16cd0)).zf78df9('hex'),
  };
}
