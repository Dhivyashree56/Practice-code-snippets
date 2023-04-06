var awsIoT= require('aws-iot-device-sdk');

var device = awsIoT.device({
    keyPath: './cert/ae90cb3bfea6dcd316043c992b94b820d98f8d6fe12cdc1419806b448b20dbf3-private.pem.key',
    certPath: './cert/ae90cb3bfea6dcd316043c992b94b820d98f8d6fe12cdc1419806b448b20dbf3-certificate.pem.crt',
    caPath: './cert/AmazonRootCA1.pem',
    clientId: 'myLaptop',
    host: 'a2izr3qechs7zh-ats.iot.eu-north-1.amazonaws.com',
    port: 8883
})

device
    .on('connect',function(){
        console.log('connect');
        device.publish('receive-topic1',JSON.stringify({test_data: 'Hello from topic1...!'}));
        device.subscribe('receive-topic1');
        device.publish('send_topic2',JSON.stringify({test_data: 'Hello from node js client...!'}));
        console.log('Message sent successfully');
    });

device
    .on('message',function(topic,payload){
        console.log('message',topic,payload.toString());
    });