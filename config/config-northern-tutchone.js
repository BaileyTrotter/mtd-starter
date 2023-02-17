var config = {"L1": {"name": "Northern Tutchone", "lettersInLanguage": ["b", "m", "mb", "th", "dh", "tth", "ddh", "tth\u2019", "t", "d", "t\u2019", "n", "nd", "s", "z", "ts", "dz", "ts\u2019", "r", "\u0142", "tl", "dl", "tl\u2019", "l", "nj", "sh", "zh", "ch", "j", "ch\u2019", "y", "k", "g", "k\u2019", "kh", "gh", "kw", "gw", "k\u2019w", "khw", "ghw", "w", "h", "\u02bc", "i", "e", "ae", "\u00e4", "u", "o", "a", "ay", "aw"], "transducers": {"SFN-approx": [{"\ufefft": "d"}, {"t": "t'"}, {"t": "th"}, {"t": "tth"}, {"t": "ts"}, {"t": "ch"}, {"t": "ch'"}, {"t'": "t"}, {"t'": "ts'"}, {"t'": "tth'"}, {"t'": "tl'"}, {"t'": "ch"}, {"t'": "ch'"}, {"d": "t"}, {"d": "t'"}, {"d": "dh"}, {"d": "ddh"}, {"d": "dz"}, {"d": "nd"}, {"d": "tth"}, {"d": "tth'"}, {"k": "g"}, {"k": "kw"}, {"k": "gw"}, {"k": "k'"}, {"k": "k'w"}, {"k": "kh"}, {"k": "khw"}, {"k": "gh"}, {"k": "ghw"}, {"g": "gw"}, {"g": "k"}, {"g": "k'"}, {"g": "kw"}, {"g": "gw"}, {"g": "k'w"}, {"g": "kh"}, {"g": "khw"}, {"g": "gh"}, {"g": "ghw"}, {"k'": "k"}, {"k'": "k'w"}, {"kw": "k"}, {"kw": "gw"}, {"kw": "k'w"}, {"kw": "khw"}, {"kw": "ghw"}, {"kw": "kh"}, {"kw": "gh"}, {"kw": "w"}, {"gw": "g"}, {"gw": "kw"}, {"gw": "k'w"}, {"gw": "khw"}, {"gw": "ghw"}, {"gw": "kh"}, {"gw": "gh"}, {"gw": "w"}, {"k'w": "k'"}, {"k'w": "kw"}, {"k'w": "gw"}, {"k'w": "khw"}, {"k'w": "ghw"}, {"k'w": "kh"}, {"k'w": "gh"}, {"k'w": "w"}, {"kh": "k"}, {"kh": "g"}, {"kh": "k'"}, {"kh": "kw"}, {"kh": "gw"}, {"kh": "k'w"}, {"kh": "gh"}, {"kh": "khw"}, {"kh": "ghw"}, {"kh": "h"}, {"gh": "g"}, {"gh": "kw"}, {"gh": "gw"}, {"gh": "k'w"}, {"gh": "kh"}, {"gh": "khw"}, {"gh": "h"}, {"gh": "ghw"}, {"khw": "k"}, {"khw": "kw"}, {"khw": "gw"}, {"khw": "k'w"}, {"khw": "ghw"}, {"khw": "kh"}, {"khw": "h"}, {"khw": "gh"}, {"khw": "w"}, {"ghw": "g"}, {"ghw": "kw"}, {"ghw": "gw"}, {"ghw": "k'w"}, {"ghw": "khw"}, {"ghw": "kh"}, {"ghw": "h"}, {"ghw": "gh"}, {"ghw": "w"}, {"n": "nd"}, {"n": "m"}, {"n": "nj"}, {"n": "mb"}, {"m": "mb"}, {"m": "n"}, {"mb": "m"}, {"mb": "n"}, {"mb": "b"}, {"nd": "n"}, {"nd": "nj"}, {"nd": "d"}, {"nd": "m"}, {"nj": "n"}, {"nj": "nd"}, {"nj": "m"}, {"nj": "y"}, {"th": "s"}, {"th": "dh"}, {"th": "tth"}, {"th": "ddh"}, {"th": "tth'"}, {"th": "ts"}, {"dh": "z"}, {"dh": "d"}, {"dh": "dz"}, {"dh": "th"}, {"dh": "tth"}, {"dh": "ddh"}, {"dh": "tth\u02bc"}, {"tth": "t"}, {"tth": "th"}, {"tth": "ts"}, {"tth": "ts'"}, {"tth": "tth'"}, {"tth": "dh"}, {"tth": "ddh"}, {"ddh": "dh"}, {"ddh": "d"}, {"ddh": "th"}, {"ddh": "tth"}, {"tth\u02bc": "tth"}, {"tth\u02bc": "th"}, {"tth\u02bc": "dh"}, {"tth\u02bc": "ddh"}, {"tth\u02bc": "ts"}, {"tth\u02bc": "ts\u02bc"}, {"tth\u02bc": "t\u02bc"}, {"s": "sh"}, {"s": "z"}, {"s": "ts"}, {"s": "zh"}, {"s": "ts\u02bc"}, {"s": "th"}, {"z": "s"}, {"z": "sh"}, {"z": "zh"}, {"z": "dz"}, {"z": "ch"}, {"z": "ch\u02bc"}, {"z": "j"}, {"ts": "s"}, {"ts": "ts\u02bc"}, {"ts": "th"}, {"ts": "tth"}, {"ts": "tth\u02bc"}, {"dz": "z"}, {"dz": "d"}, {"dz": "dh"}, {"dz": "ddh"}, {"ts\u02bc": "ts"}, {"ts\u02bc": "s"}, {"ts\u02bc": "th"}, {"ts\u02bc": "tth"}, {"ts\u02bc": "tth\u02bc"}, {"\u0142": "l"}, {"\u0142": "tl"}, {"\u0142": "tl\u02bc"}, {"\u0142": "dl"}, {"tl": "tl\u02bc"}, {"tl": "dl"}, {"tl": "l"}, {"tl": "\u0142"}, {"dl": "tl"}, {"dl": "tl\u02bc"}, {"dl": "l"}, {"dl": "\u0142"}, {"tl\u02bc": "tl"}, {"tl\u02bc": "dl"}, {"tl\u02bc": "l"}, {"tl\u02bc": "\u0142"}, {"l": "\u0142"}, {"l": "tl"}, {"l": "tl\u02bc"}, {"l": "dl"}, {"l": "y"}, {"sh": "s"}, {"sh": "z"}, {"sh": "zh"}, {"sh": "ch"}, {"sh": "ch\u02bc"}, {"zh": "z"}, {"zh": "sh"}, {"zh": "s"}, {"zh": "ch"}, {"zh": "j"}, {"ch": "zh"}, {"ch": "sh"}, {"ch": "j"}, {"ch": "ch\u02bc"}, {"ch": "z"}, {"ch": "t"}, {"ch": "t\u02bc"}, {"j": "ch"}, {"j": "ch\u02bc"}, {"j": "y"}, {"j": "w"}, {"j": "z"}, {"j": "zh"}, {"ch\u02bc": "ch"}, {"ch\u02bc": "zh"}, {"ch\u02bc": "sh"}, {"ch\u02bc": "j"}, {"ch\u02bc": "z"}, {"ch\u02bc": "t"}, {"ch\u02bc": "t\u02bc"}, {"y": "w"}, {"y": "j"}, {"y": "l"}, {"y": "nj"}, {"w": "y"}, {"w": "kw"}, {"w": "gw"}, {"w": "k\u02bcw"}, {"w": "khw"}, {"w": "ghw"}, {"\u02bc": ""}, {"\u02bc": "\u2019"}, {"h": "khw"}, {"h": "kh"}, {"h": "gh"}, {"h": "ghw"}, {"i": "e"}, {"i": "\u00ed"}, {"i": "\u00ec"}, {"i": "\u012b"}, {"i": "i\u02bc"}, {"i": "\u012f"}, {"i": "\u012f\u0301"}, {"i": "\u012f\u0300"}, {"i": "\u012f\u0304"}, {"i": "\u01d0"}, {"i": "\u012f\u030c"}, {"\u00ed": "i"}, {"\u00ed": "\u00ec"}, {"\u00ed": "\u012b"}, {"\u00ed": "i\u02bc"}, {"\u00ed": "\u012f"}, {"\u00ed": "\u012f\u0301"}, {"\u00ed": "\u012f\u0300"}, {"\u00ed": "\u012f\u0304"}, {"\u00ed": "\u01d0"}, {"\u00ed": "\u012f\u030c"}, {"\u00ec": "i"}, {"\u00ec": "\u00ed"}, {"\u00ec": "\u012b"}, {"\u00ec": "i\u02bc"}, {"\u00ec": "\u012f"}, {"\u00ec": "\u012f\u0301"}, {"\u00ec": "\u012f\u0300"}, {"\u00ec": "\u012f\u0304"}, {"\u00ec": "\u01d0"}, {"\u00ec": "\u012f\u030c"}, {"\u012b": "i"}, {"\u012b": "\u00ed"}, {"\u012b": "\u00ec"}, {"\u012b": "i\u02bc"}, {"\u012b": "\u012f"}, {"\u012b": "\u012f\u0301"}, {"\u012b": "\u012f\u0300"}, {"\u012b": "\u012f\u0304"}, {"\u012b": "\u01d0"}, {"\u012b": "\u012f\u030c"}, {"i\u02bc": "i"}, {"i\u02bc": "\u00ed"}, {"i\u02bc": "\u00ec"}, {"i\u02bc": "\u012b"}, {"i\u02bc": "\u012f"}, {"i\u02bc": "\u012f\u0301"}, {"i\u02bc": "\u012f\u0300"}, {"i\u02bc": "\u012f\u0304"}, {"i\u02bc": "\u01d0"}, {"i\u02bc": "\u012f\u030c"}, {"\u012f": "i"}, {"\u012f": "\u00ed"}, {"\u012f": "\u00ec"}, {"\u012f": "\u012b"}, {"\u012f": "i\u02bc"}, {"\u012f": "\u012f\u0301"}, {"\u012f": "\u012f\u0300"}, {"\u012f": "\u012f\u0304"}, {"\u012f": "\u01d0"}, {"\u012f": "\u012f\u030c"}, {"\u012f\u0301": "i"}, {"\u012f\u0301": "\u00ed"}, {"\u012f\u0301": "\u00ec"}, {"\u012f\u0301": "\u012b"}, {"\u012f\u0301": "i\u02bc"}, {"\u012f\u0301": "\u012f"}, {"\u012f\u0301": "\u012f\u0300"}, {"\u012f\u0301": "\u012f\u0304"}, {"\u012f\u0301": "\u01d0"}, {"\u012f\u0301": "\u012f\u030c"}, {"\u012f\u0300": "i"}, {"\u012f\u0300": "\u00ed"}, {"\u012f\u0300": "\u00ec"}, {"\u012f\u0300": "\u012b"}, {"\u012f\u0300": "i\u02bc"}, {"\u012f\u0300": "\u012f"}, {"\u012f\u0300": "\u012f\u0301"}, {"\u012f\u0300": "\u012f\u0304"}, {"\u012f\u0300": "\u01d0"}, {"\u012f\u0300": "\u012f\u030c"}, {"\u012f\u0304": "i"}, {"\u012f\u0304": "\u00ed"}, {"\u012f\u0304": "\u00ec"}, {"\u012f\u0304": "\u012b"}, {"\u012f\u0304": "i\u02bc"}, {"\u012f\u0304": "\u012f"}, {"\u012f\u0304": "\u012f\u0301"}, {"\u012f\u0304": "\u012f\u0300"}, {"\u012f\u0304": "\u01d0"}, {"\u012f\u0304": "\u012f\u030c"}, {"\u01d0": "i"}, {"\u01d0": "\u00ed"}, {"\u01d0": "\u00ec"}, {"\u01d0": "\u012b"}, {"\u01d0": "i\u02bc"}, {"\u01d0": "\u012f"}, {"\u01d0": "\u012f\u0301"}, {"\u01d0": "\u012f\u0300"}, {"\u01d0": "\u012f\u0304"}, {"\u01d0": "\u012f\u030c"}, {"\u012f\u030c": "i"}, {"\u012f\u030c": "\u00ed"}, {"\u012f\u030c": "\u00ec"}, {"\u012f\u030c": "\u012b"}, {"\u012f\u030c": "i\u02bc"}, {"\u012f\u030c": "\u012f"}, {"\u012f\u030c": "\u012f\u0301"}, {"\u012f\u030c": "\u012f\u0300"}, {"\u012f\u030c": "\u012f\u0304"}, {"\u012f\u030c": "\u01d0"}, {"e": "i"}, {"e": "ae"}, {"e": "ay"}, {"e": "\u00e8"}, {"e": "\u0113"}, {"e": "e\u02bc"}, {"e": "\u0119"}, {"e": "\u0119\u0301"}, {"e": "\u0119\u0300"}, {"e": "\u0119\u0304"}, {"e": "\u011b"}, {"e": "\u0119\u030c"}, {"\u00e9": "e"}, {"\u00e9": "\u00e8"}, {"\u00e9": "\u0113"}, {"\u00e9": "e\u02bc"}, {"\u00e9": "\u0119"}, {"\u00e9": "\u0119\u0301"}, {"\u00e9": "\u0119\u0300"}, {"\u00e9": "\u0119\u0304"}, {"\u00e9": "\u011b"}, {"\u00e9": "\u0119\u030c"}, {"\u00e8": "e"}, {"\u00e8": "\u00e9"}, {"\u00e8": "\u0113"}, {"\u00e8": "e\u02bc"}, {"\u00e8": "\u0119"}, {"\u00e8": "\u0119\u0301"}, {"\u00e8": "\u0119\u0300"}, {"\u00e8": "\u0119\u0304"}, {"\u00e8": "\u011b"}, {"\u00e8": "\u0119\u030c"}, {"\u0113": "e"}, {"\u0113": "\u00e9"}, {"\u0113": "\u00e8"}, {"\u0113": "e\u02bc"}, {"\u0113": "\u0119"}, {"\u0113": "\u0119\u0301"}, {"\u0113": "\u0119\u0300"}, {"\u0113": "\u0119\u0304"}, {"\u0113": "\u011b"}, {"\u0113": "\u0119\u030c"}, {"e\u02bc": "e"}, {"e\u02bc": "\u00e9"}, {"e\u02bc": "\u00e8"}, {"e\u02bc": "\u0113"}, {"e\u02bc": "\u0119"}, {"e\u02bc": "\u0119\u0301"}, {"e\u02bc": "\u0119\u0300"}, {"e\u02bc": "\u0119\u0304"}, {"e\u02bc": "\u011b"}, {"e\u02bc": "\u0119\u030c"}, {"\u0119": "e"}, {"\u0119": "\u00e9"}, {"\u0119": "\u00e8"}, {"\u0119": "\u0113"}, {"\u0119": "e\u02bc"}, {"\u0119": "\u0119\u0301"}, {"\u0119": "\u0119\u0300"}, {"\u0119": "\u0119\u0304"}, {"\u0119": "\u011b"}, {"\u0119": "\u0119\u030c"}, {"\u0119\u0301": "e"}, {"\u0119\u0301": "\u00e9"}, {"\u0119\u0301": "\u00e8"}, {"\u0119\u0301": "\u0113"}, {"\u0119\u0301": "e\u02bc"}, {"\u0119\u0301": "\u0119"}, {"\u0119\u0301": "\u0119\u0300"}, {"\u0119\u0301": "\u0119\u0304"}, {"\u0119\u0301": "\u011b"}, {"\u0119\u0301": "\u0119\u030c"}, {"\u0119\u0300": "e"}, {"\u0119\u0300": "\u00e9"}, {"\u0119\u0300": "\u00e8"}, {"\u0119\u0300": "\u0113"}, {"\u0119\u0300": "e\u02bc"}, {"\u0119\u0300": "\u0119"}, {"\u0119\u0300": "\u0119\u0301"}, {"\u0119\u0300": "\u0119\u0304"}, {"\u0119\u0300": "\u011b"}, {"\u0119\u0300": "\u0119\u030c"}, {"\u0119\u0304": "e"}, {"\u0119\u0304": "\u00e9"}, {"\u0119\u0304": "\u00e8"}, {"\u0119\u0304": "\u0113"}, {"\u0119\u0304": "e\u02bc"}, {"\u0119\u0304": "\u0119"}, {"\u0119\u0304": "\u0119\u0301"}, {"\u0119\u0304": "\u0119\u0300"}, {"\u0119\u0304": "\u011b"}, {"\u0119\u0304": "\u0119\u030c"}, {"\u011b": "e"}, {"\u011b": "\u00e9"}, {"\u011b": "\u00e8"}, {"\u011b": "\u0113"}, {"\u011b": "e\u02bc"}, {"\u011b": "\u0119"}, {"\u011b": "\u0119\u0301"}, {"\u011b": "\u0119\u0300"}, {"\u011b": "\u0119\u0304"}, {"\u011b": "\u0119\u030c"}, {"\u0119\u030c": "e"}, {"\u0119\u030c": "\u00e9"}, {"\u0119\u030c": "\u00e8"}, {"\u0119\u030c": "\u0113"}, {"\u0119\u030c": "e\u02bc"}, {"\u0119\u030c": "\u0119"}, {"\u0119\u030c": "\u0119\u0301"}, {"\u0119\u030c": "\u0119\u0300"}, {"\u0119\u030c": "\u0119\u0304"}, {"\u0119\u030c": "\u011b"}, {"\u00e4": "a"}, {"\u00e4": "\u00e4\u0301"}, {"\u00e4": "\u00e4\u0300"}, {"\u00e4": "\u01df"}, {"\u00e4": "a\u02bc"}, {"\u00e4": "\u0105\u0308"}, {"\u00e4": "\u0105\u0308\u0301"}, {"\u00e4": "\u0105\u0308\u0300"}, {"\u00e4": "\u0105\u0308\u0304"}, {"\u00e4": "\u00e4\u030c"}, {"\u00e4": "\u0105\u0308\u030c"}, {"\u00e4\u0301": "\u00e4\u0300"}, {"\u00e4\u0301": "\u01df"}, {"\u00e4\u0301": "a\u02bc"}, {"\u00e4\u0301": "\u0105\u0308"}, {"\u00e4\u0301": "\u0105\u0308\u0301"}, {"\u00e4\u0301": "\u0105\u0308\u0300"}, {"\u00e4\u0301": "\u0105\u0308\u0304"}, {"\u00e4\u0301": "\u00e4\u030c"}, {"\u00e4\u0301": "\u0105\u0308\u030c"}, {"\u00e4\u0300": "\u00e4\u0301"}, {"\u00e4\u0300": "\u01df"}, {"\u00e4\u0300": "a\u02bc"}, {"\u00e4\u0300": "\u0105\u0308"}, {"\u00e4\u0300": "\u0105\u0308\u0301"}, {"\u00e4\u0300": "\u0105\u0308\u0300"}, {"\u00e4\u0300": "\u0105\u0308\u0304"}, {"\u00e4\u0300": "\u00e4\u030c"}, {"\u00e4\u0300": "\u0105\u0308\u030c"}, {"\u01df": "\u00e4\u0301"}, {"\u01df": "\u00e4\u0300"}, {"\u01df": "a\u02bc"}, {"\u01df": "\u0105\u0308"}, {"\u01df": "\u0105\u0308\u0301"}, {"\u01df": "\u0105\u0308\u0300"}, {"\u01df": "\u0105\u0308\u0304"}, {"\u01df": "\u00e4\u030c"}, {"\u01df": "\u0105\u0308\u030c"}, {"a\u02bc": "\u00e4\u0301"}, {"a\u02bc": "\u00e4\u0300"}, {"a\u02bc": "\u01df"}, {"a\u02bc": "\u0105\u0308"}, {"a\u02bc": "\u0105\u0308\u0301"}, {"a\u02bc": "\u0105\u0308\u0300"}, {"a\u02bc": "\u0105\u0308\u0304"}, {"a\u02bc": "\u00e4\u030c"}, {"a\u02bc": "\u0105\u0308\u030c"}, {"a\u02bc": "a"}, {"\u0105\u0308": "\u00e4\u0301"}, {"\u0105\u0308": "\u00e4\u0300"}, {"\u0105\u0308": "\u01df"}, {"\u0105\u0308": "a\u02bc"}, {"\u0105\u0308": "\u0105\u0308\u0301"}, {"\u0105\u0308": "\u0105\u0308\u0300"}, {"\u0105\u0308": "\u0105\u0308\u0304"}, {"\u0105\u0308": "\u00e4\u030c"}, {"\u0105\u0308": "\u0105\u0308\u030c"}, {"\u0105\u0308\u0301": "\u00e4\u0301"}, {"\u0105\u0308\u0301": "\u00e4\u0300"}, {"\u0105\u0308\u0301": "\u01df"}, {"\u0105\u0308\u0301": "a\u02bc"}, {"\u0105\u0308\u0301": "\u0105\u0308"}, {"\u0105\u0308\u0301": "\u0105\u0308\u0300"}, {"\u0105\u0308\u0301": "\u0105\u0308\u0304"}, {"\u0105\u0308\u0301": "\u00e4\u030c"}, {"\u0105\u0308\u0301": "\u0105\u0308\u030c"}, {"\u0105\u0308\u0300": "\u00e4\u0301"}, {"\u0105\u0308\u0300": "\u00e4\u0300"}, {"\u0105\u0308\u0300": "\u01df"}, {"\u0105\u0308\u0300": "a\u02bc"}, {"\u0105\u0308\u0300": "\u0105\u0308"}, {"\u0105\u0308\u0300": "\u0105\u0308\u0301"}, {"\u0105\u0308\u0300": "\u0105\u0308\u0304"}, {"\u0105\u0308\u0300": "\u00e4\u030c"}, {"\u0105\u0308\u0300": "\u0105\u0308\u030c"}, {"\u0105\u0308\u0304": "\u00e4\u0301"}, {"\u0105\u0308\u0304": "\u00e4\u0300"}, {"\u0105\u0308\u0304": "\u01df"}, {"\u0105\u0308\u0304": "a\u02bc"}, {"\u0105\u0308\u0304": "\u0105\u0308"}, {"\u0105\u0308\u0304": "\u0105\u0308\u0301"}, {"\u0105\u0308\u0304": "\u0105\u0308\u0300"}, {"\u0105\u0308\u0304": "\u00e4\u030c"}, {"\u0105\u0308\u0304": "\u0105\u0308\u030c"}, {"\u00e4\u030c": "\u00e4\u0301"}, {"\u00e4\u030c": "\u00e4\u0300"}, {"\u00e4\u030c": "\u01df"}, {"\u00e4\u030c": "a\u02bc"}, {"\u00e4\u030c": "\u0105\u0308"}, {"\u00e4\u030c": "\u0105\u0308\u0301"}, {"\u00e4\u030c": "\u0105\u0308\u0300"}, {"\u00e4\u030c": "\u0105\u0308\u0304"}, {"\u00e4\u030c": "\u0105\u0308\u030c"}, {"\u0105\u0308\u030c": "\u00e4\u0301"}, {"\u0105\u0308\u030c": "\u00e4\u0300"}, {"\u0105\u0308\u030c": "\u01df"}, {"\u0105\u0308\u030c": "a\u02bc"}, {"\u0105\u0308\u030c": "\u0105\u0308"}, {"\u0105\u0308\u030c": "\u0105\u0308\u0301"}, {"\u0105\u0308\u030c": "\u0105\u0308\u0300"}, {"\u0105\u0308\u030c": "\u0105\u0308\u0304"}, {"\u0105\u0308\u030c": "\u00e4\u030c"}, {"u": "oo"}, {"u": "o"}, {"u": "aw"}, {"u": "\u00fa"}, {"u": "\u00f9"}, {"u": "\u016b"}, {"u": "u\u02bc"}, {"u": "\u0173"}, {"u": "\u0173\u0301"}, {"u": "\u0173\u0300"}, {"u": "\u0173\u0304"}, {"u": "\u01d4"}, {"u": "\u0173\u030c"}, {"\u00fa": "\u00f9"}, {"\u00fa": "\u016b"}, {"\u00fa": "u\u02bc"}, {"\u00fa": "\u0173"}, {"\u00fa": "\u0173\u0301"}, {"\u00fa": "\u0173\u0300"}, {"\u00fa": "\u0173\u0304"}, {"\u00fa": "\u01d4"}, {"\u00fa": "\u0173\u030c"}, {"\u00f9": "\u00fa"}, {"\u00f9": "\u016b"}, {"\u00f9": "u\u02bc"}, {"\u00f9": "\u0173"}, {"\u00f9": "\u0173\u0301"}, {"\u00f9": "\u0173\u0300"}, {"\u00f9": "\u0173\u0304"}, {"\u00f9": "\u01d4"}, {"\u00f9": "\u0173\u030c"}, {"\u016b": "\u00fa"}, {"\u016b": "\u00f9"}, {"\u016b": "u\u02bc"}, {"\u016b": "\u0173"}, {"\u016b": "\u0173\u0301"}, {"\u016b": "\u0173\u0300"}, {"\u016b": "\u0173\u0304"}, {"\u016b": "\u01d4"}, {"\u016b": "\u0173\u030c"}, {"u\u02bc": "\u00fa"}, {"u\u02bc": "\u00f9"}, {"u\u02bc": "\u016b"}, {"u\u02bc": "\u0173"}, {"u\u02bc": "\u0173\u0301"}, {"u\u02bc": "\u0173\u0300"}, {"u\u02bc": "\u0173\u0304"}, {"u\u02bc": "\u01d4"}, {"u\u02bc": "\u0173\u030c"}, {"\u0173": "\u00fa"}, {"\u0173": "\u00f9"}, {"\u0173": "\u016b"}, {"\u0173": "u\u02bc"}, {"\u0173": "\u0173\u0301"}, {"\u0173": "\u0173\u0300"}, {"\u0173": "\u0173\u0304"}, {"\u0173": "\u01d4"}, {"\u0173": "\u0173\u030c"}, {"\u0173\u0301": "\u00fa"}, {"\u0173\u0301": "\u00f9"}, {"\u0173\u0301": "\u016b"}, {"\u0173\u0301": "u\u02bc"}, {"\u0173\u0301": "\u0173"}, {"\u0173\u0301": "\u0173\u0300"}, {"\u0173\u0301": "\u0173\u0304"}, {"\u0173\u0301": "\u01d4"}, {"\u0173\u0301": "\u0173\u030c"}, {"\u0173\u0300": "\u00fa"}, {"\u0173\u0300": "\u00f9"}, {"\u0173\u0300": "\u016b"}, {"\u0173\u0300": "u\u02bc"}, {"\u0173\u0300": "\u0173"}, {"\u0173\u0300": "\u0173\u0301"}, {"\u0173\u0300": "\u0173\u0304"}, {"\u0173\u0300": "\u01d4"}, {"\u0173\u0300": "\u0173\u030c"}, {"\u0173\u0304": "\u00fa"}, {"\u0173\u0304": "\u00f9"}, {"\u0173\u0304": "\u016b"}, {"\u0173\u0304": "u\u02bc"}, {"\u0173\u0304": "\u0173"}, {"\u0173\u0304": "\u0173\u0301"}, {"\u0173\u0304": "\u0173\u0300"}, {"\u0173\u0304": "\u01d4"}, {"\u0173\u0304": "\u0173\u030c"}, {"\u01d4": "\u00fa"}, {"\u01d4": "\u00f9"}, {"\u01d4": "\u016b"}, {"\u01d4": "u\u02bc"}, {"\u01d4": "\u0173"}, {"\u01d4": "\u0173\u0301"}, {"\u01d4": "\u0173\u0300"}, {"\u01d4": "\u0173\u0304"}, {"\u01d4": "\u0173\u030c"}, {"\u0173\u030c": "\u00fa"}, {"\u0173\u030c": "\u00f9"}, {"\u0173\u030c": "\u016b"}, {"\u0173\u030c": "u\u02bc"}, {"\u0173\u030c": "\u0173"}, {"\u0173\u030c": "\u0173\u0301"}, {"\u0173\u030c": "\u0173\u0300"}, {"\u0173\u030c": "\u0173\u0304"}, {"\u0173\u030c": "\u01d4"}, {"o": "u"}, {"o": "aw"}, {"o": "\u00f3"}, {"o": "\u00f2"}, {"o": "\u014d"}, {"o": "o\u02bc"}, {"o": "\u01eb"}, {"o": "\u01eb\u0301"}, {"o": "\u01eb\u0300"}, {"o": "\u01ed"}, {"o": "\u01d2"}, {"o": "\u01eb\u030c"}, {"\u00f3": "\u00f2"}, {"\u00f3": "\u014d"}, {"\u00f3": "o\u02bc"}, {"\u00f3": "\u01eb"}, {"\u00f3": "\u01eb\u0301"}, {"\u00f3": "\u01eb\u0300"}, {"\u00f3": "\u01ed"}, {"\u00f3": "\u01d2"}, {"\u00f3": "\u01eb\u030c"}, {"\u00f2": "\u00f3"}, {"\u00f2": "\u014d"}, {"\u00f2": "o\u02bc"}, {"\u00f2": "\u01eb"}, {"\u00f2": "\u01eb\u0301"}, {"\u00f2": "\u01eb\u0300"}, {"\u00f2": "\u01ed"}, {"\u00f2": "\u01d2"}, {"\u00f2": "\u01eb\u030c"}, {"\u014d": "\u00f3"}, {"\u014d": "\u00f2"}, {"\u014d": "o\u02bc"}, {"\u014d": "\u01eb"}, {"\u014d": "\u01eb\u0301"}, {"\u014d": "\u01eb\u0300"}, {"\u014d": "\u01ed"}, {"\u014d": "\u01d2"}, {"\u014d": "\u01eb\u030c"}, {"o\u02bc": "\u00f3"}, {"o\u02bc": "\u00f2"}, {"o\u02bc": "\u014d"}, {"o\u02bc": "\u01eb"}, {"o\u02bc": "\u01eb\u0301"}, {"o\u02bc": "\u01eb\u0300"}, {"o\u02bc": "\u01ed"}, {"o\u02bc": "\u01d2"}, {"o\u02bc": "\u01eb\u030c"}, {"\u01eb": "\u00f3"}, {"\u01eb": "\u00f2"}, {"\u01eb": "\u014d"}, {"\u01eb": "o\u02bc"}, {"\u01eb": "\u01eb\u0301"}, {"\u01eb": "\u01eb\u0300"}, {"\u01eb": "\u01ed"}, {"\u01eb": "\u01d2"}, {"\u01eb": "\u01eb\u030c"}, {"\u01eb\u0301": "\u00f3"}, {"\u01eb\u0301": "\u00f2"}, {"\u01eb\u0301": "\u014d"}, {"\u01eb\u0301": "o\u02bc"}, {"\u01eb\u0301": "\u01eb"}, {"\u01eb\u0301": "\u01eb\u0300"}, {"\u01eb\u0301": "\u01ed"}, {"\u01eb\u0301": "\u01d2"}, {"\u01eb\u0301": "\u01eb\u030c"}, {"\u01eb\u0300": "\u00f3"}, {"\u01eb\u0300": "\u00f2"}, {"\u01eb\u0300": "\u014d"}, {"\u01eb\u0300": "o\u02bc"}, {"\u01eb\u0300": "\u01eb"}, {"\u01eb\u0300": "\u01eb\u0301"}, {"\u01eb\u0300": "\u01ed"}, {"\u01eb\u0300": "\u01d2"}, {"\u01eb\u0300": "\u01eb\u030c"}, {"\u01ed": "\u00f3"}, {"\u01ed": "\u00f2"}, {"\u01ed": "\u014d"}, {"\u01ed": "o\u02bc"}, {"\u01ed": "\u01eb"}, {"\u01ed": "\u01eb\u0301"}, {"\u01ed": "\u01eb\u0300"}, {"\u01ed": "\u01d2"}, {"\u01ed": "\u01eb\u030c"}, {"\u01d2": "\u00f3"}, {"\u01d2": "\u00f2"}, {"\u01d2": "\u014d"}, {"\u01d2": "o\u02bc"}, {"\u01d2": "\u01eb"}, {"\u01d2": "\u01eb\u0301"}, {"\u01d2": "\u01eb\u0300"}, {"\u01d2": "\u01ed"}, {"\u01d2": "\u01eb\u030c"}, {"\u01eb\u030c": "\u00f3"}, {"\u01eb\u030c": "\u00f2"}, {"\u01eb\u030c": "\u014d"}, {"\u01eb\u030c": "o\u02bc"}, {"\u01eb\u030c": "\u01eb"}, {"\u01eb\u030c": "\u01eb\u0301"}, {"\u01eb\u030c": "\u01eb\u0300"}, {"\u01eb\u030c": "\u01ed"}, {"\u01eb\u030c": "\u01d2"}, {"a": "\u00e4"}, {"a": "a\u02bc"}, {"a": "\u00e1"}, {"a": "\u00e0"}, {"a": "\u0101"}, {"a": "\u0105"}, {"a": "\u0105\u0301"}, {"a": "\u0105\u0300"}, {"a": "\u0105\u0304"}, {"a": "\u01ce"}, {"a": "\u0105\u030c"}, {"\u00e1": "\u00e0"}, {"\u00e1": "\u0101"}, {"\u00e1": "\u0105"}, {"\u00e1": "\u0105\u0301"}, {"\u00e1": "\u0105\u0300"}, {"\u00e1": "\u0105\u0304"}, {"\u00e1": "\u01ce"}, {"\u00e1": "\u0105\u030c"}, {"\u00e0": "\u00e1"}, {"\u00e0": "\u0101"}, {"\u00e0": "\u0105"}, {"\u00e0": "\u0105\u0301"}, {"\u00e0": "\u0105\u0300"}, {"\u00e0": "\u0105\u0304"}, {"\u00e0": "\u01ce"}, {"\u00e0": "\u0105\u030c"}, {"\u0101": "\u00e1"}, {"\u0101": "\u00e0"}, {"\u0101": "\u0105"}, {"\u0101": "\u0105\u0301"}, {"\u0101": "\u0105\u0300"}, {"\u0101": "\u0105\u0304"}, {"\u0101": "\u01ce"}, {"\u0101": "\u0105\u030c"}, {"\u0105": "\u00e1"}, {"\u0105": "\u00e0"}, {"\u0105": "\u0101"}, {"\u0105": "\u0105\u0301"}, {"\u0105": "\u0105\u0300"}, {"\u0105": "\u0105\u0304"}, {"\u0105": "\u01ce"}, {"\u0105": "\u0105\u030c"}, {"\u0105\u0301": "\u00e1"}, {"\u0105\u0301": "\u00e0"}, {"\u0105\u0301": "\u0101"}, {"\u0105\u0301": "\u0105"}, {"\u0105\u0301": "\u0105\u0300"}, {"\u0105\u0301": "\u0105\u0304"}, {"\u0105\u0301": "\u01ce"}, {"\u0105\u0301": "\u0105\u030c"}, {"\u0105\u0300": "\u00e1"}, {"\u0105\u0300": "\u00e0"}, {"\u0105\u0300": "\u0101"}, {"\u0105\u0300": "\u0105"}, {"\u0105\u0300": "\u0105\u0301"}, {"\u0105\u0300": "\u0105\u0304"}, {"\u0105\u0300": "\u01ce"}, {"\u0105\u0300": "\u0105\u030c"}, {"\u0105\u0304": "\u00e1"}, {"\u0105\u0304": "\u00e0"}, {"\u0105\u0304": "\u0101"}, {"\u0105\u0304": "\u0105"}, {"\u0105\u0304": "\u0105\u0301"}, {"\u0105\u0304": "\u0105\u0300"}, {"\u0105\u0304": "\u01ce"}, {"\u0105\u0304": "\u0105\u030c"}, {"\u01ce": "\u00e1"}, {"\u01ce": "\u00e0"}, {"\u01ce": "\u0101"}, {"\u01ce": "\u0105"}, {"\u01ce": "\u0105\u0301"}, {"\u01ce": "\u0105\u0300"}, {"\u01ce": "\u0105\u0304"}, {"\u01ce": "\u0105\u030c"}, {"\u0105\u030c": "\u00e1"}, {"\u0105\u030c": "\u00e0"}, {"\u0105\u030c": "\u0101"}, {"\u0105\u030c": "\u0105"}, {"\u0105\u030c": "\u0105\u0301"}, {"\u0105\u030c": "\u0105\u0300"}, {"\u0105\u030c": "\u0105\u0304"}, {"\u0105\u030c": "\u01ce"}, {"aa": "\u00e1\u00e1"}, {"aa": "a"}, {"aa": "\u00e1"}, {"aa": "\u00e0"}, {"aa": "\u0101"}, {"aa": "\u0105"}, {"aa": "\u0105\u0301"}, {"aa": "\u0105\u0300"}, {"aa": "\u0105\u0304"}, {"aa": "\u01ce"}, {"\u00e1\u00e1": "aa"}, {"\u00e1\u00e1": "a"}, {"\u00e1\u00e1": "\u00e1"}, {"\u00e1\u00e1": "\u00e0"}, {"\u00e1\u00e1": "\u0101"}, {"\u00e1\u00e1": "\u0105"}, {"\u00e1\u00e1": "\u0105\u0301"}, {"\u00e1\u00e1": "\u0105\u0300"}, {"\u00e1\u00e1": "\u0105\u0304"}, {"\u00e1\u00e1": "\u01ce"}, {"ay": "e"}, {"ay": "ai"}, {"ay": "ay\u02bc"}, {"ay\u02bc": "ay"}, {"ay\u02bc": "ai"}, {"ay\u02bc": "e"}, {"aw": "o"}, {"aw": "u"}, {"aw": "aw\u02bc"}, {"aw\u02bc": "aw"}, {"aw\u02bc": "o"}, {"aw\u02bc": "u"}]}}, "L2": {"name": "English"}, "build": "202302170046"}