import React, { useState } from "react";
import { BrowserProvider } from "ethers";
import { Button, Typography, Box, Stack } from "@mui/material";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];
        setWalletAddress(address);
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnectWallet = () => {
    // Ethereum doesn't have a built-in disconnect, so we just clear the UI state
    setWalletAddress("");
  };

  return (
    <Box sx={{ textAlign: "center", mb: 2 }}>
      {walletAddress ? (
        <Stack spacing={1}>
          <Typography variant="body1" color="primary">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={disconnectWallet}
            sx={{ borderRadius: "20px" }}
          >
            Disconnect Wallet
          </Button>
        </Stack>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={connectWallet}
          sx={{ borderRadius: "20px" }}
        >
          Connect Wallet
        </Button>
      )}
    </Box>
  );
};

export default WalletConnect;


