export interface Option {
    label: string,
    value: number;
}

export const Modifiers: Array<Option> = [
    {label: "MOD_LCTRL", value: 0xE0},
    {label: "MOD_LSHIFT", value: 0xE1},
    {label: "MOD_LALT", value: 0xE2},
    {label: "MOD_LMETA", value: 0xE3},
    {label: "MOD_RCTRL", value: 0xE0},
    {label: "MOD_RSHIFT", value: 0xE1},
    {label: "MOD_RALT", value: 0xE2},
    {label: "MOD_RMETA", value: 0xE3},
]

export const Empty: Array<Option> = [
    {label: "EMPTY", value: 0x0},
]


export const Letters: Array<Option> = [
    {label: "a", value: 0x04},
    {label: "b", value: 0x05},
    {label: "c", value: 0x06},
    {label: "d", value: 0x07},
    {label: "e", value: 0x08},
    {label: "f", value: 0x09},
    {label: "g", value: 0x0a},
    {label: "h", value: 0x0b},
    {label: "i", value: 0x0c},
    {label: "j", value: 0x0d},
    {label: "k", value: 0x0e},
    {label: "l", value: 0x0f},
    {label: "m", value: 0x10},
    {label: "n", value: 0x11},
    {label: "o", value: 0x12},
    {label: "p", value: 0x13},
    {label: "q", value: 0x14},
    {label: "r", value: 0x15},
    {label: "s", value: 0x16},
    {label: "y", value: 0x17},
    {label: "u", value: 0x18},
    {label: "v", value: 0x19},
    {label: "w", value: 0x1a},
    {label: "x", value: 0x1b},
    {label: "y", value: 0x1c},
    {label: "z", value: 0x1d},
]

export const Numbers: Array<Option> = [
    {label: "1", value: 0x1e},
    {label: "2", value: 0x1f},
    {label: "3", value: 0x20},
    {label: "4", value: 0x21},
    {label: "5", value: 0x22},
    {label: "6", value: 0x23},
    {label: "7", value: 0x24},
    {label: "8", value: 0x25},
    {label: "9", value: 0x26},
    {label: "0", value: 0x27},
]

export const Utilities: Array<Option> = [
    {label: "ENTER", value: 0x28},
    {label: "ESC", value: 0x29},
    {label: "BACKSPACE", value: 0x2a},
    {label: "TAB", value: 0x2b},
    {label: "SPACE", value: 0x2c},
    {label: "MINUS", value: 0x2d},
    {label: "EQUAL", value: 0x2e},
    {label: "LEFTBRACE", value: 0x2f},
    {label: "RIGHTBRACE", value: 0x30},
    {label: "BACKSLASH", value: 0x31},
    {label: "HASHTILDE", value: 0x32},
    {label: "SEMICOLON", value: 0x33},
    {label: "APOSTROPHE", value: 0x34},
    {label: "GRAVE", value: 0x35},
    {label: "COMMA", value: 0x36},
    {label: "DOT", value: 0x37},
    {label: "SLASH", value: 0x38},
    {label: "CAPSLOCK", value: 0x39},


    {label: "OPEN", value: 0x74},
    {label: "HELP", value: 0x75},
    {label: "PROPS", value: 0x76},
    {label: "FRONT", value: 0x77},
    {label: "STOP", value: 0x78},
    {label: "UNDO", value: 0x7a},
    {label: "CUT", value: 0x7b},
    {label: "FIND", value: 0x7e},
    {label: "MUTE", value: 0x7f},
    {label: "VOLUMEUP", value: 0x80},
    {label: "VOLUMEDOWN", value: 0x81},
]

export const Functional: Array<Option> = [
    {label: "F1", value: 0x3a},
    {label: "F2", value: 0x3b},
    {label: "F3", value: 0x3c},
    {label: "F4", value: 0x3d},
    {label: "F5", value: 0x3e},
    {label: "F6", value: 0x3f},
    {label: "F7", value: 0x40},
    {label: "F8", value: 0x41},
    {label: "F9", value: 0x42},
    {label: "F10", value: 0x43},
    {label: "F11", value: 0x44},
    {label: "F12", value: 0x45},
    {label: "F13", value: 0x68},
    {label: "F14", value: 0x69},
    {label: "F15", value: 0x6a},
    {label: "F16", value: 0x6b},
    {label: "F17", value: 0x6c},
    {label: "F18", value: 0x6d},
    {label: "F19", value: 0x6e},
    {label: "F20", value: 0x6f},
    {label: "F21", value: 0x70},
    {label: "F22", value: 0x71},
    {label: "F23", value: 0x72},
    {label: "F24", value: 0x73},

    {label: "PRINT_SCREEN", value: 0x46},
    {label: "SCROLLLOCK", value: 0x47},
    {label: "PAUSE", value: 0x48},
    {label: "INSERT", value: 0x49},
    {label: "HOME", value: 0x4a},
    {label: "PAGEUP", value: 0x4b},
    {label: "DELETE", value: 0x4c},
    {label: "END", value: 0x4d},
    {label: "PAGEDOWN", value: 0x4e},
    {label: "RIGHT", value: 0x4f},
    {label: "LEFT", value: 0x50},
    {label: "DOWN", value: 0x51},
    {label: "UP", value: 0x52},

    {label: "NUMLOCK", value: 0x53},
    {label: "KPSLASH", value: 0x54},
    {label: "KPASTERISK", value: 0x55},
    {label: "KPMINUS", value: 0x56},
    {label: "KPPLUS", value: 0x57},
    {label: "KPENTER", value: 0x58},
    {label: "KP1", value: 0x59},
    {label: "KP2", value: 0x5a},
    {label: "KP3", value: 0x5b},
    {label: "KP4", value: 0x5c},
    {label: "KP5", value: 0x5d},
    {label: "KP6", value: 0x5e},
    {label: "KP7", value: 0x5f},
    {label: "KP8", value: 0x60},
    {label: "KP9", value: 0x61},
    {label: "KP0", value: 0x62},
    {label: "KPDOT", value: 0x63},

    {label: "COMPOSE", value: 0x65},
    {label: "POWER", value: 0x66},
    {label: "KPEQUAL", value: 0x67},
]

export const Media: Array<Option> = [

    {label: "MEDIA_PLAYPAUSE", value: 0xe8},
    {label: "MEDIA_STOPCD", value: 0xe9},
    {label: "MEDIA_PREVIOUSSONG", value: 0xea},
    {label: "MEDIA_NEXTSONG", value: 0xeb},
    {label: "MEDIA_EJECTCD", value: 0xec},
    {label: "MEDIA_VOLUMEUP", value: 0xed},
    {label: "MEDIA_VOLUMEDOWN", value: 0xee},
    {label: "MEDIA_MUTE", value: 0xef},
    {label: "MEDIA_WWW", value: 0xf0},
    {label: "MEDIA_BACK", value: 0xf1},
    {label: "MEDIA_FORWARD", value: 0xf2},
    {label: "MEDIA_STOP", value: 0xf3},
    {label: "MEDIA_FIND", value: 0xf4},
    {label: "MEDIA_SCROLLUP", value: 0xf5},
    {label: "MEDIA_SCROLLDOWN", value: 0xf6},
    {label: "MEDIA_EDIT", value: 0xf7},
    {label: "MEDIA_SLEEP", value: 0xf8},
    {label: "MEDIA_COFFEE", value: 0xf9},
    {label: "MEDIA_REFRESH", value: 0xfa},
    {label: "MEDIA_CALC", value: 0xfb},
]

export const GroupedOptions = [
    {
      label: "Empty",
      options: Empty
    },
    {
        label: "Modifiers",
        options: Modifiers
    },
    {
        label: "Letters",
        options: Letters
    },
    {
        label: "Numbers",
        options: Numbers
    },
    {
        label: "Utilities",
        options: Utilities
    },
    {
        label: "Functional",
        options: Functional
    },
    {
        label: "Media",
        options: Media
    },
]
