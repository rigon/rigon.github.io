# Subtitles synchronizer

> Subtitles synchronizer is a command line tool that synchronizes subtitles of a movie. Sometimes subtitles are in offset with the movie and is enough to slide the subtitles some seconds backwards or forwards to match with the movie.

> This program only works with `SRT` files and is written in C.

> [Source Code](/subtitles-synchronizer/subtitles-synchronizer-src.zip) - [Windows binary](/subtitles-synchronizer/subtitles.exe) - [Linux binary](/subtitles-synchronizer/subtitles.bin)


## Compiling

You can compile with `Visual Studio` or `gcc`.

You can use `make` or this command:

    gcc -O3 -Wall -o subtitles main.c


## Usage

The program receives two parameters, `offset` and `mult`:

 - `offset` is the offset that you want introduce
 - `mult` (optional, is `1` by default) is a multiplier to be multiplied with `offset`, usually is used only with `1` and `-1` for forward or backward respectively

The processing is made from the standard input to the standard output.

## Example

Example to push the subtitles 5 seconds backwards:

    $ subtitles 5 -1 < original_subtitles.srt > new_subtitles.srt
