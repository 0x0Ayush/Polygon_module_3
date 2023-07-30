pragma circom 2.0.0;

/*This circuit template makes a circuit output solution that is given by the Metacrafters Module 3 Project !*/  

template Multiplier2 () {  

    // signal inputs 
    
    signal input a;
    signal input b;

    // signals from our gates

    signal x;
    signal y;
    
    // final signal output

    signal output q;

    // components used in the gates stuff 

    component andGate = AND();
    component notGate = NOT();
    component orGate = OR();

    // logics for our gates 

    andGate.a <== a;
    andGate.b <== b;
    x <== andGate.out;

    notGate.in <== b;
    y <== notGate.out;

    orGate.a <== x;
    orGate.b <== y;
    q <== orGate.out;

    // output prinitng the End values from the given circuit 

    log("The End Value of Q is : ", q);
    

}

template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}

template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a*b;
}


component main = Multiplier2();