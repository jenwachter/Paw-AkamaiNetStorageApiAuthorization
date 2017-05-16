// https://paw.cloud/docs/dynamic-values/utils#Timestamp
function getTimestamp() {
  var dv = new DynamicValue('com.luckymarmot.TimestampDynamicValue', {
    now: true,
    format: 1 // Epoch Time
  });
  return dv.getEvaluatedString();
}

// https://paw.cloud/docs/dynamic-values/utils#Nonce
function getNonce() {
  var dv = new DynamicValue('com.luckymarmot.NonceDynamicValue', {
    useUppercaseLetters: true,
    useHexDigits: true
  });
  return dv.getEvaluatedString();
}

var AkamaiNetStorageApiAuthorizationData = function () {

  this.evaluate = function (context) {

    return "5, 0.0.0.0, 0.0.0.0, " + getTimestamp() + ", " + getNonce() + ", " + this.key_name;

  };

};

/**
 * API Client Authentication docs:
 * https://control.akamai.com/dl/customers/NS/NS_http_api_FS.pdf#page=15
 */
 AkamaiNetStorageApiAuthorizationData.identifier = 'com.jenwachter.PawExtensions.AkamaiNetStorageApiAuthorizationData';
 AkamaiNetStorageApiAuthorizationData.title = 'Akamai NetStorage Authorization Data';
 AkamaiNetStorageApiAuthorizationData.help = 'https://github.com/jenwachter/Paw-AkamaiNetStorageApiAuthorizationData';
 AkamaiNetStorageApiAuthorizationData.inputs = [
     DynamicValueInput('key_name', 'Key Name', 'String')
 ];

 registerDynamicValueClass(AkamaiNetStorageApiAuthorizationData);
