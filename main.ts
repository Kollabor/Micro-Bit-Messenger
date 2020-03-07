input.onButtonPressed(Button.B, function () {
    if (editorMode == 0) {
        led.stopAnimation()
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
        basic.clearScreen()
        editorMode = 1
        letterIndex = 0
        messageOutgoing = ""
    } else {
        led.stopAnimation()
        editorMode = 0
        if (messageOutgoing.length > 0) {
            showAnimation("outgoing")
            radio.sendString(messageOutgoing)
        }
        basic.showIcon(IconNames.LeftTriangle)
        basic.pause(1000)
        basic.clearScreen()
    }
})
function displayMessage (message: string) {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(500)
    basic.clearScreen()
    basic.showString(message)
    basic.pause(500)
    basic.showIcon(IconNames.Chessboard)
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (editorMode == 0) {
        displayMessage(messageIncoming)
    }
})
radio.onReceivedString(function (receivedString) {
    messageIncoming = receivedString
    music.playTone(1200, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(1200, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(1200, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(1200, music.beat(BeatFraction.Half))
    showAnimation("incoming")
    if (editorMode == 0) {
        displayMessage(messageIncoming)
    }
})
function showAnimation (animationName: string) {
    if (animationName == "incoming") {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.clearScreen()
    }
    if (animationName == "outgoing") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
}
let messageIncoming = ""
let messageOutgoing = ""
let letterIndex = 0
let editorMode = 0
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_.!?"
editorMode = 0
basic.showIcon(IconNames.LeftTriangle)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    while (editorMode == 1) {
        basic.showString(letters.substr(letterIndex, 1))
        if (input.acceleration(Dimension.X) < -300 && letterIndex > 0) {
            letterIndex += -1
        }
        if (input.acceleration(Dimension.X) > 300 && letterIndex < letters.length - 1) {
            letterIndex += 1
        }
        if (input.acceleration(Dimension.Y) < -300) {
            messageOutgoing = messageOutgoing.substr(0, messageOutgoing.length - 1)
            basic.showArrow(ArrowNames.West)
            basic.pause(1000)
        }
        if (input.acceleration(Dimension.Y) > 300) {
            messageOutgoing = "" + messageOutgoing + letters.substr(letterIndex, 1)
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
        }
        if (input.buttonIsPressed(Button.A)) {
            displayMessage(messageOutgoing)
        }
    }
})
