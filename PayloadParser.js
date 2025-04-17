function parseUplink(device, payload) {
    var e = device.endpoints.byAddress("1");
    e.updateFlowSensorValueSummation();	
}