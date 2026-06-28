# TODO: Audio Signal Processor

Write a Python script that processes WAV audio files using DSP techniques (standard library only).

## Requirements
- Read and write WAV files using the `wave` module
- Implement the following effects: amplify (scale samples by a factor), normalize (scale to peak amplitude), fade in/out (linear ramp over N milliseconds), reverse, trim silence from ends, and mix two audio files together
- Implement a simple low-pass filter using a moving average
- Implement a basic FFT (Cooley-Tukey recursive) to analyze frequency content
- Display a text-based frequency spectrum for the first 0.5 seconds
- CLI: `python audio.py <input.wav> <output.wav> <effect> [args...]`
- Support chaining effects: `python audio.py in.wav out.wav amplify 1.5 normalize fade_in 500`
