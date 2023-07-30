# ZK SNARK Designer

For this project, we are creating a circuit using the circom programming language that implements the following logical gate:

![image](https://github.com/punks783/Polygon_module_3/assets/99666258/34f3e06c-b8d2-478b-a23f-d23d68dc07e6)

Our goal is to prove you know the inputs A (0) & B (1) that yield a 0 output.

# The Multiplier2 circuit is a simple logic circuit that performs logical operation of two input signals a and b.

Circuit Details

# Input Signals
`a`: Input signal
`b`: Input signal

# Gates
`AND Gate:` Computes the logical AND of input signals a and b.
`NOT Gate:` Computes the logical NOT of input signal b.
`OR Gate:` Computes the logical OR of the outputs of the AND and NOT gates.

# Output Signal
`q:` The final output signal representing the result of the logical operation of a and b.

# Circuit Logic

The AND gate computes the logical AND of the input signals a and b and stores the result in signal x.
The NOT gate computes the logical NOT of the input signal b and stores the result in signal y.
The OR gate computes the logical OR of signals x and y, representing the final output, and stores the result in signal q.

# Steps

1. Git clone this repo .
2. `cd Polygon_module_3` and run `npm install` or `yarn install` which ever You Have.
3. Then go to the `circom` file and make the changes ! as needed to complete the gates.
4. configure `hardhat.config.ts` so we can deploy our contract to the matic mumbai testnet.
5. To add rpc to metamask use `chainlist.org`.
6. Take the `MATIC` faucet tokens from `https://mumbaifaucet.com/`.
7. Run the command `npx hardhat circom` on your terminal to compile up the contract !.
8. To deploy the contract run : `npx hardhat run scripts/deploy.ts --network mumbai` .

# Output :
```solidity
Compiled 1 Solidity file successfully
Verifier deployed to 0xf822556079b13E8548523107506281C428762e69
The End Value of Q is :  0
Verifier result: true   

```
