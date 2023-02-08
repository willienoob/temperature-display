input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 30) {
        basic.showLeds(`
            . # # # .
            # # # # #
            . . . . .
            . # . # .
            # . # . .
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
    }
    if (input.temperature() > 30) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
    }
})
