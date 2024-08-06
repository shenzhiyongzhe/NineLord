const TipColorList = [
    ["#2f3b23", [[4, 0, "#ffc95a"], [4, 4, "#fed455"], [9, 1, "#2c3721"], [24, 4, "#fff59e"]]],
    ["#2b3422", [[4, 0, "#ebbe52"], [10, -1, "#2a3421"], [24, 1, "#fbf19d"], [33, 2, "#dfd68b"]]],
    ["#262f1d", [[5, -1, "#f5c355"], [11, 2, "#303b23"], [25, 2, "#fff69e"], [33, 3, "#fff69e"]]],
    ["#efbd55", [[1, 5, "#d1b346"], [20, 2, "#eee594"], [29, 2, "#f0e796"], [35, 2, "#f0e896"]]],
    ["#f1bf55", [[21, 4, "#e9e091"], [29, 4, "#e6de8f"], [35, 4, "#f6ee99"], [41, 1, "#fef59e"]]],
    ["#ffc85a", [[20, 2, "#fff59e"], [28, 3, "#fff59e"], [34, 3, "#fff59e"], [40, 2, "#fdf49e"]]],
    ["#deb24e", [[21, 5, "#f8ef9b"], [28, 6, "#ebe292"], [34, 6, "#ece392"], [41, 1, "#fef59e"]]],
    ["#ebbb53", [[20, 0, "#f0e896"], [29, 1, "#ece392"], [35, 3, "#f3eb98"], [41, 2, "#f8ef9b"]]],
    ["#f8c656", [[21, 6, "#fcf39d"], [29, 6, "#fff59e"], [34, 5, "#fdf39e"], [40, 2, "#fef59e"]]],
    ["#eebe54", [[22, 7, "#e6de8f"], [29, 7, "#fff59e"], [34, 7, "#ece392"], [40, 2, "#fef59e"]]],
    ["#ffc75b", [[21, 6, "#fdf49e"], [29, 7, "#fff59e"], [34, 7, "#fff59e"], [39, 3, "#f4eb98"]]],
    ["#fcc759", [[21, 2, "#fcf19d"], [29, 6, "#fff59e"], [34, 4, "#f2ea98"], [40, 2, "#fef59e"]]],
    ["#ffc75b", [[21, 5, "#fcf39e"], [29, 5, "#fff59e"], [34, 5, "#fff59e"], [40, 4, "#f7ef9b"]]],
    ["#ffc95a", [[22, 4, "#868051"], [28, 6, "#ece392"], [34, 7, "#fff59e"], [39, 3, "#fef59e"]]],
    ["#fec45b", [[21, 6, "#e2d98d"], [29, 7, "#9e9861"], [33, 5, "#f2e998"], [34, 9, "#e3da8d"]]],
    ["#ffc65b", [[21, 7, "#f8ef9b"], [29, 7, "#ece492"], [33, 3, "#cfc781"], [34, 11, "#fff59e"]]],
    ["#ffc95b", [[21, 5, "#fdf49e"], [29, 4, "#fcf19d"], [28, 9, "#e6de8f"], [34, 8, "#fff69e"]]],
    ["#ffc95b", [[21, 5, "#fdf49e"], [29, 5, "#fcf19d"], [34, 5, "#fff69e"], [39, 4, "#fff69e"]]],
    ["#f0e796", [[7, 1, "#f9f09b"], [7, 3, "#f9f09b"], [12, -2, "#dcd589"], [13, 4, "#fff59e"]]],
    ["#e0d78b", [[9, -1, "#e4db8d"], [14, -2, "#fff59e"], [14, 3, "#fff59e"], [19, -3, "#fef49e"]]],
    ["#fec85b", [[21, 5, "#fdf49e"], [29, 4, "#fff59e"], [29, 8, "#fff59e"], [34, 5, "#fff59e"]]],
    ["#e4da8d", [[0, 7, "#faf09d"], [8, 4, "#fff59e"], [14, 0, "#fdf39e"], [14, 9, "#fdf39e"]]],
    ["#e0d78b", [[7, 0, "#fff59e"], [13, 0, "#dbd489"], [17, 0, "#f0e796"], [12, 5, "#f5ec99"]]],
    ["#e9e191", [[7, 0, "#fff59e"], [12, 0, "#e9e191"], [13, 0, "#f6ee99"], [17, 0, "#fef59e"]]],
    ["#ffc75b", [[21, 4, "#e6de8f"], [28, 5, "#fff59e"], [33, 5, "#ece492"], [33, 8, "#ece492"]]],
    ["#e7de8f", [[8, -1, "#ebe292"], [8, 4, "#ebe292"], [15, 0, "#f9f09b"], [21, 0, "#fcf39e"]]],
    ["#e8df91", [[7, 0, "#f8ef9b"], [14, 0, "#e9e091"], [19, -4, "#efe694"], [19, -2, "#f1e996"]]]

];

const ArrowColorList = {
    up: [
        ["#d3d1cd", [[3, -2, "#cbc9c3"], [4, -4, "#f6f5f2"], [7, -2, "#f0efeb"], [9, 0, "#d7d6d1"]]],
        ["#d3d0cd", [[2, -2, "#e5e5e1"], [4, -4, "#f7f6f2"], [7, -2, "#f0efeb"], [10, 1, "#c2bfbc"]]],
        ["#d4d1cd", [[2, -2, "#e5e5e1"], [4, -4, "#f6f6f2"], [6, -3, "#f4f3f0"], [9, 0, "#d8d6d1"]]],
        ["#e1dfd8", [[3, -3, "#f8f7f4"], [4, -3, "#fffefa"], [6, -1, "#f3f1ed"], [7, 0, "#ebe9e3"]]],
        ["#e6e5e1", [[2, -2, "#f7f6f4"], [3, -2, "#fefdfa"], [4, -1, "#f6f4f2"], [6, 1, "#e6e4e1"]]],
        ["#f0f0eb", [[0, -1, "#ebe9e7"], [1, -1, "#fffdfc"], [2, 0, "#f2f1ef"], [3, 1, "#eae9e5"]]],
        ["#e3e2dc", [[1, -1, "#ebe8e5"], [2, -1, "#fffcfa"], [3, 0, "#f0f0ed"], [4, 1, "#e7e7e3"]]],
        ["#f0f0eb", [[0, -1, "#eceae7"], [0, -1, "#eceae7"], [1, -1, "#fffefc"], [3, 1, "#ebeae5"]]],
        ["#f1f1f0", [[1, -1, "#f8f8f8"], [2, -1, "#fafafa"], [2, -2, "#f0f0f0"], [3, -1, "#f4f3f2"]]],
        ["#f0efeb", [[1, 0, "#f6f5f0"], [2, -1, "#fcfcfa"], [3, 0, "#fcfbf8"], [4, 1, "#faf8f4"]]],
        ["#f0efeb", [[1, 0, "#f6f5f0"], [1, -1, "#f4f3f0"], [2, -1, "#fcfcfa"], [3, 1, "#e2e1dc"]]],
        ["#ededed", [[1, -1, "#f4f4f4"], [2, -1, "#fafafa"], [3, -1, "#e8e8e7"], [3, 0, "#e3e3e3"]]],
        ["#ededed", [[1, -2, "#d3d1d1"], [1, -1, "#f4f4f4"], [2, -1, "#fafafa"], [3, 0, "#e3e3e3"]]],
        ["#f4f4f4", [[1, -1, "#fcfcfc"], [2, -1, "#f0f0ef"], [2, 0, "#e8e8e7"], [3, 0, "#ededed"]]],
        ["#f4f4f4", [[1, -1, "#fcfcfc"], [2, 0, "#e8e8e7"], [4, 1, "#e9e9e7"], [1, -2, "#d9d9d8"]]],
        ["#fffffa", [[1, 0, "#f0ede7"], [1, -1, "#fffffd"], [2, -1, "#f5f4ef"], [3, 0, "#f4f2ed"]]],
        ["#f9f9f8", [[1, -1, "#fcfcfc"], [1, -1, "#fcfcfc"], [3, -1, "#878584"], [3, 1, "#e6e6e5"]]],
        ["#fcfcf8", [[1, -1, "#fffffd"], [1, 0, "#eae8e5"], [2, 0, "#f6f4f0"], [3, 0, "#efeeeb"]]],
        ["#fafaf8", [[1, 0, "#e7e6e5"], [1, -1, "#fefefc"], [2, -1, "#efefed"], [4, 1, "#e9e7e7"]]],
        ["#fafaf8", [[1, -1, "#fefefc"], [2, -1, "#efefed"], [3, 0, "#ececeb"], [3, 1, "#e7e7e5"]]],
        ["#f0ede9", [[0, -1, "#edece7"], [1, -1, "#fffffc"], [2, -1, "#eae9e5"], [2, 0, "#efece9"]]],
        ["#edebe7", [[1, -1, "#fffefa"], [1, -2, "#dadad6"], [2, -1, "#e9e8e3"], [3, 0, "#e6e4e1"]]],
        ["#efede9", [[1, -1, "#fffffc"], [2, -1, "#eae9e5"], [2, 0, "#eeece9"], [3, 0, "#e8e6e3"]]],
        ["#eeece9", [[0, -1, "#ecebe7"], [1, -1, "#fffefc"], [2, -1, "#e9e8e5"], [2, 0, "#edebe9"]]],
        ["#efede9", [[0, -1, "#edece7"], [1, -1, "#fffffc"], [2, -1, "#eae9e5"], [2, 0, "#eeece9"]]],
        ["#edebe7", [[0, -1, "#ebeae5"], [1, -1, "#fefdfa"], [2, -1, "#e8e7e3"], [2, 0, "#ecebe7"]]],
        ["#ecebe7", [[0, -1, "#ebeae5"], [1, -1, "#fefdfa"], [2, -1, "#e8e7e3"], [2, 0, "#ebeae7"]]],
        ["#e7e6e5", [[0, -1, "#f7f7f4"], [1, -1, "#f8f8f6"], [1, -2, "#f9f9f6"], [2, -2, "#f6f6f2"]]],
        ["#faf9f6", [[1, 0, "#fbfaf8"], [1, -1, "#fcfcf8"], [2, -1, "#faf9f4"], [2, 0, "#ffffff"]]],
        ["#fcfbf6", [[1, 0, "#fcfcf8"], [1, -1, "#fcfcf8"], [2, -1, "#faf9f4"], [3, 1, "#f8f7f2"]]],
        ["#fcfbf6", [[1, -1, "#fcfcf8"], [2, -1, "#faf9f4"], [2, 0, "#ffffff"], [3, 1, "#f8f7f2"]]],
        ["#f0ede7", [[1, -1, "#fefcf8"], [1, -2, "#fdfcf8"], [3, -1, "#fdfcf6"], [3, 0, "#faf8f2"]]],
        ["#f1f0ef", [[1, 0, "#f8f8f6"], [1, -1, "#f5f5f2"], [2, 0, "#fcfcfc"], [2, 1, "#bbb8b6"]]],
        ["#f8f8f6", [[0, -1, "#f5f4f2"], [1, -1, "#e2e1df"], [1, -1, "#e2e1df"], [2, 1, "#f6f6f6"]]],
        ["#f6f4f0", [[1, 0, "#fcfcf8"], [1, -1, "#fbfaf4"], [2, -1, "#e8e7e1"], [3, 1, "#fbfaf8"]]],
        ["#f4f2ef", [[2, 0, "#fffefc"], [2, -1, "#e4e3df"], [3, 1, "#fafaf6"], [1, -1, "#f7f6f2"]]],
        ["#f7f5f0", [[2, 0, "#fffffd"], [1, 0, "#fdfcf8"], [1, -1, "#f9f8f4"], [3, 1, "#fcfcf8"]]],
        ["#f1f0ef", [[1, -1, "#fbf9f6"], [2, -2, "#e9e9e5"], [2, -1, "#fffefc"], [3, 0, "#eeede9"]]],
        ["#efefed", [[1, -1, "#f8f7f4"], [1, -2, "#e1e1dc"], [2, -2, "#e7e7e5"], [3, -1, "#e9e9e7"]]],
        ["#f1f0ef", [[1, -1, "#faf9f4"], [1, -2, "#e3e2dc"], [2, -2, "#e9e8e5"], [3, 0, "#eeede9"]]],
        ["#f8f8f8", [[1, 0, "#f8f8f8"], [1, -1, "#f6f6f4"], [2, -1, "#d8d8d6"], [2, 0, "#fafafa"]]],
        ["#fffefa", [[1, 0, "#fffefa"], [1, -1, "#fffdf8"], [2, 0, "#fffffc"], [3, 1, "#fcfbf6"]]],
        ["#f7f7f6", [[1, -1, "#f8f8f8"], [2, -1, "#f8f8f8"], [2, -2, "#f5f5f4"], [3, -1, "#fafafa"]]],
        ["#fcfbf8", [[1, 0, "#f3f2f0"], [1, -1, "#fffefa"], [2, 0, "#fbfaf8"], [3, 1, "#f5f4f0"]]]
    ],
    down: [
        ["#bbb8b5", [[3, 2, "#f2f1ef"], [5, 3, "#fdfcfc"], [7, 2, "#e7e5e3"], [8, 1, "#e4e3e1"]]],
        ["#f4f2eb", [[2, 2, "#fcfbf6"], [3, 2, "#fffffd"], [5, 1, "#eeebe5"], [6, -1, "#e1ded6"]]],
        ["#f4f2eb", [[3, 2, "#fffffd"], [3, 3, "#eeece7"], [5, 0, "#e8e6df"], [6, -1, "#e1ded6"]]],
        ["#eaeae9", [[3, 2, "#fcfbfc"], [2, 3, "#bfbebc"], [5, 0, "#dfdfdc"], [6, -1, "#d4d3d1"]]],
        ["#f4f2eb", [[3, 2, "#fffffd"], [3, 3, "#eeece7"], [4, 1, "#f4f2ed"], [5, 0, "#e8e6df"]]],
        ["#ececeb", [[1, 1, "#fafafa"], [2, 1, "#efeeed"], [2, 2, "#bdbdbc"], [3, 0, "#e8e7e7"]]],
        ["#ececeb", [[1, 1, "#fafafa"], [2, 1, "#efeeed"], [3, 0, "#e8e7e7"], [1, 2, "#cececd"]]],
        ["#e6e5e3", [[1, 0, "#fbfbfa"], [1, 1, "#e4e3e1"], [2, 1, "#dbdad8"], [2, 0, "#f6f5f4"]]],
        ["#ebe9e7", [[1, 1, "#fbfbfa"], [1, 2, "#e4e3e1"], [2, 2, "#dbdad8"], [3, 0, "#eeeded"]]],
        ["#f6f5f4", [[1, 0, "#f9f9f8"], [1, 1, "#f0f0f0"], [3, 0, "#bebdbc"], [3, -1, "#f3f3f2"]]],
        ["#f6f5f4", [[1, 0, "#f9f9f8"], [1, 1, "#f0f0f0"], [2, 1, "#c7c6c6"], [2, 0, "#f6f6f6"]]],
        ["#dbdbda", [[1, 1, "#dbdada"], [3, 1, "#f2f2f2"], [3, 2, "#cecdcd"], [4, 0, "#ebebe9"]]],
        ["#ebeae9", [[1, 1, "#fafafa"], [2, 1, "#f2f2f2"], [1, 2, "#d8d7d6"], [3, 0, "#ebebe9"]]],
        ["#f6f4f0", [[1, 1, "#fcfcf8"], [2, 1, "#f4f4f0"], [3, 0, "#efeee9"], [1, 2, "#bfbebc"]]],
        ["#f6f4f0", [[1, 0, "#e5e4e1"], [1, 1, "#fcfcf8"], [1, 2, "#bfbebc"], [3, 0, "#efeee9"]]],
        ["#f7f5f0", [[1, 1, "#fcfcf8"], [1, 2, "#c1bfbc"], [2, 1, "#f5f4f0"], [3, 0, "#f0efeb"]]],
        ["#f7f6f4", [[1, 1, "#fbfaf8"], [2, 1, "#faf9f6"], [3, 0, "#f2f1f0"], [2, 2, "#d1d0cb"]]],
        ["#fbfaf6", [[3, 0, "#f6f5f2"], [2, 1, "#fcfcf8"], [1, 1, "#fcfcfa"], [2, 2, "#d3d1cd"]]],
        ["#fcfbf6", [[2, 1, "#fdfcf8"], [1, 1, "#fefcfa"], [2, 2, "#d4d3cd"], [3, 0, "#f7f6f2"]]],
        ["#fcfaf6", [[1, 1, "#fffffd"], [2, 1, "#fcfcf8"], [2, 2, "#fffefc"], [3, 1, "#fffffd"]]],
        ["#fffffd", [[1, 0, "#fcfbf8"], [2, 0, "#fffffd"], [1, 1, "#fffefc"], [1, 2, "#c4c4be"]]],
        ["#fffffd", [[1, 0, "#fefdf8"], [1, 1, "#fffffc"], [1, 2, "#c7c6c1"], [3, -1, "#fffffc"]]],
        ["#fbfaf4", [[1, 1, "#fdfcf8"], [2, 2, "#fefdfa"], [4, 1, "#f6f4f0"], [5, 0, "#f1f0eb"]]],
        ["#fbf9f4", [[3, 2, "#fcfcf8"], [3, 2, "#fcfcf8"], [4, 1, "#f5f4f0"], [5, 0, "#f1efeb"]]],
        ["#f8f7f4", [[2, 1, "#efefeb"], [3, 2, "#fbfaf6"], [4, 1, "#f2f2ef"], [5, 0, "#efedeb"]]],
        ["#ebebeb", [[2, 1, "#fcfcfc"], [3, 2, "#efefef"], [4, 1, "#ebebeb"], [5, 0, "#e8e8e7"]]],
        ["#ebebeb", [[2, 1, "#fdfcfc"], [3, 2, "#f0f0ef"], [4, 0, "#e6e6e5"], [5, 0, "#e8e8e7"]]],
        ["#fffcf6", [[1, 1, "#ffffff"], [2, 2, "#fbf9f2"], [3, 0, "#f1f0e9"], [4, 0, "#f3f1eb"]]]

    ],
    left: [
        ["#e0e0df", [[-2, 2, "#f3f3f2"], [-4, 5, "#f2f2f0"], [-1, 7, "#cdcccb"], [0, 8, "#c1bebe"]]],
        ["#d1d0cf", [[-2, 2, "#e9e9e7"], [-5, 5, "#f9f9fa"], [-3, 8, "#e4e3e3"], [-1, 10, "#d1d0cf"]]],
        ["#f0f0ef", [[-2, 2, "#f9f9f8"], [-2, 3, "#ebebeb"], [-1, 3, "#eeeeed"], [-1, 4, "#e4e4e3"]]],
        ["#f4f4f4", [[-1, 1, "#f9f9f8"], [0, 1, "#ededeb"], [-1, 2, "#ebebeb"], [0, 2, "#eeeeed"]]],
        ["#efefef", [[-1, 1, "#fafafa"], [-1, 2, "#efeeed"], [0, 3, "#e8e7e7"], [0, 3, "#e8e7e7"]]],
        ["#efefef", [[-1, 1, "#fafafa"], [-1, 2, "#efeeed"], [0, 2, "#dfdedc"], [0, 3, "#e8e7e7"]]],
        ["#f5f4f4", [[-1, 1, "#fafafa"], [-1, 1, "#fafafa"], [0, 4, "#e0dfdf"], [1, 4, "#e1e0df"]]],
        ["#f5f4f4", [[-1, 1, "#fafafa"], [-1, 2, "#f9f9f8"], [-1, 3, "#e5e4e3"], [0, 3, "#efeeed"]]],
        ["#f6f6f4", [[-1, 1, "#fcfcfc"], [-1, 2, "#f9f9f8"], [-1, 3, "#fdfdfc"], [0, 3, "#cdcccb"]]],
        ["#efefed", [[-1, 1, "#eeeeed"], [-1, 2, "#fafafa"], [-2, 3, "#d8d8d8"], [0, 4, "#efefef"]]],
        ["#eeeeed", [[-1, 2, "#d8d8d8"], [0, 2, "#f6f6f6"], [0, 1, "#fafafa"], [0, 3, "#d3d1d1"]]],
        ["#f0f0f0", [[-1, 1, "#f3f3f2"], [-2, 2, "#edeceb"], [-1, 2, "#f9f9f8"], [-1, 3, "#f3f3f2"]]],
        ["#e3e2e1", [[-1, 1, "#e3e2e1"], [-2, 2, "#dededc"], [-1, 2, "#fafafa"], [-1, 3, "#f1f1f0"]]],
        ["#eaeae9", [[0, 1, "#fcfcfc"], [-1, 1, "#e8e8e7"], [-1, 2, "#e6e5e5"], [1, 3, "#edeceb"]]],
        ["#e2e2e1", [[-2, 2, "#ebebeb"], [-2, 3, "#fafafa"], [-2, 4, "#f1f1f0"], [-1, 5, "#eae9e9"]]]
    ],
    right: [
        ["#dad8d6", [[2, 2, "#eceae9"], [4, 4, "#fdfcfa"], [2, 6, "#e6e4e3"], [0, 9, "#cbc9c6"]]],
        ["#e6e5e1", [[2, 2, "#f3f3f0"], [3, 4, "#e7e7e3"], [1, 6, "#e0e0dc"], [-1, 8, "#cdcbc6"]]],
        ["#f0eeeb", [[1, 1, "#f9f7f2"], [1, 2, "#e6e4df"], [1, 4, "#eae8e3"], [-2, 7, "#cdcbc6"]]],
        ["#e2dfd8", [[2, 2, "#f2f0eb"], [4, 4, "#fffffc"], [1, 7, "#e1dfd8"], [0, 10, "#969085"]]],
        ["#e4e0d8", [[3, 2, "#e0dcd8"], [4, 5, "#ebeae5"], [2, 7, "#e6e5df"], [0, 8, "#d4cfc6"]]],
        ["#d9d7d6", [[3, 3, "#f3f3f0"], [4, 4, "#fdfdfa"], [2, 7, "#dfdfdc"], [1, 8, "#d7d5d4"]]],
        ["#e6e6e3", [[2, 3, "#fdfcfa"], [1, 4, "#dcdad6"], [0, 6, "#e9e8e5"], [0, 6, "#e9e8e5"]]],
        ["#eaeae7", [[1, 2, "#fcfcfa"], [1, 3, "#f2f1ef"], [0, 4, "#eeeeeb"], [-1, 5, "#e9e8e5"]]],
        ["#eeede9", [[1, 1, "#f2f0ed"], [1, 2, "#fffefc"], [1, 3, "#f5f3f0"], [-1, 5, "#eeece7"]]],
        ["#dfdcd8", [[1, 1, "#e8e6e1"], [1, 3, "#f2f1ed"], [2, 3, "#fffefc"], [0, 5, "#f7f4f0"]]],
        ["#ebe9e5", [[2, 1, "#edece9"], [2, 2, "#fefdfc"], [1, 3, "#f9f8f4"], [0, 4, "#f5f3f0"]]],
        ["#edeae5", [[2, 2, "#fffefc"], [2, 1, "#efede9"], [1, 3, "#fbfaf4"], [0, 4, "#f7f4f0"]]],
        ["#edebe5", [[1, 1, "#f7f6f0"], [1, 2, "#f3f2ed"], [2, 2, "#fffffc"], [0, 4, "#f7f5f0"]]],
        ["#e4e2df", [[0, 1, "#f2f1ef"], [1, 1, "#ecebe7"], [1, 2, "#fdfcfa"], [0, 3, "#f7f6f2"]]],
        ["#f0f0ef", [[1, 1, "#f5f5f4"], [1, 2, "#f8f8f6"], [0, 3, "#f5f5f4"], [-1, 3, "#dcdbda"]]],
        ["#fdfcfa", [[0, 1, "#fcfbf8"], [1, 1, "#fbfaf6"], [0, 1, "#fcfbf8"], [0, 2, "#fdfcf8"]]],
        ["#cececb", [[0, 1, "#f9f9f6"], [-1, 1, "#fafaf8"], [-1, 2, "#fcfcf8"], [-2, 3, "#f8f7f6"]]],
        ["#fffffc", [[0, 1, "#fefdfa"], [1, 1, "#fcfcf8"], [0, 2, "#fffffa"], [-1, 3, "#fcfcf8"]]],
        ["#f5f4f0", [[0, 1, "#fdfcf8"], [1, 1, "#f6f5f2"], [1, 2, "#f4f3f0"], [0, 3, "#f8f6f2"]]],
        ["#fdfcf8", [[1, -1, "#b6b3ac"], [1, 1, "#f5f3f0"], [-1, 2, "#f6f3ef"], [0, 2, "#f8f6f2"]]],
        ["#fafaf6", [[0, 0, "#fafaf6"], [1, 0, "#f3f2f0"], [1, 1, "#f1f0ef"], [0, 2, "#f4f3f0"]]],
        ["#fcfbf6", [[1, 1, "#fffffd"], [1, 2, "#f3f1ed"], [0, 2, "#f3f2ed"], [0, 3, "#f0f0eb"]]],
        ["#fcfaf6", [[1, 0, "#e1dfda"], [1, 1, "#fffffd"], [1, 2, "#f2f1ed"], [0, 2, "#f3f1ed"]]],
        ["#faf9f6", [[1, 0, "#e1dfda"], [1, 1, "#fffffd"], [1, 2, "#f2f1ed"], [0, 2, "#f1f0ed"]]],
        ["#f9f8f4", [[1, 0, "#e0deda"], [1, 1, "#fffffd"], [2, 1, "#dbdad6"], [0, 2, "#f0f0eb"]]],
        ["#c4c2bc", [[2, 1, "#fffffd"], [3, 1, "#d9d9d4"], [1, 2, "#f1f0ed"], [2, 2, "#f0f0ed"]]],
        ["#fbfaf6", [[1, 1, "#fffffd"], [2, 1, "#dbdad6"], [1, 2, "#f1f0ed"], [0, 2, "#f2f1ed"]]],
        ["#fcfcfa", [[0, 1, "#f0f0f0"], [1, 1, "#fcfcfc"], [0, 2, "#f9f9f8"], [1, 2, "#e6e6e5"]]],
        ["#f9f7f4", [[1, 1, "#fffefc"], [1, 2, "#fdfcf8"], [0, 3, "#fbf9f4"], [2, 1, "#eeebe5"]]],
        ["#f8f6f4", [[1, 1, "#fffffc"], [2, 1, "#efece7"], [1, 2, "#fefcf8"], [0, 3, "#faf8f4"]]],
        ["#e7e6e5", [[1, 1, "#edeceb"], [1, 2, "#fbfafa"], [1, 3, "#e1dfdc"], [0, 4, "#dfdedc"]]],
        ["#efeeeb", [[1, 1, "#f8f7f4"], [1, 2, "#fdfcfa"], [0, 3, "#f2f0ef"], [2, 1, "#e0dfda"]]],
        ["#e6e4e1", [[1, 0, "#f0eeeb"], [1, 1, "#fcfcfa"], [1, 2, "#f2f0ef"], [-1, 3, "#cccbc6"]]],
        ["#f5f3ef", [[1, 1, "#fbf9f4"], [1, 2, "#fffdfa"], [0, 3, "#fcfbf6"], [-1, 4, "#faf8f2"]]],
        ["#dad8d1", [[2, 1, "#faf8f4"], [2, 2, "#fefcfa"], [1, 3, "#fbfaf6"], [0, 4, "#f9f8f2"]]],
        ["#efeded", [[1, 1, "#f5f4f2"], [1, 2, "#faf9f8"], [0, 3, "#f5f4f4"], [-1, 4, "#f2f1f0"]]],
        ["#f5f4f0", [[0, 1, "#fcfcf8"], [1, 1, "#f0efeb"], [0, 2, "#f7f5f2"], [-1, 3, "#f3f3ef"]]],
        ["#f4f3f0", [[0, 1, "#fcfbf8"], [1, 1, "#f0eeeb"], [-1, 2, "#d1d0cd"], [-1, 3, "#f1f1ef"]]],
        ["#f4f3f0", [[0, 1, "#fcfbf8"], [1, 1, "#efefeb"], [0, 2, "#f6f4f2"], [-1, 3, "#f1f1ef"]]],
        ["#fcfcf8", [[1, 1, "#fefefc"], [1, 2, "#ededeb"], [0, 2, "#f7f6f4"], [-1, 3, "#edece9"]]],
        ["#fcfcf8", [[1, 1, "#fefefc"], [2, 1, "#d1d1cd"], [1, 2, "#ededeb"], [0, 2, "#f7f6f4"]]],
        ["#fcfcf8", [[0, 1, "#edebe9"], [1, 1, "#fffefc"], [1, 2, "#eeedeb"], [0, 3, "#eceae7"]]],
        ["#f7f6f4", [[1, 1, "#fcfcfc"], [2, 1, "#dededc"], [1, 2, "#f3f3f2"], [0, 3, "#f1f0ef"]]],
        ["#f7f6f4", [[2, 1, "#dededc"], [1, 1, "#fcfcfc"], [1, 2, "#f3f3f2"], [0, 3, "#f1f0ef"]]],
        ["#d5d3d1", [[2, 2, "#dededc"], [1, 2, "#fdfcfc"], [1, 3, "#f4f3f2"], [0, 3, "#e7e6e3"]]],
        ["#f2f1ef", [[1, 1, "#faf9f6"], [2, 1, "#dedbd8"], [1, 2, "#fdfcfa"], [0, 3, "#e1dfdc"]]],
        ["#f6f5f0", [[1, 1, "#fcfbf8"], [2, 1, "#dfdcd8"], [2, 2, "#f1f0ed"], [1, 3, "#f6f4f0"]]],
        ["#fcfcf8", [[-1, -1, "#f6f5f0"], [1, 1, "#f1f0ed"], [0, 2, "#f6f5f0"], [-1, 3, "#f6f4f0"]]],
        ["#fcfcf8", [[1, 0, "#e0ded8"], [0, 1, "#fffffc"], [1, 1, "#f2f1ed"], [-1, 3, "#f4f2f0"]]],
        ["#d8d7d6", [[1, 2, "#e5e3e1"], [3, 3, "#eceae5"], [3, 4, "#fefdfa"], [1, 7, "#ebe9e7"]]],
        ["#ebe9e3", [[2, 1, "#efede7"], [2, 2, "#fffffc"], [1, 4, "#f7f4ef"], [0, 5, "#f0efe9"]]],
        ["#e2e0da", [[1, 2, "#f0eeeb"], [2, 3, "#fffffc"], [1, 5, "#f5f2ef"], [0, 6, "#edece7"]]],
        ["#e2e1e1", [[1, 1, "#eaeae9"], [2, 2, "#fbfbfa"], [1, 3, "#ececeb"], [0, 4, "#e1e1df"]]],
        ["#e7e5e3", [[2, 1, "#e8e7e3"], [2, 2, "#fefdfa"], [1, 3, "#f0f0eb"], [0, 4, "#e6e5e1"]]],
        ["#e2e1e1", [[2, 1, "#e5e4e3"], [2, 2, "#fcfbfa"], [1, 3, "#ececeb"], [0, 4, "#e1e1df"]]]
    ],
    rightUp: [
        ["#eeeeed", [[2, 0, "#f0f0ef"], [3, 0, "#e1e1df"], [3, 1, "#f0f0f0"], [3, 2, "#f7f7f6"]]],
        ["#d5d0cd", [[3, 0, "#e7e5e3"], [6, 0, "#f9f9f8"], [7, 3, "#f7f6f6"], [7, 8, "#c7c2be"]]]
    ]
};



const BlankColorList = [
    ["#f6f8c1", [[8, 0, "#e1e3b1"], [17, -1, "#fcffc6"], [35, -1, "#dcdfae"], [50, -1, "#f9fcc3"]]],
    ["#eedc99", [[13, 0, "#fdeba3"], [25, 0, "#ebd998"], [42, 0, "#ffeca5"], [59, 1, "#ffeca5"]]],
    ["#feffc8", [[3, 0, "#fcffc6"], [3, 4, "#e6e9b6"], [1, 7, "#fcfec6"], [7, 10, "#e2e4b2"]]]
];

const QuestionMarkColorList = [
    ["#d5b0ff", [[7, -1, "#d4affd"], [3, 3, "#d0acfa"], [9, 6, "#b595d8"], [1, 7, "#cca8f4"]]],
    ["#d5b0ff", [[7, -3, "#d5b0ff"], [0, 5, "#c6a3ed"], [11, 4, "#b192d4"], [3, 2, "#d5b0ff"]]]
];
const NextColorList = [
    ["#ffd074", [[3, 0, "#ffd074"], [8, -5, "#ffd074"], [12, -1, "#ffd074"], [8, 5, "#ffd074"]]],
    ["#ffd074", [[7, -4, "#fccf73"], [7, 5, "#ffd074"], [12, 0, "#ffd074"], [11, -1, "#ecc16c"]]],
    ["#ffd074", [[8, -5, "#ffd074"], [7, 5, "#ffd074"], [10, -3, "#ffd074"], [11, 2, "#ffd074"]]]
];
const Auto_inactiveColorList = [
    ["#b3a9a0", [[6, 1, "#b3aaa2"], [17, 1, "#b4aba2"], [23, 1, "#b4aba2"], [30, 1, "#b4aba2"]]],
    ["#b0a69e", [[6, 0, "#b3aaa2"], [17, 0, "#b4aba2"], [23, 1, "#b4aba2"], [30, 1, "#a29991"]]]
];
const Auto_activeColorList = [
    ["#f9f1e9", [[7, 1, "#fdefdf"], [18, 0, "#feedda"], [24, 2, "#fef3e7"], [31, 2, "#fffbf8"]]],
    ["#f5eadf", [[8, 0, "#f5e1cb"], [18, 2, "#feecda"], [24, 4, "#fef2e7"], [31, 2, "#f4ece1"]]]
];
const QuestColorList = [
    ["#f7f1eb", [[2, -8, "#fbf0e5"], [0, -13, "#faf2eb"], [-5, -13, "#faf5f0"], [-7, -10, "#fcf9f4"]]]
];
const RidingColorList = [
    ["#553e55", [[9, 0, "#ffffff"], [9, 8, "#ffffff"], [18, 4, "#ffffff"], [24, 8, "#5a4158"]]]
];
const TalkColorList = [

];
const LeaveColorList = [
    ["#dccb96", [[-2, 5, "#ccba8b"], [-1, 17, "#bdad80"], [7, 8, "#dccb96"], [13, 9, "#cdbc8b"]]]
];
const TalkBubbleColorList = [
    ["#c6c6c6", [[7, -5, "#fdfdfd"], [14, -5, "#fafafa"], [8, 0, "#dfdfdf"], [17, 4, "#f1f1f0"]]]
];

const SpeedUpOffColorList = [
    ["#999999", [[23, -7, "#939392"], [18, 2, "#9e9e9e"], [33, -7, "#949492"], [30, 2, "#9e9e9d"]]]
];

module.exports = {
    TipColorList, ArrowColorList, BlankColorList, QuestionMarkColorList, NextColorList, Auto_inactiveColorList, Auto_activeColorList, QuestColorList, RidingColorList,
    TalkColorList, LeaveColorList, TalkBubbleColorList, SpeedUpOffColorList
};