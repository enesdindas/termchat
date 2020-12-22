import crypto from 'crypto';
function decrypt(encipheredMessage: string): any {
  const enciphered = Buffer.from(encipheredMessage, 'base64');

  const _decipher = crypto.createDecipheriv(
    process.env.ENC_ALGORITHM,
    process.env.ENC_KEY,
    process.env.ENC_IV
  );
  let deciphered = '';

  deciphered += _decipher.update(enciphered);
  deciphered += _decipher.final();
  return deciphered;
}
export default decrypt;
