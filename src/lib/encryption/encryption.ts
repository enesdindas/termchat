import crypto from 'crypto';

function encrypt(value: string): any {
  const _cipher = crypto.createCipheriv(
    process.env.ENC_ALGORITHM,
    process.env.ENC_KEY,
    process.env.ENC_IV
  );

  let encrypted = _cipher.update(value);
  encrypted = Buffer.concat([encrypted, _cipher.final()]);
  return encrypted.toString('base64');
}

export default encrypt;
