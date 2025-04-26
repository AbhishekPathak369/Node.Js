// :::::::::::::::::::::::    Event Loop ::::::::::::::::::::::::::::::::::::::::::

//>1 ------------------------ Event Driven --------------------------
// # Click here -> Event Listener -> Event Queue -> Event Loop -> Event Handler

//>2 ------------------------ Single Threaded    ----------------
// # many req come to node js and it will tranfer it works to the helper . (node has helper pool where many helper work for node)
//  # ek baar mai only one task kr skta hai

// >3 ---------------------- - V8 vs libuv ------------------
// # V8:- it convert js code to machine code
// # libuv :-  Event loop, provides event- driven architecture  
// # libuv is real hustler

// >4:::::::::::::::::::::::  Node Runtime

//  #  both V8 and libuv work but libuv work when there is any asynchronous task is come 

//>5   :::::::::::::::::  Event Loop

//#  timer(srtTimeout() , setInterval()) -> pending callbacks (prev pending callback) -> idle,prepare -> poll -> check -> close callbacks 

//>6 :::::::::::::::::::::;  Async Code :::::::::::::::::::::::::::::::::::::::::::::

// # EX- In calculator we must send responde in end portion so that all cunks are colleted completely 

// Conclusion :- this lec include understanding async operation like (writefile) or (or asyncoperation) do task not immediate so we need to manage our result or output
 



