---
title: Cano
sidebar_position: 1
---

## What is Cano?

Cano is a VIM like text editor written in C using the [ncurses](https://invisible-island.net/ncurses/announce.html) library.
Cano was started as a hobby project by [CobbCoding](https://github.com/CobbCoding1). You can find the repository [here](https://github.com/CobbCoding1/Cano).

# How to get started with Cano

## Prerequisites
Cano assumes the following:
- The user is on a Unix-like operating system.
- Has the following dependencies installed:
  - [GCC](https://gcc.gnu.org/)
  - [Make](https://www.gnu.org/software/make/)
  - [ncurses](https://invisible-island.net/ncurses/announce.html)
  - [Autotools](https://en.wikipedia.org/wiki/GNU_Autotools)
  - [pkg-config](https://en.wikipedia.org/wiki/Pkg-config)

## Installation & Build From Source
1. Clone the Cano repository
```sh
git clone https://github.com/CobbCoding1/Cano.git
```

2. Navigate to the Cano directory
```sh
cd path/to/Cano
```

2. Make the generator script executable
```sh
chmod +x autogen.sh
```

3. Run the generator script
```sh
./autogen.sh
```

The build files will be stored at `path/to/cano/build`.

4. Compile cano
```sh
make -C build
```

5. Run cano
```sh
./build/cano
```

## OS Specific Installation

### Arch Linux
Arch users can use their preferred AUR helper to install Cano by using this [AUR package](https://aur.archlinux.org/packages/cano) 

For instance, if using `yay`, run the following command:
```sh
yay -S cano-git
```

### Debian/Ubuntu
Debian and Ubuntu users can build Cano from source and install it directly to `usr/local/bin`

**Note** This process assumes that you have a C compiler(preferably GCC), Autotools, pkg-config and the ncurses library installed. For more information on how to install these dependencies, see the [Prerequisites](#prerequisites) section.

Here are the steps to install Cano on Debian/Ubuntu:

1. Install dependencies
```sh
sudo apt install gcc autoconf automake libtool pkg-config make libncurses-dev
```

2. Clone the Cano repository
```sh
git clone https://github.com/CobbCoding1/Cano && cd Cano
```

3. Run the autogen.sh script
```sh
chmod +x autogen.sh && ./autogen.sh
```

4. Change to the build directory and build Cano using Make
```sh
cd build
make
```

5. Install Cano
```sh
sudo make install
```

### Nix/NixOS
Due to Cano's build system undergoing several changes recently, Nix installation is not supported at this time. Please check back later as Cano is still under development.


## Using Cano

### Modes
There are 6 modes in Cano:

- Global Mode
- Normal Mode
- Insert Mode
- Visual Mode
- Search Mode
- Command Mode

<b>Global Mode</b> is the default mode when Cano is opened.

<b>Normal mode</b> is used for motions and deletions.

<b>Insert mode</b> is used for inserting text.

<b>Visual mode</b> is used for selecting text and performing actions on the selected text.

<b>Search mode</b> is used for searching for text in the current buffer.

<b>Command mode</b> allows the user to run commands.


### Motions(Keybinds)
There are several motions that can be used within Cano. From moving the postion of the cursor to performing actions on lines!

Here are some of the most common and useful motions:

- `Esc` - Enters Normal Mode while in Global mode
- `Ctrl + Q`- Quits out of Cano *regarless of mode*
- `/` - Enters Search Mode
- `v` - Enters Visual Mode
- `i` - Enters Insert Mode
- `h` - Moves the cursor left
- `j` - Moves the cursor down
- `k` - Moves the cursor up
- `l` - Moves the cursor right
- `Ctrl + S` - Saves the current file and exits Cano

For the full list of usable Cano motions while in <b>Global</b> and <b>Normal</b> mode, see the table below.

|Mode  | Keybind        | Action    |
|------|----------------|-----------|
|Global | Esc | Enter Normal Mode |
|Global| Ctrl + Q       | Quit (regardless of mode)                       |
|Global| Esc            | Enter Normal Mode                               |
|Normal| h              | Move cursor left                                |
|Normal| j              | Move cursor down                                |
|Normal| k              | Move cursor up                                  |
|Normal| l              | Move cursor right                               |
|Normal| x              | Delete character                                |
|Normal| g              | Go to first line                                |
|Normal| G              | Go to last line                                 |
|Normal| 0              | Go to beginning of line                         |
|Normal| $              | Go to end of line                               |
|Normal| w              | Go to next word                                 |
|Normal| b              | Go to last word                                 |
|Normal| e              | Go to end of next word                          |
|Normal| o              | Create line below current                       |
|Normal| O              | Create line above current                       |
|Normal| Ctrl + o       | Create line below current without changing mode |
|Normal| %              | Go to corresponding brace                       |
|Normal| i              | Enter insert mode                               |
|Normal| I              | Go to beginning of line                         |
|Normal| a              | Insert mode on next char                        |
|Normal| A              | Insert mode at end of line                      |
|Normal| v              | Enter visual mode                               |
|Normal| V              | Enter visual mode by line                       |
|Normal| u              | Undo                                            |
|Normal| U              | Redo                                            |
|Normal| /              | Enter Search mode                               |
|Normal| n              | Jump to next search                             |
|Normal| Ctrl + S       | Save and exit                                   |
|Normal| r              | Replace current char with next char inputted    |
|Normal| (n) + motion   | Repeat next motion n times                      |
|Normal| (d) + motion   | Delete characters of next motion n times        |
|Normal| Ctrl + n       | Open file explorer                              |

#### Visual Mode

Visual mode works the same as Normal mode, except it works on the entire selection, instead of character by character.

| Mode   | Keybind        | Action                                          |
|--------|----------------|-------------------------------------------------|
| Visual | &gt;               | Indent current selection                        |
| Visual | &lt;               | Unindent current selection                      |


#### Search Mode
Search takes in a string and then finds each occurence of the string in the file.
**Note**: If prepended with `s/` then this action will the substring(first) string with the second string.
An example of this would be:
```sh
s/hello/bye/
```
This will replace all instances of `hello` with `bye` in the file.

#### Command Mode
| Mode   | Command               | Action                                                    |
|--------|-----------------------|-----------------------------------------------------------|
| Command| set-output            | change output file                                        |
| Command| echo (v)              | echo value (v) where v is either an ident or a literal    |
| Command| we                    | Write and exit                                            |
| Command| e                     | Write without exiting                                     |
| Command| set-var (var) (value) | Change a config variable                                  |
| Command| set-map (a) "(b)"     | Map key a to any combination of keys b                    |
| Command| let (n) (v)           | Create variable (n) with value (v)                        |
| Command| !(command)            | Execute a shell command                                   |


#### Special Keys
There are several speacial keys that can be remapped.
| Key          |
|--------------|
| \<space>     |
| \<esc>       |
| \<backspace> |
| \<enter>     |
| \<ctrl-t>    |


### Configuring Cano
Certain aspects of Cano can be configured via main config file which is `config.cano` 
By default, this file is located at `~/.config/cano/config.cano`; however this can be manually set at runtime by running the following command:
```sh
./cano --config <config/file/path/name>
```

#### Config File Breakdown
The format of the config file is the same as how you would write a **command** in Command mode. 
**Note**: This is VERY important to remember.
Here is an example of how this looks:
```sh
set-var syntax 1
set-var indent 2
```

#### Config Variables
```sh
relative #toggles relative line numbers
auto-indent #toggles auto indentation
syntax #toggles syntax highlighting
indent #sets the indent width
undo-size Sets the size of the `undo` history
```

There is a second config file that is exclusively used for custom syntax highlighting!
This file is stored in the same default location as the main config file but it uses a different naming convention. An example of this is:
```sh
~/.config/cano/c.cyntax
```
**Note** The word Syntax is spelled with a c instead of and s because...c is for Cano duh!

The `c.` in the example above represents the language that the syntax file is for. In this case it is the C programming language. If you want to create custom syntax highlighting for the Go programming language you can create a file called `go.cyntax`instead.


Here is an example of the contents of the `*.cyntax` file:

```C
k,170,68,68,
auto,struct,break,else,switch,case,
enum,register,typedef,extern,return,
union,continue,for,signed,void,do,
if,static,while,default,goto,sizeof,
volatile,const,unsigned.
t,255,165,0,
double,size_t,int,
long,char,float,short.
w,128,160,255.
```

Let's break down what is happening here. The single characters, in this case `k`,`t`,and `w`, represent the type of keyword it is.
- `k` represents a keyword.
- `t` represents a type.
- `w` represents a word.

The types is then followed by a comma and then the RGB values for the color. No spaces should be used.
Starting on the next line, after the RGB values, list the keywords,types,or words that should use the color. If the list is getting a bit long you can continue the list on the next line by ending the current line with a `,`. After the list of the particular keyword, type, or word is completed end the line with a `.` This indicates to Cano that the list is complete. The default value for the "words" is meant to be a bit darker than the other keywords and types. This is to increase readability.


## Canoon(Beta)
Canoon is the official Cano installer and manager, currently in beta.
To learn about Canoon you can head over to the [Canoon GitHub Repository](https://github.com/kul-sudo/canoon) or you can go to the [Canoon section](/docs/canoon) of the docs 






