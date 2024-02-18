# Register Machine

> [Register Machines](https://en.wikipedia.org/wiki/Register_machine) are a computational model useful to make proofs about computational theories. They are very useful in theory of Computer Science. A similar model are the [Turing Machines](https://en.wikipedia.org/wiki/Turing_machine). The definition of the Register Machines can be found in these [lecture notes](/register-machine/computabilidade.pdf), section 1.2 (in portuguese). It is built in C++.

> [Source Code](/register-machine/register-machine-src.zip)

## Usage

Extract the source code into your project.
Include the file `regmachine.h` and add the file `regmachine.cpp` to your files to compile.
Compile with `g++` or with `Visual Studio`.
You can use `make examples` to build the examples.

## Language

This language is an extension to the C++ language. As such, before compiling, the programs are translated into C++ code and compiled as so. All features of C++ are still valid and can be used, but since Register Machines are a computational model usually this is not useful.

 - A program should start by including `regmachine.h` header file.
 - Then should follow the declaration of all registers that will be used. You can initialize the register with some input.
 - To start the definition of the machine with `INIT_REGMACHINE` and, as argument, you have to provide the alphabet used. The definition of the machine should end with `END_REGMACHINE`.

The examples bellow should be self explanatory about the instructions allowed.


## Examples

Decide AlphaPar (file `dec-AlphaPar.cpp`):

	#include "regmachine.h"

	Register R0("aaa");

	INIT_REGMACHINE("a")

	L0 IF R0=E THEN L6 ELSE L1;
	L1 LET R0=R0-a;
	L2 IF R0=E THEN L5 ELSE L3;
	L3 LET R0=R0-a;
	L4 IF R0=E THEN L6 ELSE L1;
	L5 LET R0=R0+a;
	L6 PRINT;
	L7 HALT;

	END_REGMACHINE

Enumerate AnBn (file `enum-AnBn.cpp`):

	#include "regmachine.h"

	Register R0;
	Register R1;

	INIT_REGMACHINE("ab")

	L0 PRINT;
	L1 IF R0=E THEN L5 ELSE L5 OR L2;
	L2 LET R0=R0-b;
	L3 LET R1=R1+b;
	L4 IF R0=E THEN L5 ELSE L5 OR L2;
	L5 LET R0=R0+a;
	L6 LET R0=R0+b;
	L7 IF R1=E THEN L11 ELSE L7 OR L8;
	L8 LET R1=R1-b;
	L9 LET R0=R0+b;
	L10 IF R1=E THEN L11 ELSE L7 OR L8;
	L11 PRINT;

	PAUSE

	L12 IF R0=E THEN L1 ELSE L1 OR L1;
	L13 HALT;


	END_REGMACHINE
