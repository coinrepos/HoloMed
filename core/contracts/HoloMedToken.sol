// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HoloMedToken is ERC20 {
    address public admin;

    constructor() ERC20("HoloMed Token", "HMD") {
        _mint(msg.sender, 10000000 * 10 ** decimals());
        admin = msg.sender;
    }

    function mint(address to, uint amount) external {
        require(msg.sender == admin, "Not admin");
        _mint(to, amount);
    }
}
