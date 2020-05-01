# checksums
A NPM Package For Finding The Checksums Of A File

## Usage 
Normal Usage `./checksums.js`

For Finding MD4 Hashes `./checksums.js | grep MD4`

For Finding MD5 Hashes `./checksums.js | grep MD5`

For Finding SHA512 Hashes `./checksums.js | grep SHA512`

For Finding SHA256 Hashes `./checksums.js | grep SHA256`

For Finding SHA1 Hashes `./checksums.js | grep SHA1`

## Output


`
> node checksums.js

 ▄████▄   ██░ ██ ▓█████  ▄████▄   ██ ▄█▀  ██████  █    ██  ███▄ ▄███▓  ██████ 
▒██▀ ▀█  ▓██░ ██▒▓█   ▀ ▒██▀ ▀█   ██▄█▒ ▒██    ▒  ██  ▓██▒▓██▒▀█▀ ██▒▒██    ▒ 
▒▓█    ▄ ▒██▀▀██░▒███   ▒▓█    ▄ ▓███▄░ ░ ▓██▄   ▓██  ▒██░▓██    ▓██░░ ▓██▄   
▒▓▓▄ ▄██▒░▓█ ░██ ▒▓█  ▄ ▒▓▓▄ ▄██▒▓██ █▄   ▒   ██▒▓▓█  ░██░▒██    ▒██   ▒   ██▒
▒ ▓███▀ ░░▓█▒░██▓░▒████▒▒ ▓███▀ ░▒██▒ █▄▒██████▒▒▒▒█████▓ ▒██▒   ░██▒▒██████▒▒
░ ░▒ ▒  ░ ▒ ░░▒░▒░░ ▒░ ░░ ░▒ ▒  ░▒ ▒▒ ▓▒▒ ▒▓▒ ▒ ░░▒▓▒ ▒ ▒ ░ ▒░   ░  ░▒ ▒▓▒ ▒ ░
  ░  ▒    ▒ ░▒░ ░ ░ ░  ░  ░  ▒   ░ ░▒ ▒░░ ░▒  ░ ░░░▒░ ░ ░ ░  ░      ░░ ░▒  ░ ░
░         ░  ░░ ░   ░   ░        ░ ░░ ░ ░  ░  ░   ░░░ ░ ░ ░      ░   ░  ░  ░  
░ ░       ░  ░  ░   ░  ░░ ░      ░  ░         ░     ░            ░         ░  
░                       ░                                                     
checksums-cli>? Type The Path To The File You Want To Find The Checksum Of > a
PATH: a
SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
SHA512:cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e
SHA1:da39a3ee5e6b4b0d3255bfef95601890afd80709
MD5:d41d8cd98f00b204e9800998ecf8427e
MD4:31d6cfe0d16ae931b73c59d7e0c089c0`
