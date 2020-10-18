input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    basic.pause(3000)
    Snelheid = DFRobotMaqueenPlus.readSpeed(Motors1.M1)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    huskylens.writeOSD(convertToText(Snelheid), 150, 30)
})
let Snelheid = 0
DFRobotMaqueenPlus.I2CInit()
Snelheid = 0
let Toeren = 0
basic.forever(function () {
    huskylens.writeOSD(DFRobotMaqueenPlus.readeDistance(Motors1.M1), 150, 60)
})
