export function getBaseUrl() {
  console.log(process);
  return {
    tag: process.env.CLIENT_TAG || 'test',
    ip: process.env.CLIENT_IP || 'https://msmarket.ir/api/v1'
  }
}

export function getAppVersion() {
  return process.env.CLIENT_VERSION
}
