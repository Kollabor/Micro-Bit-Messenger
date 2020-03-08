# Micro Bit Messenger
This is a silly chat program which uses the built-in radio function (and the Nordic Gazell protocol) of the Micro Bit to send and receive messages. To write messages you only need some patience, no external hardware is required. Optionally you can connect a speaker to the P0 pin to hear the incoming message notification sound.

## Usage
The program works in two modes: a receiver mode and a composer/sender mode, which can be toggled using the "B" button.

When turning on the Micro Bit, a triangle icon appears on the screen for one second - this is supposed to be an antennae symbol, which signifies the receiver mode. If there is an incoming message while in receiver mode, the incoming notification sound will play, an animation will appear on the screen (an arrow moving downwards from the top) and then the incoming message will start scrolling on the screen. You can press the "A" button in receiver mode to read the last incoming message again.

You can switch over from the receiver mode using the "B" button; at this point a icon that looks like a pair of scissors will appear on the screen for one second, which signifies the message composer function. You can scroll through the letters of the English alphabet (and a few punctuation marks) by tilting the Micro Bit left and right (along the X axis). By tilting the device downwards (along the Y axis), you can add the currently displaying letter to the end of your message; a check mark will appear on the screen for one second. You can also delete the last character of your message by tilting the Micro Bit upwards (along the Y axis); an arrow pointing to the left will appear on the screen for one second. While in this mode, you can press the "A" button at any point to review the message you are composing. You can leave this mode by pressing the "B" button; at this point your message will be sent to the other Micro Bit device(s), after a small animation (an arrow moving upwards from the button). After sending your message, the program will switch back to receiver mode.

If you want to leave composer/sender mode without sending your message, you can either delete your message one letter at a time or reset the Micro Bit (which will also delete the last incoming message of course).

If you receive a message while in composer/sender mode, a notification sound will be played and the incoming message animation will also play, but the incoming message won't be shown on screen. You can read the last incoming message by pressing "A" in receiver mode.
