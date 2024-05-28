#!/bin/bash

swap_size="3G"

# Create the swap file
sudo fallocate -l "$swap_size" /swapfile

# Set proper permissions on the swap file
sudo chmod 600 /swapfile

# Mark the file as swap space
sudo mkswap /swapfile

# Enable the swap file
sudo swapon /swapfile

# Make the swap file permanent across reboots
echo "/swapfile swap swap defaults 0 0" | sudo tee -a /etc/fstab

