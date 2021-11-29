bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
})
bluetooth.startUartService()
let ventilon = 60000
let esperaire = 300000
let humidon = 120000
let todooff = 1200000
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
    basic.pause(ventilon)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(esperaire)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(humidon)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(todooff)
})
