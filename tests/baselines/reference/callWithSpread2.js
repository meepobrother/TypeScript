//// [callWithSpread2.ts]
declare function all(a?: number, b?: number): void;
declare function weird(a?: number | string, b?: number | string): void;
declare function prefix(s: string, a?: number, b?: number): void;
declare function rest(s: string, a?: number, b?: number,  ...rest: number[]): void;
declare function normal(s: string): void;
declare function thunk(): string;
declare function prefix2(s: string, n: number, a?: number, b?: number): void;

declare var ns: number[];
declare var mixed: (number | string)[];
declare var tuple: [number, string];

// good
all(...ns)
weird(...ns)
weird(...mixed)
weird(...tuple)
prefix("a", ...ns)
rest("d", ...ns)


// extra arguments
normal("g", ...ns)
thunk(...ns)

// bad
all(...mixed)
all(...tuple)
prefix("b", ...mixed)
prefix("c", ...tuple)
rest("e", ...mixed)
rest("f", ...tuple)
prefix(...ns) // required parameters are required
prefix(...mixed)
prefix(...tuple)
prefix2("g", ...ns);


//// [callWithSpread2.js]
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            ar.push(arguments[i][j]);
    return ar;
};
// good
all.apply(void 0, ns);
weird.apply(void 0, ns);
weird.apply(void 0, mixed);
weird.apply(void 0, tuple);
prefix.apply(void 0, __spreadArrays(["a"], ns));
rest.apply(void 0, __spreadArrays(["d"], ns));
// extra arguments
normal.apply(void 0, __spreadArrays(["g"], ns));
thunk.apply(void 0, ns);
// bad
all.apply(void 0, mixed);
all.apply(void 0, tuple);
prefix.apply(void 0, __spreadArrays(["b"], mixed));
prefix.apply(void 0, __spreadArrays(["c"], tuple));
rest.apply(void 0, __spreadArrays(["e"], mixed));
rest.apply(void 0, __spreadArrays(["f"], tuple));
prefix.apply(void 0, ns); // required parameters are required
prefix.apply(void 0, mixed);
prefix.apply(void 0, tuple);
prefix2.apply(void 0, __spreadArrays(["g"], ns));
