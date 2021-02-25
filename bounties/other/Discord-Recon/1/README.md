# Description:

- Discord-Recon is vulnerable to LFI where remote attacker can escape the recon path and access external files in the system and read files outside the recon path in some cases. this issue happens due to improper symlink validation.

# Steps to reproduce:

1. Open your discord-server recon path
2. Create a symlink that point to any local file
3. Use `.recon` command and call this symlink file.

# Proof Of Concept:

Content of `etc/hostname` from @DEMON1A server.

<img src=https://media.discordapp.net/attachments/813663937345749082/814462361129058304/unknown.png>

# Impact:

Remote low privilege attacker able to read content of the local files for the server.
