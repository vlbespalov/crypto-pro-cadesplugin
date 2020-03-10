////////////////////////
// NOTE Imports
////////////////////////

require('./src/lib/cadesplugin_api');
const CertificatesApi = require('./src/сertificatesApi');

////////////////////////
// NOTE cadesplugin await function
////////////////////////

const cadespluginOnload = (async function cadespluginOnload() {
  try {
    await window.cadesplugin;

    const { getCertsList, getCert, currentCadesCert, signBase64, signXml, about } = CertificatesApi;

    return {
      getCertsList,
      getCert,
      currentCadesCert,
      signBase64,
      signXml,
      about,
    };
  } catch (error) {
    throw new Error(error);
  }
})();

////////////////////////
// NOTE Exports
////////////////////////

module.exports = cadespluginOnload;
