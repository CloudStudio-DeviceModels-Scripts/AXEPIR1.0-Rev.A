function getConfiguration(config)  { 
    config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}
  
function getEndpoints(deviceAddress, endpoints) {
    endpoints.addEndpoint("1", "Contador", endpointType.peopleFlowSensor);
}
  
function validateDeviceAddress(address, result) {
    /*
    address = address.toLowerCase();
    result.ok = true;
    if (address.length == 16) { 
        var validchars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', '', 'c', 'd', 'e', 'f'];
        for (var i = 0; i < address.length; i++) {
            if (!validchars.includes(address.charAt(i))) {
                result.ok = false;
                break;
            }
        }
    }
    else {
        result.ok = false;
    }
    if (!result.ok)
        result.errorMessage = {
            en: "The address must be 16 characters long and only have hexadecimal characters", 
            es: "La dirección debe tener 16 caracteres y tener sólo caracteres hexadecimales"
        };
   */   
}
  
  
function updateDeviceUIRules(device, rules) {
    rules.canCreateEndpoints = false;
    //No fueron especificadas reglas para los dispositivos
}
  
  
function updateEndpointUIRules(endpoint, rules) {
    rules.canDelete = true;
    //No fueron especificadas reglas para los endpoints
}