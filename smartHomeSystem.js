// Import node-fetch for asynchronous operations in Node.js
const fetch = require('node-fetch');

// Device Constructor
function Device(name, type) {
    this.name = name;
    this.type = type;
    this.status = 'off';
}

// Device Prototype Methods
Device.prototype.turnOn = function() {
    this.status = 'on';
    console.log(`${this.name} is now ON.`);
};

Device.prototype.turnOff = function() {
    this.status = 'off';
    console.log(`${this.name} is now OFF.`);
};

Device.prototype.checkStatus = function() {
    console.log(`${this.name} is currently ${this.status}.`);
};

// Smart Device Constructor (inherits from Device)
function SmartDevice(name, type, brand, connectivity) {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
}

// Inherit from Device
SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

// Smart Device Methods
SmartDevice.prototype.updateFirmware = async function() {
    console.log(`Checking firmware updates for ${this.name}...`);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(`${this.name} firmware updated successfully!`, data);
    } catch (error) {
        console.log('Firmware update failed:', error);
    }
};

SmartDevice.prototype.checkConnectivity = function() {
    console.log(`${this.name} is connected via ${this.connectivity}.`);
};

// Smart Light Constructor
function SmartLight(name, brand, brightness, color) {
    SmartDevice.call(this, name, 'Light', brand, 'WiFi');
    this.brightness = brightness;
    this.color = color;
}

// Inherit from SmartDevice
SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

// Smart Light Methods
SmartLight.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${this.brightness}.`);
};

SmartLight.prototype.changeColor = function(newColor) {
    this.color = newColor;
    console.log(`${this.name} color changed to ${this.color}.`);
};

// Smart Thermostat Constructor
function SmartThermostat(name, brand, temperature, mode) {
    SmartDevice.call(this, name, 'Thermostat', brand, 'Bluetooth');
    this.temperature = temperature;
    this.mode = mode;
}

// Inherit from SmartDevice
SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

// Smart Thermostat Methods
SmartThermostat.prototype.setTemperature = function(temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${this.temperature}°C.`);
};

SmartThermostat.prototype.changeMode = function(newMode) {
    this.mode = newMode;
    console.log(`${this.name} mode changed to ${this.mode}.`);
};

// Smart Home Constructor
function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

// Smart Home Methods
SmartHome.prototype.addDevice = function(device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s smart home.`);
};

SmartHome.prototype.removeDevice = function(deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
    console.log(`${deviceName} removed from ${this.owner}'s smart home.`);
};

SmartHome.prototype.listDevices = function() {
    console.log(`${this.owner}'s devices:`);
    this.devices.forEach(device => console.log(`- ${device.name} (${device.type})`));
};

// User Constructor
function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username);
}

// User Authentication (Mocked with fetch)
User.prototype.authenticate = async function() {
    console.log(`Authenticating ${this.username}...`);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        if (data.id) {
            console.log(`${this.username} authenticated successfully!`);
            return true;
        } else {
            console.log('Authentication failed.');
            return false;
        }
    } catch (error) {
        console.log('Error during authentication:', error);
        return false;
    }
};

// Demonstration of System Functionality
(async function demo() {
    const light1 = new SmartLight('Living Room Light', 'Philips', 70, 'White');
    const thermostat1 = new SmartThermostat('Home Thermostat', 'Nest', 22, 'Cool');

    const user1 = new User('JohnDoe', 'password123');
    
    // Authenticate User
    await user1.authenticate();
    
    // Manage Smart Home Devices
    user1.smartHome.addDevice(light1);
    user1.smartHome.addDevice(thermostat1);
    user1.smartHome.listDevices();

    // Use Devices
    light1.turnOn();
    light1.adjustBrightness(90);
    light1.changeColor('Blue');
    thermostat1.setTemperature(24);
    thermostat1.changeMode('Heat');

    // Firmware Update
    await light1.updateFirmware();
    
    // Remove Device
    user1.smartHome.removeDevice('Living Room Light');
    user1.smartHome.listDevices();
})();
