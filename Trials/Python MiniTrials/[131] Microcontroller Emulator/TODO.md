# TODO: Microcontroller Emulator

Write a Python script emulating an AVR ATmega328P microcontroller (as used in Arduino Uno).

## Requirements
- Implement 32 8-bit general-purpose registers (R0–R31)
- Implement all ALU instructions: `ADD`, `ADC`, `SUB`, `SBC`, `AND`, `OR`, `EOR`, `COM`, `NEG`, `INC`, `DEC`, `MUL`, `MULS`, `MULSU`, `LSR`, `ASR`, `ROL`, `ROR`, `SWAP`
- Implement branch instructions: `RJMP`, `RCALL`, `RET`, `RETI`, `BREQ`, `BRNE`, `BRCS`, `BRCC`, `BRSH`, `BRLO`, `BRMI`, `BRPL`, `BRVS`, `BRVC`, `BRIE`, `BRID`
- Simulate peripherals: Timer0 (8-bit, overflow interrupt), UART (print bytes to stdout), GPIO (print pin state changes)
- Load Intel HEX format firmware files
- Implement interrupt handling: global interrupt flag, interrupt vector table
- Run the Arduino `Blink` sketch and a UART `Hello World` sketch
