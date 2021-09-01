var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("pandas")};
    
    // func: pandas.Series()
    mod.Series=new Sk.builtin.func(function(dict,index) {
        // Parse arguments
        var dict= Sk.ffi.remapToJs(dict)
        var dict_index= Sk.ffi.remapToJs(index) || [];
        if(dict_index==[]){//没有传入index值
            console.log("1")
            console.log(dict_index)
            var s = new dfd.Series(dict)
            s.print()
            return Sk.ffi.remapToPy(s)
        }else{
            console.log("2")
            console.log(dict_index)
            var s = new dfd.Series(dict, {index:dict_index })
            s.print()
            return Sk.ffi.remapToPy(s)
        }
    })

	return mod;
}
