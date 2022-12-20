class SwitchButton {
    status;
    lamp;

    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp(lamp){
        if(this.status){
            this.switchOn()
            lamp.turnOn()
        } else {
            this.switchOff()
            lamp.turnOff();
        }
    }
    switchOn(){
        this.status = true;
        console.log('Công Tắc Bật')
    }
    switchOff(){
        this.status = false;
        console.log('Công Tắc Tắt')
    }
}
class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }
    turnOn(){
        this.status = true;
        console.log('ĐÈN SÁNG')
    }
    turnOff(){
        this.status = false;
        console.log('ĐÈN TẮT')
    }
}
